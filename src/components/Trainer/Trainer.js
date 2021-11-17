import React from 'react'
import { Link } from 'react-router-dom'
import './Trainer.css'

function Trainer() {
    const id = 1;
    return (
        <div className="col l-3 m-4 c-6">
            <Link to={`detail/${id}`} className="trainer-link">
                <div className="trainer-wrapper">
                    <div className="trainer-infor">
                        <div className="trainer-name">Nguyễn Văn Đương</div>
                        <div className="trainer-age">20 tuổi</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Trainer
