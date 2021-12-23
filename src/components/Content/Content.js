import React, { useState} from "react"
import { NavLink } from "react-router-dom";
import './Content.css'
import yoga from './../../store/imgs/yoga.png';
import pt from './../../store/imgs/personal-trainer.png';
import zumba from './../../store/imgs/zumba.png';
import sk1 from './../../store/imgs/sk1.png';
import gt1 from './../../store/imgs/gt1.png';
import gt2 from './../../store/imgs/gt2.png';
import gt3 from './../../store/imgs/gt3.png';

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
                                <img src={yoga} className="yoga" />
                            </div>
                            <div className="col l-4">
                                <img src={pt} className="personal-trainer" />
                            </div>
                            <div className="col l-4">
                                <img src={zumba} className="zumba" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-dich-vu">
                    <NavLink to="/dich-vu" className="link-dv">
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
                                <img src={gt1} className="gt1" />
                            </div>
                            <div className="col l-4">
                                <img src={gt2} className="gt2" />
                            </div>
                            <div className="col l-4">
                                <img src={gt3} className="gt3" />
                            </div>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Khách hàng tham gia tập trên 1 năm sẽ trở thành hội viên thân thiết và được tặng 3 tháng tập miễn phí khi đăng ký tiếp 1 năm nữa.</li>
                    <li>Khách hàng giới thiệu khách hàng cho trung tâm sẽ được tặng 1 tháng luyện tập miễn phí/1 khách được giới thiệu và tham gia trung tâm.</li>
                </ul>
                <div className="btn-goi-tap">
                    <NavLink to="/goi-tap" className="link-gt">
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