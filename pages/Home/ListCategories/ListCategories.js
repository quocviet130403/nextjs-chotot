import React from 'react'

export default function ListCategories() {
    const ListCategories = [
        {
            title: 'Bất động sản',
            url: "../../../static/images/cate1.webp"
        },
        {
            title: 'Xe Cộ',
            url: "../../../static/images/cate2.webp"
        },
        {
            title: 'Đồ điện tử',
            url: "../../../static/images/cate3.webp"
        },
        {
            title: 'Mẹ và bé',
            url: "../../../static/images/cate4.webp"
        },
        {
            title: 'Bất động sản',
            url: "../../../static/images/cate1.webp"
        },
        {
            title: 'Xe Cộ',
            url: "../../../static/images/cate2.webp"
        },
        {
            title: 'Đồ điện tử',
            url: "../../../static/images/cate3.webp"
        },
        {
            title: 'Mẹ và bé',
            url: "../../../static/images/cate4.webp"
        },
        {
            title: 'Bất động sản',
            url: "../../../static/images/cate1.webp"
        },
        {
            title: 'Xe Cộ',
            url: "../../../static/images/cate2.webp"
        },
        {
            title: 'Đồ điện tử',
            url: "../../../static/images/cate3.webp"
        },
        {
            title: 'Mẹ và bé',
            url: "../../../static/images/cate4.webp"
        },
        {
            title: 'Bất động sản',
            url: "../../../static/images/cate1.webp"
        },
        {
            title: 'Xe Cộ',
            url: "../../../static/images/cate2.webp"
        },
        {
            title: 'Đồ điện tử',
            url: "../../../static/images/cate3.webp"
        },
    ];

    const ListAds = [
        {
            title: 'ads1',
            url: "../../../static/images/ads1.jpg"
        },
        {
            title: 'ads2',
            url: "../../../static/images/ads2.jpg"
        },
        {
            title: 'ads3',
            url: "../../../static/images/ads3.jpg"
        },
        {
            title: 'ads4',
            url: "../../../static/images/ads4.jpg"
        },
        {
            title: 'ads5',
            url: "../../../static/images/ads5.jpg"
        },
    ];

    const renderListCategories = () => {
        return ListCategories.map((value, index) => {
            return <a href='' key={index} className='item'>
                <img src={value.url} alt={value.title} />
                <p>{value.title}</p>
            </a>
        })
    }

    const renderListAds = () => {
        return ListAds.map((value, index) => {
            return <img key={index} alt={value.title} src={value.url} />
        })
    }
  return (
    <div className='categories'>
        <h3 className='title'>Khám phá danh mục</h3>
        <div className='list-categories-wp'>
            <div className='list-categories'>
                {renderListCategories()}
            </div>
        </div>

        <h3 className='title mt-50'>Chợ tốt có gì mới</h3>
        <div className='list-ads'>
            {renderListAds()}
        </div>
    </div>
  )
}
