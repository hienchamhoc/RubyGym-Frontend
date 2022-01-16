import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Content.css";

import eventAPI from "./../../api/eventAPI";
import packageAPI from "./../../api/packageAPI";

// import sk1 from "./../../store/imgs/sk1.png";
// import sk2 from "./../../store/imgs/sk2.png";
// import sk3 from "./../../store/imgs/sk3.png";

function Content() {
    let [counterEvent, setCounterEvent] = useState(1);
    let [price, setPrice] = useState([]);
    let [sk1, setSk1] = useState('');
    let [sk2, setSk2] = useState('');
    let [sk3, setSk3] = useState('');

    let handlePrevEvent = () => {
        counterEvent = counterEvent + 1;
        if (counterEvent <= 3) setCounterEvent(counterEvent);
        else {
            counterEvent = 1;
            setCounterEvent(counterEvent);
        }
    };

    let handleNextEvent = () => {
        counterEvent = counterEvent - 1;
        if (counterEvent >= 1) setCounterEvent(counterEvent);
        else {
            counterEvent = 3;
            setCounterEvent(counterEvent);
        }
    };
    
    useEffect(() => {
        (async () => {
            const response = await eventAPI.eventList();
            console.log(response);
            if (response && response.status && response.data.status) {
                const eventList = response.data.data.event_list;
                sk1 = eventList[eventList.length-1].detail_image_url;
                sk2 = eventList[eventList.length-2].detail_image_url;
                sk3 = eventList[eventList.length-3].detail_image_url;
                setSk1(sk1);
                setSk2(sk2);
                setSk3(sk3);
            }
            
            const responsePrice = await packageAPI.getPackageList();
            console.log(responsePrice);
            if (responsePrice && responsePrice.status && responsePrice.data.status) {
                var _price = [];
                const tempPackages = responsePrice.data.data.package_list;
                _price.push(tempPackages[0].price);
                _price.push(tempPackages[1].price);
                _price.push(tempPackages[2].price);
                price = _price;
                setPrice(price);
            }
        })();
    }, []);

    useEffect(() => {
        console.log("thaydoiEvent");
        let timerIDEvent = setInterval(() => {
            if (counterEvent < 3) {
                counterEvent = counterEvent + 1;
                setCounterEvent(counterEvent);
            } else {
                counterEvent = 1;
                setCounterEvent(counterEvent);
            }
        }, 7000);

        return () => {
            console.log("clearEvent");
            clearInterval(timerIDEvent);
        };
    }, [counterEvent]);
    return (
        <div className="content">
            <div className="dich-vu">
                <h1>CÁC DỊCH VỤ CỦA CHÚNG TÔI</h1>
                <h2>
                    RUBYGYM cam kết mang đến những dịch vụ tiện ích nhất giúp
                    quý khách hàng đạt được mục tiêu sức khỏe và hình thể
                </h2>
                <div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-4">
                                <div className="service" id="yoga">
                                    <div className="service-name">YOGA</div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="service" id="personal-trainer">
                                    <div className="service-name">
                                        HUẤN LUYỆN VIÊN CÁ NHÂN
                                    </div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="service" id="zumba">
                                    <div className="service-name">ZUMBA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-dich-vu">
                    <NavLink to="/service" className="link-dv">
                        <button className="btn-dv">XEM THÊM</button>
                    </NavLink>
                </div>
            </div>

            <div className="su-kien">
                <h1>SỰ KIỆN</h1>
                <h2>
                    Hàng tháng sẽ có các sự kiện được tổ chức tại trung tâm để
                    khích lệ hoạt động luyện tập của khách hàng.
                </h2>
                <div className="slider-event">
                    <div className="slider-wrapper-event">
                        <div
                            className="navigation-left-event"
                            onClick={handleNextEvent}
                        >
                            <i className="fal fa-chevron-left navigation-left-icon-event"></i>
                        </div>
                        <div
                            className="navigation-right-event"
                            onClick={handlePrevEvent}
                        >
                            <i className="fal fa-chevron-right navigation-right-icon-event"></i>
                        </div>
                        <div className="slides-event">
                            <input
                                type="radio"
                                checked={counterEvent === 1 ? true : false}
                                name="radio-btn-event"
                                id="radio1-event"
                            />
                            <input
                                type="radio"
                                checked={counterEvent === 2 ? true : false}
                                name="radio-btn-event"
                                id="radio2-event"
                            />
                            <input
                                type="radio"
                                checked={counterEvent === 3 ? true : false}
                                name="radio-btn-event"
                                id="radio3-event"
                            />

                            <div className="slide-event first-event">
                                <img src={process.env.REACT_APP_API_URL + sk1} alt="" />
                            </div>
                            <div className="slide-event">
                                <img src={process.env.REACT_APP_API_URL + sk2} alt="" />
                            </div>
                            <div className="slide-event">
                                <img src={process.env.REACT_APP_API_URL + sk3} alt="" />
                            </div>
                            <div className="navigation-auto-event">
                                <div className="navigation-auto1-event"></div>
                                <div className="navigation-auto2-event"></div>
                                <div className="navigation-auto3-event"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="btn-goi-tap">
                    <NavLink to="/event" className="link-gt">
                        <button className="btn-gt">XEM THÊM</button>
                    </NavLink>
                </div>
            </div>

            <div className="goi-tap">
                <h1>GIÁ CÁC GÓI TẬP</h1>
                <h2>
                    Trung tâm cung cấp các dịch vụ tiện ích nhất với giá ưu đãi
                </h2>
                <div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-4">
                                <div className="package">
                                    <div className="name">GÓI 3 THÁNG</div>
                                    <div className="tong-chi-phi">
                                        TỔNG CHI PHÍ
                                    </div>
                                    <div className="price">{price[0]}</div>
                                    <div className="vnd">VNĐ</div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="package">
                                    <div className="name">GÓI 6 THÁNG</div>
                                    <div className="tong-chi-phi">
                                        TỔNG CHI PHÍ
                                    </div>
                                    <div className="price">{price[1]}</div>
                                    <div className="vnd">VNĐ</div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="package" id="star">
                                    <div className="name">GÓI 1 NĂM</div>
                                    <div className="tong-chi-phi">
                                        TỔNG CHI PHÍ
                                    </div>
                                    <div className="price">{price[2]}</div>
                                    <div className="vnd">VNĐ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>
                        Khách hàng tham gia tập trên 1 năm sẽ trở thành hội viên
                        thân thiết và được tặng 3 tháng tập miễn phí khi đăng ký
                        tiếp 1 năm nữa.
                    </li>
                    <li>
                        Khách hàng giới thiệu khách hàng cho trung tâm sẽ được
                        tặng 1 tháng luyện tập miễn phí/1 khách được giới thiệu
                        và tham gia trung tâm.
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Content;
