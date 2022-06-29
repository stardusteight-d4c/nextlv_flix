import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Ucard } from './Ucard'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn absolute top-1/2 right-[2%]" onClick={onClick}>
      <button className="next">
        <i className="ri-arrow-right-circle-fill"></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className="control-btn  absolute top-1/2 left-[2%] z-50"
      onClick={onClick}
    >
      <button className="next">
        <i className="ri-arrow-left-circle-fill"></i>
      </button>
    </div>
  )
}

export const Upcomming = ({ items, title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        brakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <>
      <section className="max-w-[95%] md:max-w-[95%] m-auto">
        <div className="">
          <div className="font-medium my-[30px] text-white flex justify-between">
            <h1>{title}</h1>
            <Link to="/" className="bg-red-300">
              View All
            </Link>
          </div>
          <div className="">
            <Slider {...settings}>
              {items.map((item) => (
                <Ucard key={item.id} item={item} />
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
