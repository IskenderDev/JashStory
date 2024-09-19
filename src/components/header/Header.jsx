import logo from "/src/assets/JashStory.svg";
const Header = () => {
  return (
    <div className="flex justify-between my-[40px] px-[40px] gap-[172px]">
      <div className="text-[24px] font-bold">
      Jash Story
      </div>
      <nav>
        <ul className="flex gap-12">
          <li >Мировая история </li>
          <li>История Кыргызстана</li>
          <li>Олимпиадная история</li>
          <li>О нас</li>
        </ul>
      </nav>
      <button className="text-white bg-black rounded-[45px] text-2xl px-[27px] py-[4px]" >Войти</button>
    </div>
  );
};

export default Header;
