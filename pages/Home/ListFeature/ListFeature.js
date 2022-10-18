import React from 'react'

export default function listFeature() {
    const listFeature = [
        {
            title: 'Miễn phí vận chuyển',
            url: "../../../static/images/icon1.webp"
        },
        {
            title: 'Đánh giá từ tôi',
            url: "../../../static/images/icon2.webp"
        },
        {
            title: 'Đăng tin cho tăng',
            url: "../../../static/images/icon3.webp"
        },
        {
            title: 'Định giá bán xe',
            url: "../../../static/images/icon4.webp"
        },
        {
            title: 'Nạp Đồng tốt',
            url: "../../../static/images/icon5.webp"
        },
        {
            title: 'Chợ tốt ưu đãi',
            url: "../../../static/images/icon6.webp"
        },
    ];

    const renderListFeature = () => {
        return listFeature.map((value, index) => {
            return <a href='' key={index} className='item'>
                <img src={value.url} alt={value.title} />
                <p>{value.title}</p>
            </a>
        })
    }
  return (
    <div className='list-feature'>
        {renderListFeature()}
    </div>
  )
}
