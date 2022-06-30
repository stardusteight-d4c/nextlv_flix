import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData, recommended, trending } from '../../dummyData'
import { Upcomming } from '../upcomming/Upcomming'

export const SinglePage = () => {
  const { id } = useParams()
  const [video, setVideo] = useState(null)
  const [recommendedData, setRecommendedData] = useState(recommended)

  useEffect(() => {
    let video = homeData.find((video) => video.id === parseInt(id))
    if (video) {
      setVideo(video)
    }
  }, [id])

  useEffect(() => {
    let video = trending.find((video) => video.id === parseInt(id))
    if (video) {
      setVideo(video)
    }
  }, [id])

  return (
    <>
      {video ? (
        <>
          <section className="bg-black text-white pb-8 mb-16 border-b border-zinc-600">
            <div className="bg-red-300 py-[15px] flex justify-center items-center">
              <h1 className="uppercase text-xl font-bold">{video.name}</h1>
              <span className="tracking-widest ml-[10px]"> | {video.time}</span>
            </div>
            <div className="max-w-[80%] m-auto">
              <iframe
                className="m-auto md:w-[660px] h-[315px]"
                src={video.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
              <div className="my-8">
                <h3 className="font-bold my-8 ">{video.date}</h3>
                <p className="leading-6 text-xl">{video.desc}</p>
                <p className="text-zinc-600 leading-4 font-light py-4">
                  A lei considera que as obras protegidas, dentre
                  outras, são: textos, vídeos, obras fotográficas, ilustrações,
                  desenhos, programa de computador, bases de dados e outras
                  obras, que, por sua seleção, organização ou disposição de seu
                  conteúdo, constituam uma criação intelectual.
                </p>
                <p className="text-zinc-600  font-light leading-4">
                  Cabe ao autor o direito exclusivo de utilizar, fruir
                  e dispor da obra literária, artística ou científica.
                </p>
              </div>
              <div className="flex justify-start items-center text-white">
                <h3 className='font-semibold'>Compartilhe: </h3>
                <i class="ri-facebook-circle-fill text-3xl px-2 cursor-pointer"></i>
                <i class="ri-twitter-fill text-3xl px-2 cursor-pointer"></i>
                <i class="ri-whatsapp-fill text-3xl px-2 cursor-pointer"></i>
              </div>
            </div>
          </section>
          <Upcomming items={recommendedData} title="Filmes recomendados" />
        </>
      ) : null}
    </>
  )
}
