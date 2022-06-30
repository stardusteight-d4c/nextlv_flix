export const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className="mb-2 md:mb-8 relative text-white duration-300 hover:scale-105 group">
        <div>
          <img
            src={cover}
            className="w-[100vw] md:w-[350px] h-full absolute top-0 left-0 -z-20 object-cover opacity-90"
          />
        </div>
        <div className="p-9">
          <h3 className="font-medium px-2 rounded-full mb-[15px] bg-gradient-to-r from-black/70 to-transparent">{name}</h3>
          <span>{time}</span>
          <br />
          <button className="mt-4 py-2 px-4 text-sm bg-black/90 cursor-pointer flex items-center duration-300 ease-in-out group-hover:bg-red-300/90">
            <i className="ri-play-circle-fill text-3xl mr-[10px]"></i> ASSISTIR AGORA
          </button>
        </div>
      </div>
    </>
  )
}
