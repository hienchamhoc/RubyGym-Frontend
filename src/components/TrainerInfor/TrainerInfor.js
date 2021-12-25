import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import avatar from './../../store/imgs/avatar.jpg'
import { Popup } from './../'
import trainerAPI from './../../api/trainerAPI'

import styles from './TrainerInfor.module.css'

// Trang này có thể hiển thị với cả học viên, huấn luyện viên và admin
// Thông tin chi tiết của mỗi học viên

function CustomerInfor() {
    let [isPTag, setPTag] = useState(true);


    let [showPopup, setShowPopup] = useState(false);



    let [trainerProfile, setTrainerProfile] = useState({
        name: 'hien',
        phone: '090394092',
        birthday: '15/2/1556',
        gender: 'Nam',
        address: 'so 1 hoang mai',
        create_at: '15/2/1995',
        avatar_url: '',
    });
    let [profileOnChange, setProfileOnChange] = useState({
        name: trainerProfile.name,
        phone: trainerProfile.phone,
        birthday: trainerProfile.birthday,
        gender: trainerProfile.gender,
        address: trainerProfile.address,
        create_at: trainerProfile.create_at,
        avatar_url: trainerProfile.avatar_url
    })
    const handleEdit = () => {
        setPTag(false);
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
    useEffect(() => {
        (async () => {
            const response = await trainerAPI.getTrainerInfo();
            if (response && response.status && response.status.data) {
                trainerProfile = { ...response.data.data };
                setTrainerProfile(trainerProfile);
            }
        })()
    }, [])

    // Upload Avatar
    const handleUploadAvatar = async (e) => {

        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('File', file);

        const response = await trainerAPI.updateTrainerAvatar(formData);
        if (response && response.status && response.data && response.data.data) {
            trainerProfile = {
                ...trainerProfile,
                avatar_url: response.data.data.imageURL
            }
            setTrainerProfile(trainerProfile);

        }
        if (response && !response.status) {
            alert(response.message)
        }
    }

    //Update Profile
    const handleUpdate = async () => {
        setPTag(true);
        setTrainerProfile({
            name: profileOnChange.name,
            phone: profileOnChange.phone,
            birthday: profileOnChange.birthday,
            gender: profileOnChange.gender,
            address: profileOnChange.address,
            create_at: profileOnChange.address,
            avatar_url: profileOnChange.avatar_url
        })
        console.log(trainerProfile);
        const response = await trainerAPI.updateTrainerInfo(trainerProfile);
        if (response && response.status) setShowPopup(prev => !prev);
        if (response && !response.status && response.message) {
            alert(response.message);
        }
    }

    return (
        <div className="grid">

            {/* Thông tin cá nhân */}
            <div className={clsx(styles.inforField)}>
                <h1 className={clsx(styles.inforHeading)}>Thông tin cá nhân</h1>
                <div className="row">

                    {/* Avatar */}
                    <div className="col l-5 m-0 c-0">
                        <div
                            className={clsx(styles.avatar)}
                            style={{
                                backgroundImage: trainerProfile.avatar_url ?
                                    `url(${trainerProfile.avatar_url})` :
                                    `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                            <label
                                htmlFor="avatarChoose"
                                className={clsx(styles.chooseAvatar)}
                            >
                                <i className={clsx(styles.chooseAvatarIcon, "fas fa-camera")}></i>
                            </label>
                            <input
                                type="file"
                                id="avatarChoose"
                                hidden
                                onChange={handleUploadAvatar}
                            />
                        </div>
                    </div>

                    {/* Thông tin */}
                    <div className="col l-7 m-12 c-12">
                        <div className={clsx(styles.infor)}>
                            <div className={clsx(styles.inforWrapper)}>

                                {/* Tên */}
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Họ tên</h3>
                                    {isPTag ? (
                                        <b>{trainerProfile.name}</b>
                                    ) : (
                                        <input
                                            //readOnly={!nameUpdating}
                                            //ref={nameRef}
                                            type="text"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.name}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    name: e.target.value,
                                                })
                                            }}
                                            id='trainer-name' />
                                    )}
                                </div>
                            </div>

                            {/* Số điện thoại */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Số điện thoại</h3>
                                    {isPTag ? (
                                        <b>{trainerProfile.phone}</b>
                                    ) : (
                                        <input
                                            // readOnly={!phoneUpdating}
                                            // ref={phoneRef}
                                            type="text"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.phone}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    phone: e.target.value
                                                })
                                            }}
                                            id='trainer-phone' />
                                    )}
                                </div>

                            </div>

                            {/* Ngày sinh */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày sinh</h3>
                                    {isPTag ? (
                                        <b>{trainerProfile.birthday}</b>
                                    ) : (
                                        <input
                                            // readOnly={!birthdayUpdating}
                                            // ref={birthdayRef}
                                            type="date"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.birthday}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    birthday: e.target.value
                                                })
                                            }}
                                            id='trainer-birthday' />
                                    )}
                                </div>

                            </div>

                            {/* Giới tính */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Giới tính</h3>
                                    {isPTag ? (
                                        <b>{trainerProfile.gender}</b>
                                    ) : (
                                        <select
                                            // disabled={!genderUpdating}
                                            // ref={genderRef}
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.gender}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    gender: e.target.value
                                                })
                                            }}
                                        >
                                            <option>Nam</option>
                                            <option>Nữ</option>
                                        </select>
                                    )}
                                </div>

                            </div>



                            {/* Địa chỉ */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Địa chỉ</h3>
                                    {isPTag ? (
                                        <b>{trainerProfile.address}</b>
                                    ) : (
                                        <input
                                            // readOnly={!addressUpdating}
                                            // ref={addressRef}
                                            type="text"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.address}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    address: e.target.value
                                                })
                                            }}
                                            id='trainer-address' />
                                    )}
                                </div>

                            </div>

                            {/* Ngày đăng ký */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày đăng ký</h3>
                                    {isPTag ? (
                                        <b>{trainerProfile.create_at}</b>
                                    ) : (
                                        <input
                                            // readOnly={!registerUpdating}
                                            // ref={registerRef}
                                            type="date"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.create_at}
                                            onChange={(e) => {
                                                setProfileOnChange({
                                                    ...profileOnChange,
                                                    create_at: e.target.value
                                                })
                                            }}
                                            id='trainer-register' />
                                    )}
                                </div>

                            </div>

                            {/* Ngày hết hạn */}
                            {/* <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày hết hạn</h3>
                                    {isPTag ? (
                                        <b>{trainerProfile.expire_at}</b>
                                    ) : (
                                        <input
                                            // readOnly={!outdateUpdating}
                                            // ref={outdateRef}
                                            type="date"
                                            className={clsx(styles.inforText)}
                                            value={profileOnChange.expire_at}
                                            onChange={(e) => {
                                                setProfileOnChange(prev => ({
                                                    ...profileOnChange,
                                                    expire_at: e.target.value
                                                }))
                                            }}
                                            id='trainer-outdte' />
                                    )}
                                </div>
                            </div> */}
                            {isPTag ? (
                                <button onClick={handleEdit}
                                    className="btn btn-primary btn-edit"

                                >chỉnh sửa</  button>
                            ) : (
                                <div>
                                    <button onClick={() => {
                                        //setNameUpdating(prev => !prev);
                                        handleUpdate();
                                    }}
                                        className="btn btn-success btn-update"
                                    >Lưu</  button>
                                    <button onClick={handleCancel}
                                        className="btn btn-danger btn-cancel"
                                    >Huỷ</ button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Lịch tập luyện */}
            <div className={clsx(styles.inforField)}>
                <h1 className={clsx(styles.inforHeading)}>Thông tin tập luyện</h1>
            </div>

            <Popup trigger={showPopup} message="Cập nhật thành công" />
        </div>
    )
}

export default CustomerInfor 