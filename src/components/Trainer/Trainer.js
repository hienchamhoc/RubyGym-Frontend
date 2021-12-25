import { Header } from ".."
import './Trainer.css'
import traineravatar from '../../store/imgs/avatar.jpg'
import { Footer } from ".."
import { useState, useEffect } from "react"
import { Popup } from ".."
import trainerAPI from "../../api/trainerAPI"

function Trainer() {
    let [isPTag, setPTag] = useState(true);
    let [showPopup, setShowPopup] = useState(false);
    let [trainerProfile, setTrainerProfile] = useState({
        name: 'Tran Hien',
        gender: 'nam',
        role: 'HLV tập bụng',
        birthday: '12/2/2021',
        phone: '0964387413',
        address: 'so 1 hai ba trung',
        created_at: '20/11/2019',
        avatar_url: ''
    });
    let [stateOnChange, setStateOnChange] = useState({
        name: trainerProfile.name,
        gender: trainerProfile.gender,
        role: trainerProfile.role,
        birthday: trainerProfile.birthday,
        phone: trainerProfile.phone,
        address: trainerProfile.address,
        created_at: trainerProfile.created_at,
        avatar_url: trainerProfile.avatar_url
    });
    const handleEdit = () => {
        setPTag(false);
    }
    const handleUpdate = () => {
        setPTag(true);
        setTrainerProfile({
            name: stateOnChange.name,
            gender: stateOnChange.gender,
            role: stateOnChange.role,
            birthday: stateOnChange.birthday,
            phone: stateOnChange.phone,
            address: stateOnChange.address,
            created_at: stateOnChange.created_at,
            avatar_url: stateOnChange.avatar_url
        })
    }
    const handleCancel = () => {
        setPTag(true);
    }
    // Để show Popup sau khi cập nhật thành công
    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                setShowPopup(prev => !prev)
            }, 1000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])

    // Lấy profile về
    // useEffect(() => {
    //     (async () => {
    //         const response = await trainerAPII.getProfile();
    //         if (response && response.status && response.status.data) {
    //             trainerProfile = { ...response.data.data };
    //             setTrainerProfile(trainerProfile);
    //         }
    //     })()
    // }, [])

    // Upload Avatar
    // const handleUploadAvatar = async (e) => {

    //     const file = e.target.files[0];
    //     const formData = new FormData();
    //     formData.append('File', file);

    //     const response = await trainerAPI.updateTrainerAvatar(formData);
    //     if (response && response.status && response.data && response.data.data) {
    //         trainerProfile = {
    //             ...trainerProfile,
    //             avatar_url: response.data.data.imageURL
    //         }
    //         setTrainerProfile(trainerProfile);

    //     }
    //     if (response && !response.status) {
    //         alert(response.message)
    //     }
    // }

    return (
        <>
            <Header />
            <div className="trainer-main">
                <h2 className="trainer-heading">Thông tin cá nhân</h2>
                <div className="row">
                    <div className="col l-3 m-0 ">
                        <div className="trainer-avatar"
                            style={{
                                backgroundImage: trainerProfile.avatar_url ?
                                    `url(${trainerProfile.avatar_url})` :
                                    `url(${traineravatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}><label
                                htmlFor="avatarChoose"
                                className="chooseAvatar"
                            >
                                <i className="fas fa-camera"></i>
                            </label>
                            <input
                                type="file"
                                id="avatarChoose"
                                hidden
                            // onChange={handleUploadAvatar}
                            />
                        </div>
                    </div>
                    <div className="col l-9 m-12">
                        <div className="trainer-info-frames">
                            <div className="trainer-info">
                                <b>Họ tên</b><br />
                                {isPTag ? (
                                    <b>{trainerProfile.name}</b>
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
                                    <b>{trainerProfile.gender}</b>
                                ) : (
                                    <select
                                        name="gender"
                                        className="trainer-input trainer-input-gender"
                                        value={stateOnChange.gender}
                                        onChange={(e) => {
                                            const gender = e.target.value;
                                            setStateOnChange({ ...stateOnChange, gender });
                                        }}>
                                        <option value="nam">nam</option>
                                        <option value="nữ">nữ</option>
                                    </select>
                                )}
                                <br />
                                <b>Ngày sinh</b><br />
                                {isPTag ? (
                                    <b>{trainerProfile.birthday}</b>
                                ) : (
                                    <input
                                        className="trainer-input trainer-input-birthday"
                                        type="date"
                                        name="birthday"
                                        value={stateOnChange.birthday}
                                        onChange={(e) => {
                                            const birthday = e.target.value;
                                            setStateOnChange({ ...stateOnChange, birthday });
                                        }}
                                    />
                                )}
                                <br />
                                <b>Số điện thoại</b><br />

                                {isPTag ? (
                                    <b>{trainerProfile.phone}</b>
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
                                    <b>{trainerProfile.address}</b>
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
                                    <button onClick={handleEdit}>chỉnh sửa</  button>
                                ) : (
                                    <div>
                                        <button onClick={handleUpdate}>lưu</  button>
                                        <button onClick={handleCancel}>Huỷ</ button>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
                <Popup trigger={showPopup} message="Cập nhật thành công" />
            </div>
            <Footer />
        </>
    )
}
export default Trainer