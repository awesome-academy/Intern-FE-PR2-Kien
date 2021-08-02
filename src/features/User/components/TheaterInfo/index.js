import React from "react"

function TheaterInfo(props) {
  return (
    <div className="TheaterInfo d-flex flex-column">
      <div className="title text-center">Thông tin rạp</div>
      <div className="info-box">
        <div className="d-flex mt-3">
          <div className="w-50 d-flex justify-content-center align-items-center theater-name">
            BHD Hà Đông
          </div>
          <div className="w-50 theater-info d-flex flex-column">
            <p>132 Trường Chinh, Hà Đông, Hà Nội</p>
            <p>0123.243.543 / 0343.254.345</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="w-50 d-flex justify-content-center align-items-center theater-name">
            BHD Cầu Giấy
          </div>
          <div className="w-50 theater-info d-flex flex-column">
            <p>132 Phạm Hùng, Cầu Giấy, Hà Nội</p>
            <p>0123.243.543 / 0343.254.345</p>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="w-50 d-flex justify-content-center align-items-center theater-name">
            BHD Long Biên
          </div>
          <div className="w-50 theater-info d-flex flex-column">
            <p>132 Long Biên, Long Biên, Hà Nội</p>
            <p>0123.243.543 / 0343.254.345</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheaterInfo
