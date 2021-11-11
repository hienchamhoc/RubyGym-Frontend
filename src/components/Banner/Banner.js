import React from 'react';
import './Banner.css'
<<<<<<< HEAD
import pic1 from './../../store/imgs/pic1.png';
import pic2 from './../../store/imgs/pic2.png';
import pic3 from './../../store/imgs/pic3.jpg';
import pic4 from './../../store/imgs/pic4.png';
=======
import pic1 from './../../imgs/pic1.png';
import pic2 from './../../imgs/pic2.png';
import pic3 from './../../imgs/pic3.jpg';
import pic4 from './../../imgs/pic4.png';
>>>>>>> 05ddadc622ee7547456bb38cf5927f9c79a0a14b
function Banner() {
    return (
        <div className="CSSgal">
            <s id="s1" />
            <s id="s2" />
            <s id="s3" />
            <s id="s4" />
            <div className="slider">
                <div>
<<<<<<< HEAD
                    <img src={pic1} />
                </div>
                <div>
                    <img src={pic2} />
                </div>
                <div>
                    <img src={pic3} />
                </div>
                <div>
                    <img src={pic4} />
=======
                    <img src="{pic1}" />
                </div>
                <div>
                    <img src="{pic2}" />
                </div>
                <div>
                    <img src="{pic3}" />
                </div>
                <div>
                    <img src="{pic4}" />
>>>>>>> 05ddadc622ee7547456bb38cf5927f9c79a0a14b
                </div>
            </div>
            <div className="prevNext">
                <div><a href="#s4" /><a href="#s2" /></div>
                <div><a href="#s1" /><a href="#s3" /></div>
                <div><a href="#s2" /><a href="#s4" /></div>
                <div><a href="#s3" /><a href="#s1" /></div>
            </div>
            <div className="bullets">
                <a href="#s1" />
                <a href="#s2" />
                <a href="#s3" />
                <a href="#s4" />
            </div>
        </div>
    )
}

export default Banner;
