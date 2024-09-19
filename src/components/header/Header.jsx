import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between my-[40px] px-[40px] gap-[172px]">
      <div className="text-[24px] font-bold">
        Jash Story
      </div>

      {/* Burger Menu Button for Mobile */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <nav aria-label="Main Navigation" className="hidden lg:flex">
        <ul className="flex gap-12">
          <li className="hover:text-[20px] transition-all duration-700 ease-in-out">Мировая история</li>
          <li className="hover:text-[20px] transition-all duration-700 ease-in-out">История Кыргызстана</li>
          <li className="hover:text-[20px] transition-all duration-700 ease-in-out">Олимпиадная история</li>
          <li className="hover:text-[20px] transition-all duration-700 ease-in-out">О нас</li>
        </ul>
      </nav>

      {isMenuOpen && (
        <nav className="absolute top-[80px] left-0 w-full bg-white lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">Мировая история</li>
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">История Кыргызстана</li>
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">Олимпиадная история</li>
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">О нас</li>
          </ul>
        </nav>
      )}

      {/* Login Button */}
      <button className="hidden lg:block text-white bg-black rounded-[45px] text-2xl px-[27px] py-[4px] hover:bg-gray-800 transition-all duration-300 ease-in-out">
        Войти
      </button>
    </header>
  );
};

export default Header;
