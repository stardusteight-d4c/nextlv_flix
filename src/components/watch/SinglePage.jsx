import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { homeData, recommended } from '../../dummyData'
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

  return (
    <>
      {video ? (
        <>
          <section className="bg-black text-white">
            <div className="bg-gray-900 py-[15px] flex justify-center items-center">
              <h1 className="uppercase text-xl">{video.name}</h1>
              <span className="tracking-widest ml-[10px]">
                {' '}
                | {video.time} |{' '}
              </span>{' '}
              <span>HD</span>
            </div>
            <div className="max-w-[80%] m-auto">
                <iframe
                  className="m-auto"
                  width="660"
                  height="315"
                  src={video.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              <div className="para">
                <h3 className='font-normal'>Date: {video.date}</h3>
                <p className='leading-6'>{video.desc}</p>
                <p className='leading-6'>
                  Get access to the direct Project Overview with this report.
                  Just by a quick glance, you’ll have an idea of the total tasks
                  allotted to the team, number of milestones given & completed,
                  total Links created for the project and the total time taken
                  by all the users. Each section would elaborate the data
                  further, if chosen.
                </p>
              </div>
              <div className="flex justify-start items-center border-b border-gray-300">
                <h3>Share: </h3>
                <img src="https://img.icons8.com/color/48/000000/facebook-new.png" />
                <img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png" />
                <img src="https://img.icons8.com/fluency/48/000000/linkedin-circled.png" />
              </div>
            </div>
          </section>
          <Upcomming items={recommendedData} title="Recommended Movies" />
        </>
      ) : null}
    </>
  )
}
