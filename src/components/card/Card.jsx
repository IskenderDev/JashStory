const Card = ({img, text, price}) => {
  return (
    <div className="bg-[#E5E5E5] w-[424px] rounded-[15px] h-[342px] flex flex-col p-[20px] gap-4  ">
      <img src={img} alt="img" />
      <p className="font-medium text-xl">{text}</p>
      <div className="flex justify-between mt-[10px]">
        <span className="font-medium text-[24px]">{price}</span>
        <button className="bg-[#434343] text-white w-[186px] rounded-[24px]">Читать</button>
      </div>
    </div>
  );
};

export default Card;
