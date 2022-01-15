import { React, useState, useRef, useEffect } from 'react'
import practiceInfoAPI from '../../../api/practiceInfoAPI';
import './TrainerRating.css';
import avatar from "../../../store/imgs/avatar.jpg";
function TrainerRating(props) {
    const ref = useRef();
    let [showConfirmFalse, setShowConfirmFalse] = useState(false);
    let [ratingState, setRatingState] = useState({
        height: '1m6',
        weight: '80kg',
        bmi: '1.5',
        target: '40kg',
        rating: ''
    });
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (props.trigger && ref.current && !ref.current.contains(e.target)) {
                props.setTrigger(false);
            }
        };

        document.addEventListener('click', checkIfClickedOutside, true);

        return () => {
            // Cleanup the event listener
            document.removeEventListener('click', checkIfClickedOutside, true);
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
        if (ratingState.rating == '') {
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
    }
    return props.trigger ? (
        <>
            <div className='TrainerRating-popupWrapper'>
                <div className='TrainerRating-popupInner' ref={ref}>
                    <button
                        className="btn-close close-btn"
                        onClick={() => {
                            props.setTrigger(false)
                        }}
                    ></button>
                    <div className='TrainerRating-Header'>
                        <h1 className=''>Đánh giá</h1>
                    </div>
                    <div className='TrainerRating-Avatar'>
                        <img src={avatar} className='TrainerRating-Avatar-Img'></img>
                    </div>
                    <div className='TrainerRating-Info'>
                        <div className='TrainerRating-Height'>
                            <p>Chiều cao( cm)</p>
                            <b>{ratingState.height}</b>
                        </div>
                        <div className='TrainerRating-Weight'>
                            <p>Cân nặng( kg)</p>
                            <b>{ratingState.weight}</b>
                        </div>
                        <div className='TrainerRating-BMI'>
                            <p>Chỉ số BMI</p>
                            <b>{ratingState.bmi}</b>
                        </div>
                        <p>Mục tiêu</p>
                        <b>{ratingState.target}</b>
                        <p>Đánh giá</p>
                        <input
                            type="text"
                            onChange={(e) => {
                                setRatingState({
                                    ...ratingState,
                                    rating: e.target.value
                                })
                            }}
                        ></input><br />
                        {showConfirmFalse ? (<p>Bạn chưa đánh giá</p>) : null}
                        <button
                            onClick={hanleConfirm}
                            className='btn btn-success '
                        >Xac nhan</button>
                    </div>
                </div>
            </div>
        </>
    ) : null;
}
export default TrainerRating;