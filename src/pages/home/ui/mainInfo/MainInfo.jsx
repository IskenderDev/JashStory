import style from "./MainInfo.module.css";
const MainInfo = () => {
  return (
    <div className={style.mainDiv}>
      <div className="my-auto">
        <p className="text-[52px] text-white font-medium ">
          Народ не знающий свою историю лишает себя корней
        </p>
        <div className="text-center flex gap-[20px] justify-center">
          <button>Смотреть каталог</button>
          <button>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
