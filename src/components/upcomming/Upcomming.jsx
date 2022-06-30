import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Ucard } from './Ucard'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className="control-btn absolute top-1/3 right-[-64px] text-white z-50 ease-in-out duration-500 hover:text-red-300"
      onClick={onClick}
    >
      <button className="next">
        <i class="ri-arrow-right-s-line"></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className="control-btn  absolute top-1/3 left-[-77px] text-white z-50 ease-in-out duration-500 hover:text-red-300"
      onClick={onClick}
    >
      <button className="next">
        <i class="ri-arrow-left-s-line"></i>
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
      <section className="max-w-[80%] m-auto">
        <div>
          <div className="my-6 text-white flex justify-between items-center">
            <h1 className="font-bold text-2xl">{title}</h1>
            <Link to="/" className="text-red-300 font-bold text-base">
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
