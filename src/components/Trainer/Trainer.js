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
        date: '12/2/2021',
        phone: '0964387413',
        address: 'so 1 hai ba trung'
    });
    let [stateOnChange, setStateOnChange] = useState({
        name: trainerState.name,
        sex: trainerState.sex,
        date: trainerState.date,
        phone: trainerState.phone,
        address: trainerState.address
    });
    const handleUpdate = () => {
        setPTag(false);
    }
    const handleSave = () => {
        setPTag(true);
        setTrainerState({
            name: stateOnChange.name,
            sex: stateOnChange.sex,
            date: stateOnChange.date,
            phone: stateOnChange.phone,
            address: stateOnChange.address
        })
    }
    const handleCancel = () => {
        setPTag(true);
    }
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
                                        value={stateOnChange.name}
                                        onChange={(e) => {
                                            const name = e.target.value;
                                            setStateOnChange({ ...stateOnChange, name });

                                        }}
                                    />
                                )}
                                <br />
                                <b>Giới tính</b><br />
                                {isPTag ? (
                                    <b>{trainerState.sex}</b>
                                ) : (
                                    <select
                                        name="sex"
                                        className="trainer-input trainer-input-sex"
                                        value={stateOnChange.sex}
                                        onChange={(e) => {
                                            const sex = e.target.value;
                                            setStateOnChange({ ...stateOnChange, sex });
                                        }}>
                                        <option value="nam">nam</option>
                                        <option value="nữ">nữ</option>
                                    </select>
                                )}
                                <br />
                                <b>Ngày sinh</b><br />
                                {isPTag ? (
                                    <b>{trainerState.date}</b>
                                ) : (
                                    <input
                                        className="trainer-input trainer-input-date"
                                        type="date"
                                        name="date"
                                        value={stateOnChange.date}
                                        onChange={(e) => {
                                            const date = e.target.value;
                                            setStateOnChange({ ...stateOnChange, date });
                                        }}
                                    />
                                )}
                                <br />
                                <b>Số điện thoại</b><br />

                                {isPTag ? (
                                    <b>{trainerState.phone}</b>
                                ) : (
                                    <input
                                        className="trainer-input trainer-input-phone"
                                        type="text"
                                        name="phone"
                                        value={stateOnChange.phone}
                                        onChange={(e) => {
                                            const phone = e.target.value;
                                            setStateOnChange({ ...stateOnChange, phone });
                                        }}
                                    />
                                )}

                                <br />
                                <b>Địa chỉ</b><br />
                                {isPTag ? (
                                    <b>{trainerState.address}</b>
                                ) : (
                                    <input
                                        className="trainer-input trainer-input-address"
                                        type="text"
                                        name="address"
                                        value={stateOnChange.address}
                                        onChange={(e) => {
                                            const address = e.target.value;
                                            setStateOnChange({ ...stateOnChange, address });
                                        }}
                                    />
                                )}
                                <br />
                                {isPTag ? (
                                    <button onClick={handleUpdate}>chỉnh sửa</  button>
                                ) : (
                                    <div>
                                        <button onClick={handleSave}>lưu</  button>
                                        <button onClick={handleCancel}>Huỷ</ button>
                                    </div>
                                )}
                                console.log({trainerState});
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