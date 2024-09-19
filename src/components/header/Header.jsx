const Header = () => {
    return (
      <header className="flex justify-between my-[40px] px-[40px] gap-[172px]">
        <div className="text-[24px] font-bold">
          Jash Story
        </div>
        <nav aria-label="Main Navigation">
          <ul className="flex gap-12">
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">Мировая история</li>
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">История Кыргызстана</li>
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">Олимпиадная история</li>
            <li className="hover:text-[20px] transition-all duration-700 ease-in-out">О нас</li>
          </ul>
        </nav>
        <button className="text-white bg-black rounded-[45px] text-2xl px-[27px] py-[4px] hover:bg-gray-800 transition-all duration-300 ease-in-out">
          Войти
        </button>
      </header>
    );
  };
  
  export default Header;
  