import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import trainingAPI from "./../../api/trainingAPI";
import { Popup } from "./../";

import styles from "./TrainingInfor.module.css";

function TrainingInfor(props) {
    let [isPTag, setPTag] = useState(true);

    let [showPopup, setShowPopup] = useState(false);

    let [trainingInformation, setTrainingInfor] = useState({
        weight: 0,
        height: 0,
        bmi: 0,
        target: '0'
    });
    let [trainingInforOnChange, setTrainingInforOnChange] = useState({
        weight: 0,
        height: 0,
        bmi: 0,
        target: '0'
    });
    
    // Lấy thông tin tập luyện về
    useEffect(() => {
        (async () => {
            var response;
            
            if (localStorage.getItem('role') == 'member') response = await trainingAPI.getInfor();
            else response = await trainingAPI.adminGetInfor(props.id);
            console.log(response);
            if (response && response.status && response.data.status) {
                trainingInformation = { ...response.data.data };
                trainingInformation.bmi =  Math.round(trainingInformation.weight/trainingInformation.height/trainingInformation.height*10000) / 10
                setTrainingInforOnChange(trainingInformation);
                setTrainingInfor(trainingInformation);
                console.log(trainingInformation);
            }
        })();
    }, []);

    const handleEdit = () => {
        setPTag(false);
    };
    const handleCancel = () => {
        setPTag(true);
    };
    const handleUpdate = async () => {
        setPTag(true);
        trainingInformation = { ...trainingInforOnChange };
        setTrainingInfor(trainingInformation);
        // console.log(trainingInforOnChange);
        const response = await trainingAPI.updateInfor(trainingInformation);
        if (response && response.status) {
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
            setTrainingInfor({...trainingInforOnChange});
        }
        if (response && !response.status && response.message) {
            alert(response.message);
        }
    };

    return (
        <div className="grid">
            {/* Thông tin cá nhân */}
            <div className={clsx(styles.inforField)}>
                <div className={clsx(styles.header)}>
                    <h1 className={clsx(styles.inforHeading)}>
                        Thông tin tập luyện
                    </h1>
                    {(localStorage.getItem('role') == 'member' && isPTag) && (
                        <div className={clsx(styles.btnEditWrapper)}>
                            <button
                                onClick={handleEdit}
                                className={clsx(styles.btnEdit)}
                            >
                                Chỉnh sửa
                            </button>                       
                        </div>
                    )}
                    {(localStorage.getItem('role') == 'member' && !isPTag) && (
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
                        <div className={clsx(styles.infor)}>
                            <div className={clsx(styles.inforWrapperAll)}>
                                <div className={clsx(styles.inforWrapper) + " col l-4"}>
                                    {/* Chiều cao */}
                                    <div className={clsx(styles.inforContent)}>
                                        <h3 className={clsx(styles.inforLabel)}>
                                            Chiều cao (cm)
                                        </h3>
                                        {isPTag ? (
                                            <b>{trainingInformation.height/10}</b>
                                        ) : (
                                            <input
                                                //readOnly={!nameUpdating}
                                                //ref={nameRef}
                                                type="number"
                                                className={clsx(
                                                    styles.inforText
                                                )}
                                                value={trainingInforOnChange.height/10}
                                                onChange={(e) => {
                                                    trainingInforOnChange = {
                                                        weight: trainingInforOnChange.weight,
                                                        height: e.target.value * 10,
                                                        bmi: Math.round(trainingInforOnChange.weight/e.target.value/e.target.value*100) / 10,
                                                        target: trainingInforOnChange.target
                                                    }
                                                    setTrainingInforOnChange(trainingInforOnChange);
                                                    console.log(trainingInforOnChange);
                                                }}
                                                id="trainer-name"
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* Cân nặng */}
                                <div className={clsx(styles.inforWrapper) + " col l-4"}>
                                    <div className={clsx(styles.inforContent)}>
                                        <h3 className={clsx(styles.inforLabel)}>
                                            Cân nặng (kg)
                                        </h3>
                                        {isPTag ? (
                                            <b>{trainingInformation.weight/1000}</b>
                                        ) : (
                                            <input
                                                type="number" 
                                                step="0.1"
                                                className={clsx(
                                                    styles.inforText
                                                )}
                                                value={trainingInforOnChange.weight/1000}
                                                onChange={(e) => {
                                                    trainingInforOnChange = {
                                                        weight: e.target.value * 1000,
                                                        height: trainingInforOnChange.height,
                                                        bmi: Math.round(e.target.value * 1000/trainingInforOnChange.height/trainingInforOnChange.height*10000) / 10,
                                                        target: trainingInforOnChange.target
                                                    }
                                                    setTrainingInforOnChange(trainingInforOnChange);
                                                    console.log(trainingInforOnChange);
                                                }}
                                                id="trainer-phone"
                                            />
                                        )}
                                    </div>
                                </div>
                                
                                {/* Chỉ số BMI */}
                                <div className={clsx(styles.inforWrapper) + " col l-4"}>
                                    <div className={clsx(styles.inforContent)}>
                                        <h3 className={clsx(styles.inforLabel)}>
                                            Chỉ số BMI
                                        </h3>
                                            <b>{trainingInforOnChange.bmi}</b>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={clsx(styles.inforWrapperAll)}>
                                <div className={clsx(styles.inforWrapper)}>
                                    {/* Mục tiêu */}
                                    <div className={clsx(styles.inforContent)}>
                                        <h3 className={clsx(styles.inforLabel)}>
                                            Mục tiêu
                                        </h3>
                                        {isPTag ? (
                                            <b>{trainingInformation.target}</b>
                                        ) : (
                                            // <input
                                            //     type="text"
                                            //     className={clsx(
                                            //         styles.inforText
                                            //     )}
                                            //     value={trainingInforOnChange.target}
                                            //     onChange={(e) => {
                                            //         trainingInforOnChange = {
                                            //             weight: trainingInforOnChange.weight,
                                            //             height: trainingInforOnChange.height,
                                            //             bmi: trainingInforOnChange.bmi,
                                            //             target: e.target.value
                                            //         }
                                            //         setTrainingInforOnChange(trainingInforOnChange);
                                            //         console.log(trainingInforOnChange);
                                            //     }}
                                            //     id="trainer-name"
                                            // />
                                            <textarea v-model="message" 
                                            className={clsx(
                                                styles.inforText
                                            )}
                                            value={trainingInforOnChange.target}
                                            onChange={(e) => {
                                                trainingInforOnChange = {
                                                    weight: trainingInforOnChange.weight,
                                                    height: trainingInforOnChange.height,
                                                    bmi: trainingInforOnChange.bmi,
                                                    target: e.target.value
                                                }
                                                setTrainingInforOnChange(trainingInforOnChange);
                                                console.log(trainingInforOnChange);
                                            }}
                                            ></textarea>
                                            
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(styles.inforWrapperAll)}>
                                <div className={clsx(styles.inforWrapper)}>
                                    {/* Đánh giá */}
                                    <div className={clsx(styles.inforContent)}>
                                        <h3 className={clsx(styles.inforLabel)}>
                                            Đánh giá của huấn luyện viên
                                        </h3>
                                        <b>
                                            {trainingInformation.evaluation}
                                        </b>
                                    </div>
                                </div>
                            </div>
                            {/* {isPTag ? (
                                <button
                                    onClick={handleEdit}
                                    className="btn btn-primary"
                                >
                                    chỉnh sửa
                                </button>
                            ) : (
                                <div>
                                    <button
                                        onClick={handleUpdate}
                                        className="btn btn-success"
                                    >
                                        Lưu
                                    </button>
                                    <button
                                        onClick={handleCancel}
                                        className="btn btn-danger"
                                    >
                                        Huỷ
                                    </button>
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>
            </div>

            <Popup trigger={showPopup} message="Cập nhật thành công" />
        </div>
    );
}

export default TrainingInfor;