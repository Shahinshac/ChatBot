import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-stack-lg relative overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-desktop text-center">
        <h2 className="font-headline-lg text-headline-lg text-on-surface mb-20">Seamless Implementation</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] step-connector -translate-y-1/2 z-0" />
          
          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full glass-card border border-primary/30 flex items-center justify-center mb-8 bg-surface-container glow-primary">
              <span className="material-symbols-outlined text-3xl text-primary" data-icon="cable">
                cable
              </span>
            </div>
            <h4 className="font-headline-md text-xl mb-2 text-on-surface">1. Connect</h4>
            <p className="text-on-surface-variant font-body-md max-w-[200px] opacity-80">
              Ingest your documentation and internal data silos securely.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full glass-card border border-primary/30 flex items-center justify-center mb-8 bg-surface-container glow-primary">
              <span className="material-symbols-outlined text-3xl text-primary" data-icon="model_training">
                model_training
              </span>
            </div>
            <h4 className="font-headline-md text-xl mb-2 text-on-surface">2. Train</h4>
            <p className="text-on-surface-variant font-body-md max-w-[200px] opacity-80">
              Our agents learn your brand voice and specific technical domain.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full glass-card border border-primary/30 flex items-center justify-center mb-8 bg-surface-container glow-primary">
              <span className="material-symbols-outlined text-3xl text-primary" data-icon="rocket_launch">
                rocket_launch
              </span>
            </div>
            <h4 className="font-headline-md text-xl mb-2 text-on-surface">3. Deploy</h4>
            <p className="text-on-surface-variant font-body-md max-w-[200px] opacity-80">
              Launch to your team via API, custom UI, or workspace apps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
