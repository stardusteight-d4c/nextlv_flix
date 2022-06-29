export const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className="relative text-white duration-300 hover:scale-105">
        <div className="img border-l-4 ">
          <img
            src={cover}
            className="w-[350px] absolute top-0 left-0 -z-20 object-cover opacity-90 border-white duration-300 hover:border-red-300 hover:scale-105"
          />
        </div>
        <div className="py-[70px] px-[50px]">
          <h3 className="font-medium mb-[15px]">{name}</h3>
          <span>{time}</span>
          <br />
          <button className="mt-[15px] py-[12px] px-[20px] text-sm bg-red-300 cursor-pointer">
            <i className="ri-play-circle-fill  mr-[10px]"></i> ASSISTIR AGORA
          </button>
        </div>
      </div>
    </>
  )
}
