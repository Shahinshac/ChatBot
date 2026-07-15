import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const apiKey = process.env.GROQ_API_KEY;

const groq = new Groq({
  apiKey: apiKey,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid messages format' },
        { status: 400 }
      );
    }

    // Map sender 'ai' to 'assistant' and 'user' to 'user'
    const formattedMessages = messages.map((msg: { sender: 'ai' | 'user'; text: string }) => ({
      role: msg.sender === 'ai' ? 'assistant' as const : 'user' as const,
      content: msg.text,
    }));

    // Call Groq API
    const completion = await groq.chat.completions.create({
      messages: formattedMessages,
      model: 'llama-3.3-70b-versatile',
    });

    const reply = completion.choices[0]?.message?.content || '';

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error('Groq API Error:', error);
    return NextResponse.json(
      { error: error?.message || 'An error occurred while communicating with the AI model.' },
      { status: 500 }
    );
  }
}
