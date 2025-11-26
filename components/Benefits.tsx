import React from 'react';

const Benefits: React.FC = () => {
  return (
    <section className="px-4 py-20" id="benefits">
      <div className="flex flex-col gap-4 text-center items-center mb-12">
        <h2 className="text-soft-black dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] md:text-4xl">
          Foque no que Importa
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center justify-center p-8 bg-primary/10 dark:bg-primary/20 rounded-xl hover:bg-primary/20 transition-colors cursor-default">
          <h3 className="text-2xl font-bold text-primary dark:text-primary/90 text-center">
            Nunca mais esqueça seus compromissos.
          </h3>
        </div>
        <div className="flex items-center justify-center p-8 bg-accent-green/10 dark:bg-accent-green/20 rounded-xl hover:bg-accent-green/20 transition-colors cursor-default">
          <h3 className="text-2xl font-bold text-accent-green dark:text-accent-green/90 text-center">
            Vizualização clara da sua rotina.
          </h3>
        </div>
        <div className="flex items-center justify-center p-8 bg-primary/10 dark:bg-primary/20 rounded-xl md:col-span-1 hover:bg-primary/20 transition-colors cursor-default">
          <h3 className="text-2xl font-bold text-primary dark:text-primary/90 text-center">
            Sincronização automática com sua conta Google.
          </h3>
        </div>
        <div className="flex items-center justify-center p-8 bg-accent-green/10 dark:bg-accent-green/20 rounded-xl md:col-span-1 hover:bg-accent-green/20 transition-colors cursor-default">
          <h3 className="text-2xl font-bold text-accent-green dark:text-accent-green/90 text-center">
            Produtividade sem complicação.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Benefits;