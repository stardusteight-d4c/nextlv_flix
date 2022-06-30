import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <>
      <div className="box">
        <div className="absolute top-0 w-full h-[100vh] -z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-[100vh] after:z-40 after:bg-gradient-to-br after:from-black/40 after:to-black/90">
          <img src={cover} className="w-[100vw] h-[100vh] object-cover" />
        </div>
        <div className="md:py-20 md:px-32 flex flex-col md:flex-row">
          <div className="md:max-w-[55vw]">
            <h1 className="md:mt-6 mt-24 text-5xl text-center md:text-start md:text-8xl uppercase font-extrabold bg-texture bg-repeat bg-clip-text text-transparent antialiased">
              {name}
            </h1>
            <div className="my-2 md:my-5 text-center md:text-start md:flex">
              <div className="text-red-300 mr-[5px]">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label className="mx-5">{rating}(Imdb)</label>
              <span className="bg-gray-300 card hidden md:block">GP</span>
              <label className="mx-5 hidden md:block">{time}</label>
            </div>
            <p className='px-8 text-center md:text-start md:px-0'>{desc}</p>
            <div className="my-4 hidden md:block">
              <h4 className="font-medium mb-1 text-lg">
                <span className="card">Estrelando </span>
                {starring}
              </h4>
              <h4 className="font-medium mb-1 text-lg">
                <span className="card">Gêneros </span>
                {genres}
              </h4>
              <h4 className="font-medium mb-1 text-lg">
                <span className="card">Tags </span>
                {tags}
              </h4>
            </div>
          </div>

          <div className="flex items-center justify-center ml-[50px]">
            <Link to={`/singlepage/${id}`}>
              <button className="flex justify-center text-xl font-bold tracking-widest hover:text-red-300">
                <div>
                  <i className="ri-play-circle-line text-[30px] md:text-[90px] mr-2 md:mr-6"></i>
                </div>
                VER TRAILER
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCard
