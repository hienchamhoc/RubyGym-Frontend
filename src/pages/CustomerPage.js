import { Header, CustomerInfor, Footer } from "../components";
function CustomerPage() {
    return (
        <>
            <Header />
            <div className="grid wide">
                <div className="row">
                    <div className="col l-10 l-o-1">
                        <div 
                            style={{
                                marginTop: '90px'
                            }}
                            className="wrapper">
                            <CustomerInfor />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default CustomerPage