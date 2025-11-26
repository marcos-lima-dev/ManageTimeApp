import React from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 px-6 md:px-10 py-4 sticky top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4 text-soft-black dark:text-white">
        <span className="material-symbols-outlined text-primary text-3xl select-none">hourglass_top</span>
        <h2 className="text-soft-black dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          ManageTimeApp
        </h2>
      </div>
      
      <div className="hidden md:flex flex-1 justify-center gap-8">
        <div className="flex items-center gap-9">
          <a className="text-soft-black dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#features">
            Funcionalidades
          </a>
          <a className="text-soft-black dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#benefits">
            Benefícios
          </a>
          <a className="text-soft-black dark:text-gray-300 text-sm font-medium leading-normal hover:text-primary dark:hover:text-primary transition-colors" href="#screenshots">
            Telas
          </a>
        </div>
      </div>

      <div className="flex items-center justify-end gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          <span className="material-symbols-outlined text-soft-black dark:text-white">
            {isDarkMode ? 'light_mode' : 'dark_mode'}
          </span>
        </button>
        <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span className="truncate">Baixar o App</span>
        </button>
      </div>
    </header>
  );
};

export default Header;