import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import MainInfo from "./ui/mainInfo/MainInfo";

const Home = () => {
  return (
    <>
      <Header />
      <MainInfo />
      <div className="grid grid-cols-3 gap-6 px-6 py-6 mx-[160px]">
        <Card img='/src/assets/picture1.svg' text='“Революционные техники в творчестве Джуди Чикаго”' price={'1500'} />
        <Card img='/src/assets/picture1.svg' text='“Революционные техники в творчестве Джуди Чикаго”' price={'1500'} />
        <Card img='/src/assets/picture1.svg' text='“Революционные техники в творчестве Джуди Чикаго”' price={'1500'} />
        <Card img='/src/assets/picture1.svg' text='“Революционные техники в творчестве Джуди Чикаго”' price={'1500'} />
        <Card img='/src/assets/picture1.svg' text='“Революционные техники в творчестве Джуди Чикаго”' price={'1500'} />
        <Card img='/src/assets/picture1.svg' text='“Революционные техники в творчестве Джуди Чикаго”' price={'1500'} />
      </div>
    </>
  );
};

export default Home;
