import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Ucard } from './Ucard'

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div
      className="hidden md:block control-btn absolute top-[29%] right-[-64px] text-white z-50 ease-in-out duration-500 hover:text-red-300"
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
      className="hidden md:block control-btn  absolute top-[29%] left-[-77px] text-white z-50 ease-in-out duration-500 hover:text-red-300"
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  }

  return (
    <>
      <section className="max-w-[100%] md:max-w-[80%] mx-auto py-8">
        <div>
          <div className="flex items-center justify-between mx-2 my-6 text-white md:mx-0">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Link to="/" className="text-base font-bold text-red-300">
              View All
            </Link>
          </div>
          <div>
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
