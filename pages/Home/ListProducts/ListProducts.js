import React, { useState } from "react";



export default function ListProducts() {

    const [num, changeNum] = useState(20);

    const ListProducts = [
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 6,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 7,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
            num: 2,
        },
        {
            title: 'Là gổ căm xe xưa cái ghế gổ rất dầy và rất nặng',
            price: '2.100.000 đ',
            url: "../../../static/images/pro1.jpg",
            time: '48 giây trước',
            address: 'Đà Nẵng',
        },

    ];

    const renderListProducts = () => {
        let data = ListProducts.slice(0,num)
        return data.map((value, index) => {
            return <div className="item" key={index}>
                <div className="item__header">
                    <a href=""><img src={value.url} alt="" /></a>
                    <img src="../../../static/images/save.svg" alt="save" className="save"/>
                </div>
                <div className="item__content">
                <span><svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx={8} cy={2} r={2} transform="rotate(90 8 2)" fill="#222222" /><circle cx={8} cy={8} r={2} transform="rotate(90 8 8)" fill="#222222" /><circle cx={8} cy={14} r={2} transform="rotate(90 8 14)" fill="#222222" /></svg></span>
                    <a href="" className="item__title">{value.title}</a>
                    <p className="item__price">{value.price}</p>
                    <p className="item__address"><img src="../../../static/images/pro.svg" alt="address" /><span> - {value.time} - {value.address}</span></p>
                </div>
                { value.num ? <div className="item__num">
                    <img src="../../../static/images/num.svg" alt="number" />
                    <p>{value.num}</p>
                </div> : '' }
            </div>
        })
    }

    const showMore = () => {
        const moreProduct = 8;
        changeNum(num + moreProduct)
    }
    
  return (
    <>
      <div className="products-wp">
        <div className="products">
            <h3 className="title">Tin mới đăng</h3>
            <div className="list-products">
                {renderListProducts()}
            </div>
        </div>
        <button className='see-more' onClick={() => showMore()}>Xem thêm</button>
      </div>
    </>
  );
}