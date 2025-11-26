import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-1 gap-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-soft-black/20 p-6 flex-col hover:border-primary/50 dark:hover:border-primary/50 transition-colors group">
    <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform duration-300 origin-left">{icon}</span>
    <div className="flex flex-col gap-1">
      <h3 className="text-soft-black dark:text-white text-lg font-bold leading-tight">
        {title}
      </h3>
      <p className="text-secondary dark:text-gray-400 text-sm font-normal leading-normal">
        {description}
      </p>
    </div>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: 'sync',
      title: 'Integração com Google Calendar',
      description: 'Integre perfeitamente com seu Google Calendar existente.'
    },
    {
      icon: 'notifications_active',
      title: 'Lembretes inteligentes',
      description: 'Receba notificações para nunca perder um compromisso.'
    },
    {
      icon: 'add_circle',
      title: 'Adicionar compromissos em segundos',
      description: 'Adicione novos compromissos e tarefas rapidamente.'
    },
    {
      icon: 'view_week',
      title: 'Visualização por dia, semana e mês',
      description: 'Veja sua agenda da forma que preferir.'
    },
    {
      icon: 'dark_mode',
      title: 'Tema claro e escuro',
      description: 'Alterne entre temas para seu conforto visual.'
    },
    {
      icon: 'cloud_upload',
      title: 'Backup automático',
      description: 'Seus dados estão sempre seguros e salvos.'
    }
  ];

  return (
    <section className="px-4 py-20" id="features">
      <div className="flex flex-col gap-4 text-center items-center mb-12">
        <h2 className="text-soft-black dark:text-white text-3xl font-bold leading-tight tracking-[-0.015em] md:text-4xl">
          Funcionalidades Poderosas
        </h2>
        <p className="text-secondary dark:text-gray-400 text-base font-normal leading-normal max-w-2xl">
          O ManageTimeApp está repleto de funcionalidades projetadas para tornar sua vida mais simples e produtiva.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;