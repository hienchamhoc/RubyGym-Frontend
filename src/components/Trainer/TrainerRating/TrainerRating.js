import { React, useState, useRef, useEffect } from "react";
import practiceInfoAPI from "../../../api/practiceInfoAPI";
import styles from "./TrainerRating.css";
import clsx from "clsx";
import avatar from "../../../store/imgs/avatar.jpg";
function TrainerRating(props) {
    const ref = useRef();
    let [showConfirmFalse, setShowConfirmFalse] = useState(false);
    let [ratingState, setRatingState] = useState({
        height: "160",
        weight: "80",
        bmi: "1.5",
        target: "40kg",
        rating: "",
    });
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (
                props.trigger &&
                ref.current &&
                !ref.current.contains(e.target)
            ) {
                props.setTrigger(false);
            }
        };

        document.addEventListener("click", checkIfClickedOutside, true);

        return () => {
            // Cleanup the event listener
            document.removeEventListener("click", checkIfClickedOutside, true);
        };
    }, [props.trigger]);
    useEffect(() => {
        (async () => {
            const response = await practiceInfoAPI.getPracticeInfo();
            if (response && response.status && response.data.status) {
                ratingState = response.data.data;
                setRatingState(ratingState);
            }
        })();
    }, []);
    const hanleConfirm = async () => {
        if (ratingState.rating == "") {
            setShowConfirmFalse(true);
            console.log(ratingState.rating);
            // console.log(ratingState.rating);
        } else {
            console.log(ratingState.rating);

            setShowConfirmFalse(false);
            props.setTrigger(false);
            const response = await practiceInfoAPI.updateRating(ratingState);
            if (response && !response.status && response.message) {
                alert(response.message);
            }
        }
    };
    return props.trigger ? (
        <>
            <div className="TrainerRating-popupWrapper">
                <div className="TrainerRating-popupInner" ref={ref}>
                    <div className="TrainerRating-Header">
                        <div>Đánh giá</div>
                    </div>
                    <div className="TrainerRating-Avatar">
                        <img
                            src={avatar}
                            className="TrainerRating-Avatar-Img"
                        ></img>
                    </div>
                    <div className="TrainerRating-Info">
                        <div className="TrainerRating-Info-1">
                            <div className="TrainerRating-Height">
                                <p>Chiều cao (cm)</p>
                                <b>{ratingState.height}</b>
                            </div>
                            <div className="TrainerRating-Weight">
                                <p>Cân nặng (kg)</p>
                                <b>{ratingState.weight}</b>
                            </div>
                            <div className="TrainerRating-BMI">
                                <p>Chỉ số BMI</p>
                                <b>{ratingState.bmi}</b>
                            </div>
                        </div>
                        <div className="TrainerRating-Info-2">
                            <p>Mục tiêu</p>
                            <b>{ratingState.target}</b>
                        </div>
                        <div className="TrainerRating-Info-3">
                        <p>Đánh giá</p>
                        <textarea v-model="message" onChange={(e) => {
                                setRatingState({
                                    ...ratingState,
                                    rating: e.target.value,
                                });
                            }}
                            placeholder="Đánh giá"></textarea>
                        </div>
                        {showConfirmFalse ? <p id="showConfirmFalse">* Bạn chưa đánh giá</p> : null}
                        <div className="btnRating">
                        <button
                            onClick={hanleConfirm}
                            className="btnSuccessRating"
                        >
                            Xác nhận
                        </button>
                        <button
                            className="btnCloseRating"
                            onClick={() => {
                                props.setTrigger(false);
                            }}
                        >Hủy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
}
export default TrainerRating;
