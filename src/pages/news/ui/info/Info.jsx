import styles from "./Info.module.scss";

const Info = () => {
  return (
    <div className={styles.div}>
      <div className="max-w-[40%] m-28">
        <h2 className="text-white text-[52px] font-bold">Чингисхан</h2>
        <p className="text-white text-2xl ">
          Lorem ipsum dolor sit amet consectetur. Convallis in eros enim proin
          lacus euismod. Cursus rhoncus turpis id aliquet massa at lobortis
          posuere enim.
        </p>
      </div>
    </div>
  );
};

export default Info;
