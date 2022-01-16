import React from 'react'
import { Link } from 'react-router-dom'
import './TrainerElement.css'

function TrainerElement({trainer}) {
    const id = 1;
    return (
        <div className="col l-3 m-4 c-6">
            <Link to={`detail/${trainer.id}`} className="trainer-link">
                <div style={{
                    background: `url(${process.env.REACT_APP_API_URL + trainer.avatar_url})no-repeat center / cover`,
                }}className="trainer-wrapper" >
                    <div className="trainer-infor">
                        <div className="trainer-name">{trainer.name}</div>
                        <div className="trainer-age">{trainer.phone}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default TrainerElement
