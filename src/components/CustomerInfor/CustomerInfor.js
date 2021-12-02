import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import avatar from './../../store/imgs/trainer1.jpg'
import { Popup } from './../'
import userProfileAPI from './../../api/userProfileAPI'

import styles from './CustomerInfor.module.css'

// Trang này có thể hiển thị với cả học viên, huấn luyện viên và admin
// Thông tin chi tiết của mỗi học viên

function CustomerInfor() {
    let [nameUpdating, setNameUpdating] = useState(false);
    let [birthdayUpdating, setBirthdayUpdating] = useState(false);
    let [phoneUpdating, setPhoneUpdating] = useState(false);
    let [addressUpdating, setAddressUpdating] = useState(false);
    let [registerUpdating, setRegisterUpdating] = useState(false);
    let [outdateUpdating, setOutdateUpdating] = useState(false);
    // let [useNameUpdating, setUseNameUpdating] = useState(false);
    // let [heightUpdating, setHeightUpdating] = useState(false);
    // let [weightUpdating, setWeightUpdating] = useState(false);

    let [showPopup, setShowPopup] = useState(false);

    let nameRef = useRef(null);
    let birthdayRef = useRef(null);
    let phoneRef = useRef(null);
    let addressRef = useRef(null);
    let registerRef = useRef(null);
    let outdateRef = useRef(null);
    // let useNameRef = useRef(null);
    // let heightRef = useRef(null);
    // let weightRef = useRef(null);
    

    let [userProfile, setUserProfile] = useState({
        name: '',
        phone: '',
        birthday: '',
        gender: '',
        address: '',
        register: '',
        outdate: ''
    });

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
            const response = await userProfileAPI.getProfile();
            if (response && response.status && response.status.data) {
                userProfile = { ...response.status.data };
                setUserProfile(userProfile); 
            }
        })()
    }, [])

    const handleUpdate = () => {
        setShowPopup(prev => !prev)
        console.log(userProfile)
    }

    return (
        <div className="grid">

            {/* Thông tin cá nhân */}
            <div className={clsx(styles.inforField)}>
                <h1 className={clsx(styles.inforHeading)}>Thông tin cá nhân</h1>
                <div className="row">

                    {/* Avatar */}
                    <div className="col l-5 m-0 c-0">
                        <div className={clsx(styles.avatar)}
                            style={{
                                backgroundImage: `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </div>
                    </div>

                    {/* Thông tin */}
                    <div className="col l-7 m-12 c-12">
                        <div className={clsx(styles.infor)}>
                            <div className={clsx(styles.inforWrapper)}>

                                {/* Tên */}
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Họ tên</h3>
                                    <input
                                        readOnly={!nameUpdating}
                                        ref={nameRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.name}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                name: e.target.value,
                                            }))
                                        }}
                                        id='trainer-name' />
                                </div>
                                {
                                    !nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            nameRef.current.focus();
                                            setNameUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setNameUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setNameUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Ngày sinh */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày sinh</h3>
                                    <input
                                        readOnly={!birthdayUpdating}
                                        ref={birthdayRef}
                                        type="date"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.birthday}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                birthday: e.target.value
                                            }))
                                        }}
                                        id='trainer-birthday' />
                                </div>
                                {
                                    !birthdayUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            birthdayRef.current.focus();
                                            setBirthdayUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    birthdayUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setBirthdayUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    birthdayUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setBirthdayUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Số điện thoại */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Số điện thoại</h3>
                                    <input
                                        readOnly={!phoneUpdating}
                                        ref={phoneRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.phone}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                phone: e.target.value
                                            }))
                                        }}
                                        id='trainer-phone' />
                                </div>
                                {
                                    !phoneUpdating &&
                                    <label
                                        htmlFor='trainer-phone'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            phoneRef.current.focus();
                                            setPhoneUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    phoneUpdating &&
                                    <label
                                        htmlFor='trainer-phone'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setPhoneUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    phoneUpdating &&
                                    <label
                                        htmlFor='trainer-phone'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setPhoneUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Tài khoản */}
                            {/* <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Tài khoản</h3>
                                    <input
                                        readOnly={!useNameUpdating}
                                        ref={useNameRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.useName}
                                        onChange={(e) => ({
                                            ...userProfile,
                                            useName: e.target.value
                                        })}
                                        id='trainer-account' />
                                </div>
                                {
                                    !useNameUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            useNameRef.current.focus();
                                            setUseNameUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    useNameUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setUseNameUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    useNameUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setUseNameUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div> */}

                            {/* Địa chỉ */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Địa chỉ</h3>
                                    <input
                                        readOnly={!addressUpdating}
                                        ref={addressRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.address}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                address: e.target.value
                                            }))
                                        }}
                                        id='trainer-address' />
                                </div>
                                {
                                    !addressUpdating &&
                                    <label
                                        htmlFor='trainer-address'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            addressRef.current.focus();
                                            setAddressUpdating((prev => !prev))
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    addressUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setAddressUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    addressUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setAddressUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>


                            {/* Chiều cao */}
                            {/* <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Chiều cao</h3>
                                    <input
                                        readOnly={!heightUpdating}
                                        ref={heightRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.height}
                                        onChange={(e) => ({
                                            ...userProfile,
                                            height: e.target.value
                                        })}
                                        id='trainer-height' />
                                </div>
                                {
                                    !heightUpdating &&
                                    <label
                                        htmlFor='trainer-height'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            heightRef.current.focus();
                                            setHeightUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    heightUpdating &&
                                    <label
                                        htmlFor='trainer-height'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setHeightUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    heightUpdating &&
                                    <label
                                        htmlFor='trainer-height'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setHeightUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div> */}

                            {/* Cân nặng */}
                            {/* <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Cân nặng</h3>
                                    <input
                                        readOnly={!weightUpdating}
                                        ref={weightRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.birthday}
                                        onChange={(e) => ({
                                            ...userProfile,
                                            weight: e.target.value
                                        })}
                                        id='trainer-weight' />
                                </div>
                                {
                                    !weightUpdating &&
                                    <label
                                        htmlFor='trainer-weight'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            weightRef.current.focus();
                                            setWeightUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    weightUpdating &&
                                    <label
                                        htmlFor='trainer-weight'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setWeightUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    weightUpdating &&
                                    <label
                                        htmlFor='trainer-birthday'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setWeightUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div> */}

                            {/* Ngày đăng ký */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày đăng ký</h3>
                                    <input
                                        readOnly={!registerUpdating}
                                        ref={registerRef}
                                        type="date"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.register}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                register: e.target.value
                                            }))
                                        }}
                                        id='trainer-register' />
                                </div>
                                {
                                    !registerUpdating &&
                                    <label
                                        htmlFor='trainer-register'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            registerRef.current.focus();
                                            setRegisterUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    registerUpdating &&
                                    <label
                                        htmlFor='trainer-register'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setRegisterUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    registerUpdating &&
                                    <label
                                        htmlFor='trainer-register'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setRegisterUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Ngày hết hạn */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày hết hạn</h3>
                                    <input
                                        readOnly={!outdateUpdating}
                                        ref={outdateRef}
                                        type="date"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.outdate}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                outdate: e.target.value
                                            }))
                                        }}
                                        id='trainer-outdate' />
                                </div>
                                {
                                    !outdateUpdating &&
                                    <label
                                        htmlFor='trainer-outdate'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            outdateRef.current.focus();
                                            setOutdateUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    outdateUpdating &&
                                    <label
                                        htmlFor='trainer-outdate'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setOutdateUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    outdateUpdating &&
                                    <label
                                        htmlFor='trainer-outdate'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setOutdateUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Huấn luyện viên */}
                            {/* <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Huấn luyện viên</h3>
                                    <input
                                        style={{ pointerEvents: 'none' }}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value="60kg"
                                        id='trainer-trainer' />
                                </div>
                            </div> */}

                            {/* <button className={clsx(styles.inforSave)}>Lưu lại</button> */}
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
