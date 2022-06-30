import HomeCard from './HomeCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className="control-btn absolute top-1/2 right-[2%] hidden md:block" onClick={onClick}>
      <button className="next">
        <i className="ri-arrow-right-circle-fill text-white ease-in-out duration-500 hover:text-red-300"></i>
      </button>
    </div>
  )
}

const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className="control-btn absolute top-1/2 left-[2%] z-50 hidden md:block"
      onClick={onClick}
    >
      <button className="next">
        <i className="ri-arrow-left-circle-fill text-white ease-in-out duration-500 hover:text-red-300"></i>
      </button>
    </div>
  )
}

export const Home = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <div className="relative">
        <Slider {...settings}>
          {items.map((item) => (
            <HomeCard key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </>
  )
}
