import React, { useState } from 'react'
import parse from "html-react-parser";

export default function Footer() {

    const [show, isShow] = useState(false);

    const data = {
        info: {
            title: "Chợ Tốt - Chợ Mua Bán, Rao Vặt Trực Tuyến Hàng Đầu Của Người Việt",
            content: `<p>Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012, với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.</p>
            <p>Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012, với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.</p>
            <p>Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012, với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.</p>
            <p>Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012, với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.</p>
            <p>Chợ Tốt chính thức gia nhập thị trường Việt Nam vào đầu năm 2012, với mục đích tạo ra cho bạn một kênh rao vặt trung gian, kết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh chóng, an toàn, mang đến hiệu quả bất ngờ.</p>`
        },
        copyright: "CÔNG TY TNHH CHỢ TỐT - Người đại diện theo pháp luật:<br/>Nguyễn Trọng Tấn<br/>Địa chỉ: Phòng 1808, Tầng 18, Mê Linh Point Tower, 02 Ngô Đức Kế, Phường Bến Nghé, Quận 1, TP Hồ Chí Minh"
    };

    const listHot = [
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
        {
            title: 'Việc làm online tại nhà',
            url: ''
        },
    ];


    const renderListHot = () => {
        return listHot.map((value, index) => {
            return <li key={index}>
                <a href={value.url} >{value.title}</a>
            </li>
        })
    }

    const seeMore = () => {
        show ? isShow(false) : isShow(true);
    }


  return (
    <div className='footer'>
      
      <div className={"footer__info " + (show ? 'active' : '')}>
        <div className='footer__info-hide'></div>
        <h2>{data.info.title}</h2>
        {parse(data.info.content)}
      </div>
        <button onClick={() => seeMore()} className='see-more'>Mở rộng</button>
      <div className='list-hot'>
        <h3>Các từ khóa phổ biến</h3>
        <ul>
            {renderListHot()}
        </ul>
      </div>

      <div className='footer__bottom'>
        <div className='section1'>
            <img src="../../static/images/logo-full.png" alt='logo' />
            <div className='rate'>
                <div className='rate__list'>
                    <svg data-type="monochrome" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" class="aw__i1y86a8n"><path fill="currentColor" d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z" fill-rule="evenodd"></path></svg>
                    <svg data-type="monochrome" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" class="aw__i1y86a8n"><path fill="currentColor" d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z" fill-rule="evenodd"></path></svg>
                    <svg data-type="monochrome" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" class="aw__i1y86a8n"><path fill="currentColor" d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z" fill-rule="evenodd"></path></svg>
                    <svg data-type="monochrome" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" class="aw__i1y86a8n"><path fill="currentColor" d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z" fill-rule="evenodd"></path></svg>
                    <svg data-type="monochrome" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" class="aw__i1y86a8n"><path fill="currentColor" d="M9 14.5l-5.29 2.781 1.01-5.89L.44 7.219l5.915-.86L9 1l2.645 5.36 5.915.859-4.28 4.172 1.01 5.89z" fill-rule="evenodd"></path></svg>
                </div>
                <p>109.000 Bình chọn</p>
            </div>
        </div>
        <div className='section2'>
            <h3 className='title'>Tải ngay ứng dụng - Mua bán cực sung</h3>
            <div className='list-app'>
                <img src="../../static/images/ios.svg" alt='ios' />
                <img src="../../static/images/ios.svg" alt='ios' />
                <img src="../../static/images/ios.svg" alt='ios' />
            </div>
        </div>
        <div className='section3'>
            <div className='list-helper'>
                <a href=''>TRỢ GIÚP</a>
                <span>-</span>
                <a href=''>QUY ĐỊNH CẦN BIẾT</a>
                <span>-</span>
                <a href=''>QUY CHẾ QUYỀN RIÊNG TƯ</a>
                <a href=''>LIÊN HỆ</a>
                <span>-</span>
                <a href=''>VỀ CHỢ TỐT</a>
            </div>
            <img src="../../static/images/bct.webp" alt='bct' />
        </div>
        <div className='section4'>
            <p>{parse(data.copyright)}</p>
        </div>
      </div>
    </div>
  )
}
