import React from 'react'
import { Footer, Login } from '../components'
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
        <>
            <Login />
            {/* <Footer /> */}
        </>
    )
}

export default Loginpage
