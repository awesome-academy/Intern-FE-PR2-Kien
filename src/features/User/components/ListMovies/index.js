import React from "react"
import Slider from "react-slick"
import CardMovies from "../CardMovie"

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

export default function ListMovies({ movies }) {
  const num = movies.length > 6 ? 6 : movies.length
  const num1400 = movies.length > 4 ? 4 : movies.length
  const num1024 = movies.length > 2 ? 2 : movies.length
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: num,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: num1400,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: num1024,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      }
    ]
  }
  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div
            key={index}
            className="d-flex aligns-item-center justify-content-center"
          >
            <div style={{ width: "200px" }}>
              <CardMovies movie={movie} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
