import React from "react"
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} custom`}
      style={{
        ...style,
        display: "block",
        transform: "translateX(-40px)",
        fontSize: "3rem"
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "1000",
        transform: "translateX(40px)"
      }}
      onClick={onClick}
    />
  )
}

export default function BannerCarousel({ banner }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <div>
      <Slider {...settings}>
        {banner &&
          banner.map((item, index) => (
            <div key={index}>
              <img alt={`${banner}-${index}`} src={item} className="w-100" />
            </div>
          ))}
      </Slider>
    </div>
  )
}
