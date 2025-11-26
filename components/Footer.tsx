import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-solid border-gray-200 dark:border-gray-800 px-6 md:px-10 py-8 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-secondary dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} ManageTimeApp. Direitos autorais.
        </p>
        <div className="flex items-center gap-6">
          {['Sobre', 'Suporte', 'Privacidade'].map((item) => (
            <a
              key={item}
              className="text-secondary dark:text-gray-400 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;