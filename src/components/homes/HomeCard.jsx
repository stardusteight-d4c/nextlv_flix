import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <>
      <div className="box">
        <div className="absolute top-0 h-screen w-full -z-10 after:absolute after:top-0 after:left-0 after:w-full after:h-[100vh] after:z-40 after:bg-gradient-to-br after:from-black/40 after:to-black/90">
          <img src={cover} className="w-[100vw] h-[100vh] object-cover" />
        </div>
        <div className="flex flex-col md:my-20 md:px-32 md:flex-row">
          <div className="md:max-w-[55vw]">
            <h1 className="mt-24 text-5xl antialiased font-extrabold text-center text-transparent uppercase bg-repeat md:mt-6 md:text-start md:text-8xl bg-texture bg-clip-text">
              {name}
            </h1>
            <div className="my-2 text-center md:my-5 md:text-start md:flex">
              <div className="text-red-300 mr-[5px]">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label className="mx-5">{rating}(Imdb)</label>
              <span className="hidden bg-gray-300 card md:block">GP</span>
              <label className="hidden mx-5 md:block">{time}</label>
            </div>
            <p className="px-8 text-center md:text-start md:px-0">{desc}</p>
            <div className="hidden my-4 md:block">
              <h4 className="mb-1 text-lg font-medium">
                <span className="card">Estrelando </span>
                {starring}
              </h4>
              <h4 className="mb-1 text-lg font-medium">
                <span className="card">Gêneros </span>
                {genres}
              </h4>
              <h4 className="mb-1 text-lg font-medium">
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
