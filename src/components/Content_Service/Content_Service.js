import React from "react";
import "./Content_Service.css";
import dichvu from "./../../store/imgs/dichvu.png";
import yoga from "./../../store/imgs/yoga.png";
import pt from "./../../store/imgs/personal-trainer.png";
import zumba from "./../../store/imgs/zumba.png";
import fn_pt from "./../../store/imgs/fn-pt.png";
import sc from "./../../store/imgs/sc.png";
import ft from "./../../store/imgs/ft.png";

function Content_Dichvu() {
    return (
        <div>
            <img className="banner-service" src={dichvu} alt="" />
            <div className="content-service">
                <h1>CÁC DỊCH VỤ CỦA CHÚNG TÔI</h1>
                <h2>
                    RUBYGYM cam kết mang đến những dịch vụ tiện ích nhất giúp
                    quý khách hàng đạt được mục tiêu sức khỏe và hình thể
                </h2>
                <div className="service_1">
                    <div className="title-service_1">YOGA</div>
                    <div className="infor-service_1">
                        <img src={yoga} alt="" />
                        <div>
                            Là bộ môn mà cả nam và nữ đều có thể tập luyện, với
                            những công dụng mà Yoga mang lại cho sức khỏe thì
                            đây là bộ môn đi kèm được khá nhiều người quan tâm
                            và chọn lựa. Những công dụng quan trọng mà Yoga mang
                            lại như: giúp thư giản, giảm stress hiệu quả; xương
                            chắc khỏe, cải thiện chức năng não, giảm đau,...
                        </div>
                    </div>
                </div>
                <div className="service_2">
                    <div className="title-service_2">
                        HUẤN LUYỆN VIÊN CÁ NHÂN
                    </div>
                    <div className="infor-service_2">
                        <div className="detail-service_2">
                            Trung tâm sẽ có danh sách của các huấn luyện viên,
                            từ đây bạn có thể chọn ra cho mình một huấn luyện
                            viên để có thể giúp cho bạn tập luyện và có được kết
                            quả tốt hơn.
                            <div className="row">
                                <div className="col l-4">
                                    <img src={fn_pt} alt="" />
                                </div>
                                <div className="col l-4">
                                    <img src={sc} alt="" />
                                </div>
                                <div className="col l-4">
                                    <img src={ft} alt="" />
                                </div>
                            </div>
                        </div>
                        <img src={pt} alt="" />
                    </div>
                </div>
                <div className="service_3">
                    <div className="title-service_3">ZUMBA</div>
                    <div className="infor-service_3">
                        <img src={zumba} alt="" />
                        <div>
                            Là bộ môn thể thao với các động tác nhảy trên nền
                            nhạc Latin. Nhìn sơ có vẻ như các động tác rất dễ
                            thực hiện, tuy nhiên hiệu quả mà việc nhảy Zumba
                            mang lại thần kỳ hơn bạn nghĩ khi mỗi bài tập Zumba
                            có thể giúp bạn đốt cháy từ 600-1000 calo. Zumba
                            đang là xu hướng trên thế giới khi có hơn 4 triệu
                            người tập luyện bộ môn này. Ngoài giúp giảm cân thì
                            tập luyện Zumba thường xuyên tốt cho hệ thống tim
                            mạch của bạn, giúp bạn thư giản đầu óc sau những giờ
                            làm việc rất hiệu quả.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content_Dichvu;
