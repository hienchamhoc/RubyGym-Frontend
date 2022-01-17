import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import trainingAPI from "../../api/trainingAPI";
import { Popup } from './../'
import managementAPI from "../../api/managementAPI";
import avatarTrainer from "./../../store/imgs/avatar.jpg";

import styles from "./TrainerInforOfCustomer.module.css";

function TrainerInforOfCustomer({ member, trainer_id }) {
    let [trainers, setTrainers] = useState([]);
    let [myTrainer, setMyTrainer] = useState({});

    let [isPTag, setPTag] = useState(true);

    let [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                showPopup = false;
                setShowPopup(showPopup);
            }, 2000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup]);

    const handleEdit = () => {
        setPTag(false);
    };
    const handleCancel = () => {
        setPTag(true);
    };

    useEffect(() => {
        (async () => {
            const response = await managementAPI.trainerDetail({ id: member.trainer_id });
            if (response && response.data.status) {
                myTrainer = response.data.data;
                setMyTrainer(myTrainer);
            }
            
            const _trainers = await managementAPI.trainerList();
            if (_trainers && _trainers.data.status) {
                trainers = _trainers.data.data.trainer_list;
                setTrainers(trainers);
            }
        })()
    }, [])

    // useEffect(() => {
    //     (async () => {
    //         const response = await managementAPI.trainerDetail({ id: member.trainer_id });
    //         if (response && response.data.status) {
    //             myTrainer = response.data.data;
    //             setMyTrainer(myTrainer);
    //         }
    //     })()
    // }, [isPTag]);


    const handleChangeTrainer = async (id) => {
        const response = await managementAPI.trainerDetail({ id: id });
        if (response && response.data.status) {
            myTrainer = response.data.data;
            setMyTrainer(myTrainer);
        }
    }

    const handleUpdate = async () => {
        setPTag(true);
        console.log(myTrainer);
        const response = await managementAPI.changeTrainer(member.id, myTrainer.id)
        console.log(response);
        // if (response && response.data.status) {
        //     setShowPopup((prev) => !prev);
        // }
    };


    return (
        <div className="grid">
            {/* Thông tin cá nhân */}
            <div className={clsx(styles.inforField)}>
                <div className={clsx(styles.header)}>
                    <h1 className={clsx(styles.inforHeading)}>
                        Thông tin huấn luyện viên
                    </h1>
                    {isPTag && (
                        <div className={clsx(styles.btnEditWrapper)}>
                            <button
                                onClick={handleEdit}
                                className={clsx(styles.btnEdit)}
                            >
                                Chỉnh sửa
                            </button>
                        </div>
                    )}
                    {!isPTag && (
                        <div>
                            <button
                                onClick={handleUpdate}
                                className={clsx(styles.btnUpdate)}
                            >
                                Lưu
                            </button>
                            <button
                                onClick={handleCancel}
                                className={clsx(styles.btnCancel)}
                            >
                                Huỷ
                            </button>
                        </div>
                    )}
                </div>

                <div className="row">
                    {/* Thông tin tập luyện */}
                    <div className="col l-12 m-12 c-12">
                        <div className={clsx(styles.inforTrainerWrapper)}>
                            <div className={clsx(styles.trainerAvatar)}>
                                <img src={process.env.REACT_APP_API_URL + myTrainer.avatar_url} alt=""/>
                            </div>
                            <div className={clsx(styles.inforTrainer)}>
                                <div className={clsx(styles.inforTrainerRow)}>
                                    <div
                                        className={clsx(styles.inforTrainerName)}
                                    >
                                        <h3>Huấn luyện viên</h3>
                                        {isPTag ? (
                                            <div className={clsx(styles.inforText)}>
                                                {myTrainer.name}
                                            </div>
                                        ) : (
                                            <select
                                                value={myTrainer.id}
                                                onChange={(e) => {
                                                    console.log(e.target.value)
                                                    handleChangeTrainer(e.target.value);
                                                }}
                                            >
                                                {
                                                    trainers.map(trainer => {
                                                        return (<option
                                                            selected={trainer.id == myTrainer.id}
                                                            value={trainer.id}>{trainer.name + ' - ' + trainer.phone}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        )}
                                    </div>
                                    <div
                                        className={clsx(styles.inforTrainerDetail)}
                                    >
                                        <h3>Ngày sinh</h3>
                                        <input
                                            readOnly={true}
                                            type="date"
                                            id="trainer-birthday"
                                            value={myTrainer.birthday ? myTrainer.birthday.substring(
                                                0,
                                                10
                                            ) : ''}
                                        />
                                    </div>
                                    <div
                                        className={clsx(styles.inforTrainerDetail)}
                                    >
                                        <h3>Giới tính</h3>
                                        <div className={clsx(styles.inforText)}>
                                            {myTrainer.gender}
                                        </div>
                                    </div>
                                    <div
                                        className={clsx(styles.inforTrainerDetail)}
                                    >
                                        <h3>Số điện thoại</h3>
                                        <div className={clsx(styles.inforText)}>
                                            {myTrainer.phone}
                                        </div>
                                    </div>
                                </div>
                                <div className={clsx(styles.inforTrainerRow)}>
                                    <div
                                        className={clsx(styles.inforTrainerDetail)}
                                    >
                                        <h3>Địa chỉ</h3>
                                        <div className={clsx(styles.inforText)}>
                                            {myTrainer.address}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Popup trigger={showPopup} message="Cập nhật thành công" />
        </div>
    );
}

export default TrainerInforOfCustomer;
