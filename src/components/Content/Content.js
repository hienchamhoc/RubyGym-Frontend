import React, { useState} from "react"
import { NavLink } from "react-router-dom";
import './Content.css'
import sk1 from './../../store/imgs/sk1.png';

function Content() {
    let [counterSK, setCounterSK] = useState(1);

    let handlePrevSK = () => {
        counterSK = counterSK + 1;
        if(counterSK<=3) setCounterSK(counterSK);
        else {
            counterSK = 1;
            setCounterSK(counterSK)
        }
    }

    let handleNextSK = () => {
        counterSK = counterSK - 1;
        if(counterSK>=1) setCounterSK(counterSK);
        else {
            counterSK = 3;
            setCounterSK(counterSK)
        }
    }
    return (
        <div className="content">
            <div className="dich-vu">
                <h1>
                    CÁC DỊCH VỤ CỦA CHÚNG TÔI
                </h1>
                <h2>
                RUBYGYM cam kết mang đến những dịch vụ tiện ích nhất giúp quý khách hàng đạt được mục tiêu sức khỏe và hình thể
                </h2>
                <div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-4">
                                <div className="service" id="yoga" >
                                    <div className="service-name">YOGA</div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="service" id="personal-trainer">
                                    <div className="service-name">HUẤN LUYỆN VIÊN CÁ NHÂN</div>
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
                        <button className="btn-dv">
                            XEM THÊM
                        </button>
                    </NavLink>
                </div>
            </div>

            <div className="su-kien">
                <h1>
                    SỰ KIỆN
                </h1>
                <h2>
                Hàng tháng sẽ có các sự kiện được tổ chức tại trung tâm để khích lệ hoạt động luyện tập của khách hàng.
                </h2>
                    <img className="slide-sukien" src={sk1} alt="" />
            </div>

            <div className="goi-tap">
                <h1>
                    GIÁ CÁC GÓI TẬP
                </h1>
                <h2>
                Trung tâm cung cấp các dịch vụ tiện ích nhất với giá ưu đãi                
                </h2>
                <div>
                    <div className="grid wide">
                        <div className="row">
                            <div className="col l-4">
                                <div className="package">
                                    <div className="name">GÓI 3 THÁNG</div>
                                    <div className="tong-chi-phi">TỔNG CHI PHÍ</div>
                                    <div className="price">2.990.000</div>
                                    <div className="vnd">VNĐ</div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="package">
                                    <div className="name">GÓI 6 THÁNG</div>
                                    <div className="tong-chi-phi">TỔNG CHI PHÍ</div>
                                    <div className="price">4.990.000</div>
                                    <div className="vnd">VNĐ</div>
                                </div>
                            </div>
                            <div className="col l-4">
                                <div className="package" id="star">
                                    <div className="name">GÓI 1 NĂM</div>
                                    <div className="tong-chi-phi">TỔNG CHI PHÍ</div>
                                    <div className="price">8.990.000</div>
                                    <div className="vnd">VNĐ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Khách hàng tham gia tập trên 1 năm sẽ trở thành hội viên thân thiết và được tặng 3 tháng tập miễn phí khi đăng ký tiếp 1 năm nữa.</li>
                    <li>Khách hàng giới thiệu khách hàng cho trung tâm sẽ được tặng 1 tháng luyện tập miễn phí/1 khách được giới thiệu và tham gia trung tâm.</li>
                </ul>
                <div className="btn-goi-tap">
                    <NavLink to="/package" className="link-gt">
                        <button className="btn-gt">
                            XEM THÊM
                        </button>
                    </NavLink>
                </div>
            </div>

        </div>
    )
}
export default Content