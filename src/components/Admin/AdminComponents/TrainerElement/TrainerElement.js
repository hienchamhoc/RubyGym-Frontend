import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import managementAPI from "../../../../api/managementAPI";
import { Popup } from "./../../../";
import './TrainerElement.css'

function TrainerElement({ trainer }) {
    const id = 1;

    let [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                setShowPopup((prev) => !prev);
            }, 1000);
        }

        return () => {
            clearTimeout(id);
        };
    }, [showPopup]);

    const handleDelete = async (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.cancelBubble = true;
        // event.stopImmediatePropagation();    
        // console.log('delete');

        const res = await managementAPI.trainerDelete({ id: trainer.id });
        // console.log(res);
        if (res && res.data && res.data.status) {
            setShowPopup(true);
            trainer.active = 0;
        }
    }

    const handleRestore = async (event) => {
        event.stopPropagation();
        event.preventDefault();
        event.cancelBubble = true;
        // event.stopImmediatePropagation();

        const res = await managementAPI.trainerRestore({ id: trainer.id });
        console.log(res);
        if (res && res.data && res.data.status) {
            setShowPopup(true);
            trainer.active = 1;
        }
        // console.log(trainer)
    }
    return (
        <div className="col l-3 m-4 c-6">
            <Link to={`detail/${trainer.id}`} className="trainer-link">
                <div style={{
                    background: `url(${process.env.REACT_APP_API_URL + trainer.avatar_url})no-repeat center / cover`,
                }} className="trainer-wrapper" >
                    <div className="trainer-infor">
                        <div className="trainer-name">{trainer.name}</div>
                        <div className="trainer-age">{trainer.phone}</div>
                    </div>
                    {trainer.active && <div className="trainer-delete" onClick={handleDelete}>Xóa</div>}
                    {!trainer.active && <div className="trainer-restore" onClick={handleRestore}>Khôi phục</div>}
                </div>
            </Link>
            <Popup trigger={showPopup} message="Thành công" />
        </div>
    )
}

export default TrainerElement
