import { Header } from ".."
import './Trainer.css'
import traineravatar from '../../store/imgs/trainer1.jpg'
import { Footer } from ".."
import { useState } from "react"

function Trainer() {
    let [isPTag, setPTag] = useState(true);
    let [trainerState, setTrainerState] = useState({
        name: 'Tran Hien',
        sex: 'nam',
        phone: '0964387413',
        address: 'so 1 hai ba trung'
    });
    return (
        <>
            <Header />
            <div className="trainer-main">
                <h1>Thông tin cá nhân</h1>
                <div className="row">
                    <div className="col l-3 m-0 ">
                        <div className="trainer-avatarname">
                            <img src={traineravatar} className="trainer-avatar" />
                            <span className="trainer-name">Tran Van A</span>
                        </div>
                    </div>
                    <div className="col l-9 m-12">
                        <div className="trainer-info-frames">
                            <div className="trainer-info">
                                <b>Họ tên</b><br />
                                {isPTag ? (
                                    <b>{trainerState.name}</b>
                                ) : (
                                    <input
                                        className="trainer-input trainer-input-name"
                                        type="text"
                                        name="name"
                                        onChange={(e) => {
                                            const name = e.target.value;
                                            setTrainerState({ ...setTrainerState, name });
                                        }}
                                    />
                                )}
                                <br />
                                <b>Giới tính</b><br />
                                <select name="sex" className="trainer-input trainer-input-sex">
                                    <option value="nam">nam</option>
                                    <option value="nu">nữ</option>
                                </select><br />
                                <b>Ngày sinh</b><br />
                                <input
                                    className="trainer-input trainer-input-date"
                                    type="date"
                                    name="date"
                                /><br />
                                <b>Số điện thoại</b><br />

                                {isPTag ? (
                                    <b>09234278348</b>
                                ) : (
                                    <input
                                        className="trainer-input trainer-input-phone"
                                        type="text"
                                        name="phone"
                                    />
                                )}

                                <br />
                                <b>Địa chỉ</b><br />
                                {isPTag ? (
                                    <b>so 1, dai co viet, hai ba trung, ha noi</b>
                                ) : (
                                    <input
                                        className="trainer-input trainer-input-address"
                                        type="text"
                                        name="address"
                                    />
                                )}
                                <br />
                                {isPTag ? (
                                    <button onClick={() => setPTag(false)}>chỉnh sửa</  button>
                                ) : (
                                    <button onClick={() => setPTag(true)}>lưu</  button>
                                )}

                                <button onClick={() => setPTag(true)}>huỷ</  button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Trainer