import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RenewPackage.css";
import packageAPI from "../../../../api/packageAPI";
import managementAPI from "../../../../api/managementAPI";
import { useNavigate } from "react-router-dom";
import Popup from "../../../Popup/Popup";

function RenewPackage() {
    const navigate = useNavigate();
    let [memberID, setMemberID] = useState(1);
    let [memberList, setMemberList] = useState([]);
    let [packageRenewID, setPackageRenewID] = useState(1);
    let [packageList, setPackageList] = useState([]);
    let [formFalse, setFormFalse] = useState(false);
    let [errMsg, setErrMsg] = useState(false);
    let [showPopup, setShowPopup] = useState(false);

    let { member_id } = useParams();
    if (!member_id) member_id = 1;
    // console.log(member_id);

    // Phần chỉnh sửa giá gói tập
    let [isPTag, setPTag] = useState(true);
    let [showPopupPrice, setShowPopupPrice] = useState(false);

    //Chỉnh sửa
    const handleEdit = () => {
        setPTag(false);
    };
    //Hủy
    const handleCancel = () => {
        setPTag(true);
    };
    //Lưu
    const handleUpdate = async () => {
        setPTag(true);
    };
    // Để show PopupPrice sau khi cập nhật thành công
    useEffect(() => {
        if (showPopupPrice) {
            var id = setTimeout(() => {
                setShowPopupPrice((prev) => !prev);
            }, 1000);
        }
        return () => {
            clearTimeout(id);
        };
    }, [showPopupPrice]);

    useEffect(() => {
        (async () => {
            // Get member list
            const _memberList = await managementAPI.memberList();
            memberList = _memberList.data.data.memberList;
            setMemberList(memberList);
            // console.log(memberList);

            // Get package list
            const res = await packageAPI.getPackageList();
            packageList = res.data.data.package_list;
            setPackageList(packageList);
            // console.log(packageList);

            if (memberList.find((member) => member.id == member_id) == null)
                memberID = 1;
            else memberID = member_id;
            setMemberID(memberID);

            packageRenewID = 1;
            setPackageRenewID(packageRenewID);
            console.log(memberID);
            console.log(packageRenewID);
        })();
    }, []);

    const handleForm = async (e) => {
        e.preventDefault();

        const response = await packageAPI.renewPackage({
            member_id: memberID,
            package_id: packageRenewID,
        });
        console.log({
            member_id: memberID,
            package_id: packageRenewID,
        });
        if (response && response.data && response.data.status) {
            console.log("OK");
            setShowPopup(true);
            setTimeout(() => navigate("/admin/members"), 2000);
            return;
        }

        setFormFalse(true);
        if (response.data.message == "Invalid token!") navigate("/login");
        else setErrMsg(response.data.message);
    };

    const handleMemberChange = (e) => {
        console.log(e.target.value);
        setMemberID(e.target.value);
    };
    const handlePackageChange = (e) => {
        console.log(e.target.value);
        setPackageRenewID(e.target.value);
    };

    const cancelForm = (e) => {
        e.preventDefault();
        navigate("/admin/members");
    };

    return (
        <div className="event-list-wrapper">
            <div className="event-list-header">
                <h1 className="event-headingg">GÓI TẬP</h1>
            </div>
            <div className="price-package-wrapper">
                <div className="price-package-header">GIÁ CÁC GÓI TẬP</div>
                <div className="row">
                    <div className="col l-4 packagee">
                        <div className="name-packagee">Gói 3 tháng (VNĐ)</div>
                        {isPTag ? (
                            <div className="price-packagee">3.000.000</div>
                        ) : (
                            <input
                                type="text"
                                className="price-input"
                                value="3.000.000"
                            />
                        )}
                    </div>
                    <div className="col l-4 packagee">
                        <div className="name-packagee">Gói 6 tháng (VNĐ)</div>
                        {isPTag ? (
                            <div className="price-packagee">6.000.000</div>
                        ) : (
                            <input
                                type="text"
                                className="price-input"
                                value="6.000.000"
                            />
                        )}
                    </div>
                    <div className="col l-4 packagee">
                        <div className="name-packagee">Gói 1 năm (VNĐ)</div>
                        {isPTag ? (
                            <div className="price-packagee">12.000.000</div>
                        ) : (
                            <input
                                type="text"
                                className="price-input"
                                value="12.000.000"
                            />
                        )}
                    </div>
                    
                </div>
                {isPTag && (
                        <div>
                            <button
                                onClick={handleEdit}
                                className="btn-edit-price btn-price"
                            >
                                Chỉnh sửa
                            </button>
                        </div>
                    )}
                    {!isPTag && (
                        <div>
                            <button
                                onClick={handleUpdate}
                                className="btn-update-price btn-price"
                            >
                                Lưu
                            </button>
                            <button
                                onClick={handleCancel}
                                className="btn-cancel-price btn-price"
                            >
                                Huỷ
                            </button>
                        </div>
                    )}
            </div>
            <div className="form-wrapper">
                {/* Header body */}
                <main className="form-body">
                    <div className="form-body-wrapper">
                        <h2 className="form-body-heading">GIA HẠN GÓI TẬP</h2>
                        <div className="form-inner-renew-package">
                            <form className="form-renew-package">
                                <div className="form-field-container">
                                    <h3 className="form-field-renew-package">
                                        Hội viên
                                    </h3>
                                </div>
                                <div className="form-group-renew-package">
                                    <select
                                        className="select-renew-package"
                                        value={memberID}
                                        onChange={handleMemberChange}
                                    >
                                        {memberList.map((member) => {
                                            // console.log(_package.name)
                                            return (
                                                <option
                                                    className="option-renew-package"
                                                    value={member.id}
                                                >
                                                    {member.name +
                                                        " - " +
                                                        member.phone}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-field-container">
                                    <h3 className="form-field-renew-package">
                                        Gói tập
                                    </h3>
                                </div>
                                <div className="form-group-renew-package">
                                    <select
                                        className="select-renew-package"
                                        onChange={handlePackageChange}
                                    >
                                        {packageList.map((_package) => {
                                            // console.log(_package.name)
                                            return (
                                                <option
                                                    className="option-renew-package"
                                                    value={_package.id}
                                                >
                                                    {_package.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="btn-group">
                                    <button
                                        className={"usersubmit-btnn"}
                                        onClick={handleForm}
                                    >
                                        Gia hạn
                                    </button>
                                    <button
                                        className="user-cancel-btn"
                                        onClick={cancelForm}
                                    >
                                        Hủy
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <Popup trigger={showPopup} message="Gia hạn thành công">
                        {" "}
                    </Popup>
                </main>
            </div>
        </div>
    );
}

export default RenewPackage;
