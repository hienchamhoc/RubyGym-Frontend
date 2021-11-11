import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Login } from '../components'
import * as Actions from '../store/actions'

function Loginpage() {

    // const dispatch = useDispatch();

    // // Ẩn header
    // useEffect(() => {
    //     dispatch(Actions.actHideHeader());

    //     return () => {
    //         dispatch(Actions.actShowHeader());
    //     }
    // }, [])

    return (
        <Login/>
    )
}

export default Loginpage
