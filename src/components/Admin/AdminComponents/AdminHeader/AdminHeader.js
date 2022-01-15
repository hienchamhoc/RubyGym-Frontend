import React from 'react'
import clsx from 'clsx'
import styles from './AdminHeader.module.css'
import { Link } from 'react-router-dom'

function AdminHeader({ heading, trainer }) {
    console.log(trainer)
    return (
        <div className={clsx(styles.wrapper)}>
            <h1 className={clsx(styles.heading)}>{heading}</h1>
            <div className={clsx(styles.box)}>
                <div className={clsx(styles.boxInput)}>
                    <span className={clsx(styles.icon)}><i className="fa fa-search"></i></span>
                    <input type="search" className={clsx(styles.searchTrainer)} placeholder="Search..." />
                </div>
            </div>
            <Link
                to={trainer ? '/admin/trainers/add' : '/admin/members/add'}
                // to='/admin/trainers/add'
                // to='/admin/members/add'
                className={clsx(styles.addBtn)}
            >
                Thêm
            </Link>
        </div>
    )
}

export default AdminHeader
