import style from "./MainInfo.module.css";
const MainInfo = () => {
  return (
    <div className={style.mainDiv}>
      <div className="my-auto flex flex-col gap-[40px] justify-center items-center">
        <p className="text-[52px] text-white font-medium text-center w-[70%]">
          Народ не знающий свою историю лишает себя корней
        </p>
        <div className="text-center flex gap-[20px] justify-center">
          <button className="w-[234px] bg-[#CC67F8] font-medium text-xl text-white py-[5px] px-[10px] rounded-[24px]">Смотреть каталог</button>
          <button className="w-[234px] font-medium text-xl text-white px-[15px] py-[5px] border-white border-2 rounded-[24px]">Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
