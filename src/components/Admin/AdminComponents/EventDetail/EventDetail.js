import React, { useState, useEffect } from "react";
import "./EventDetail.css";
import { useParams } from "react-router-dom";
import managementAPI from "../../../../api/managementAPI";
import sk1_event from "../../../../store/imgs/sk1_event.png";
import sk1 from "../../../../store/imgs/sk1.png";

function EventDetail() {
    let [isPTag, setPTag] = useState(true);
    // let [eventInfor, setEventInfor] = useState({});
    const handleEdit = () => {
        setPTag(false);
    };
    const handleCancel = () => {
        setPTag(true);
    };
    const handleUpdate = async () => {
        setPTag(true);
    };

    const { id } = useParams();

    // useEffect(() => {
    //     (async () => {
    //         console.log("hi");
    //         const res = await managementAPI.eventDetail({ id });
    //         eventInfor = res.data.data;
    //         setEventInfor(eventInfor);
    //         console.log(eventInfor);
    //     })();
    // }, []);

    return (
        <div className="event-detail-wrapperr">
            <div className="event-detail-header">
                <h1 className="event-headingg">SỰ KIỆN</h1>
                {isPTag && (
                    <button onClick={handleEdit} className="event-edit-btn">
                        Chỉnh sửa
                    </button>
                )}
            </div>
            <div className="event-detail-content">
                {/* Ảnh sự kiện */}
                <h2>Ảnh sự kiện</h2>
                <div className={isPTag ? "img-event" : "img-event edit-active"}>
                    <div className="thumbnail-img-event">
                        <img src={sk1_event} alt="" />
                        {!isPTag && (
                            <button className="thumbnail-img-btn">
                                <i class="fal fa-camera"></i>
                            </button>
                        )}
                        <div>(350 x 250)</div>
                    </div>
                    <div className="detail-img-event">
                        <img src={sk1} alt="" />
                        {!isPTag && (
                            <button className="detail-img-btn">
                                <i class="fal fa-camera"></i>
                            </button>
                        )}
                        <div>(1080 x 480)</div>
                    </div>
                </div>

                {/* Tiêu đề */}
                <h2>Tiêu đề</h2>
                <div className={isPTag ? "infor-event" : "infor-event edit-active"}>ĐIỀU ƯỚC GIÁNG SINH</div>

                {/* Tiêu đề chi tiết */}
                <h2>Tiêu đề chi tiết</h2>
                <div className={isPTag ? "infor-event" : "infor-event edit-active"}>
                    THAM GIA VÒNG QUAY GIÁNG SINH, NHẬN NGAY IPHONE 13 PROMAX
                    TẠI RUBYGYM!
                </div>

                {/* Thời gian */}
                <div className="time-event">
                    <div className="start-time">
                        <h2>Ngày bắt đầu</h2>
                        <div className={isPTag ? "infor-event" : "infor-event edit-active"}>07/12/2021</div>
                    </div>
                    <div className="finish-time">
                        <h2>Ngày kết thúc</h2>
                        <div className={isPTag ? "infor-event" : "infor-event edit-active"}>24/12/2021</div>
                    </div>
                </div>

                {/* Nội dung */}
                <h2>Nội dung</h2>
                <div className={isPTag ? "infor-event" : "infor-event edit-active"}>
                    Chào mừng Giáng Sinh sắp tới, cả nhà cùng tham gia sự kiện
                    vòng quay Giáng Sinh tại trung tâm RUBYGYM nha! Cách thức
                    tham gia vô cùng đơn giản, chỉ cần tham gia là có quà mà
                    phần thưởng thì vô cùng hấp dẫn và giá trị nhé! Đối tượng
                    tham gia: Tất cả các hội viên của trung tâm Cách thức tham
                    gia: Quay trực tiếp tại trung tâm Cơ cấu giải thưởng: Thẻ
                    điện thoại 100k, Thẻ hội viên 3 tháng miễn phí, Phiếu mua
                    hàng, và đặc biệt là Iphone 13 PROMAX
                </div>
            </div>
            <div className="btn-update-cancel">
                {!isPTag && (
                    <div>
                        <button
                            onClick={handleUpdate}
                            className="event-update-btn"
                        >
                            Lưu
                        </button>
                        <button
                            onClick={handleCancel}
                            className="event-cancel-btn"
                        >
                            Huỷ
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EventDetail;
