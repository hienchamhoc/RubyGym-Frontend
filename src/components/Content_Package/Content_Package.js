import React , { useState, useEffect }from 'react'
import './Content_Package.css'
import packageAPI from "./../../api/packageAPI";
import goitap from './../../store/imgs/goitap.png';


function Content_Package() {
    let [price, setPrice] = useState([]);

    useEffect(() => {
        (async () => {
            const responsePrice = await packageAPI.getPackageList();
            console.log(responsePrice);
            if (responsePrice && responsePrice.status && responsePrice.data.status) {
                var _price = [];
                const tempPackages = responsePrice.data.data.package_list;
                _price.push(tempPackages[0].price);
                _price.push(tempPackages[1].price);
                _price.push(tempPackages[2].price);
                price = _price;
                setPrice(price);
            }
        })();
    }, []);
    return (
        <div className="ct-goi-tap">
            <img src={goitap} alt=""/>
            <h1>GIÁ CÁC GÓI TẬP</h1>
                <h2>
                    Trung tâm cung cấp các dịch vụ tiện ích nhất với giá ưu đãi
                </h2>
            <div className="price-package price-1">
            {price[0]}
            </div>
            <div className="price-package price-2">
            {price[1]}
            </div>
            <div className="price-package price-3">
            {price[2]}
            </div>
        </div>

    )
}

export default Content_Package
