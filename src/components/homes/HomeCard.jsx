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
        <div className="py-20 px-32 flex">
          <div className="max-w-[55vw]">
            <h1 className="mt-6 text-8xl uppercase font-extrabold bg-[url('src/assets/images/texture.jpg')] bg-repeat bg-clip-text text-transparent antialiased">
              {name}
            </h1>
            <div className="my-5 flex">
              <div className="text-red-300 mr-[5px]">
                <i className="fas fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half"></i>
              </div>
              <label className="mx-5">{rating}(Imdb)</label>
              <span className="bg-gray-300 card">GP</span>
              <label className="mx-5">{time}</label>
            </div>
            <p>{desc}</p>
            <div className="my-4">
              <h4 className="font-medium mb-1 text-lg">
                <span className="card">Starring </span>
                {starring}
              </h4>
              <h4 className="font-medium mb-1 text-lg">
                <span className="card">Genres </span>
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
                  <i className="ri-play-circle-line text-[90px] mr-6"></i>
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
