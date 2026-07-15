import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-surface-dim border-t border-white/5 w-full py-stack-lg mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter px-margin-desktop max-w-container-max mx-auto">
        <div>
          <div className="font-display text-headline-md text-on-surface mb-4">AetherAI</div>
          <p className="font-body-md text-on-surface-variant max-w-sm opacity-60 mb-8">
            © 2024 AetherAI. Precision intelligence for the modern professional.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all text-on-surface hover:text-white" href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-all text-on-surface hover:text-white" href="#">
              <span className="material-symbols-outlined text-lg">code</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-on-surface tracking-widest text-[10px] uppercase">Product</span>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">
              Documentation
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">
              Pricing
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">
              Status
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-on-surface tracking-widest text-[10px] uppercase">Company</span>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">
              About Us
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">
              Privacy Policy
            </a>
            <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors text-sm" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
