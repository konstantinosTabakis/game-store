import { FaTimes } from "react-icons/fa";

function CheckOutForm({closeForm}) {
    return (
        <div className="checkout-area">
            <div className="transparent" onClick={()=>closeForm()}></div>
            <div className="checkout-form">
                <div className="form-inner">
                    <div style={{textAlign: 'right'}}>
                        <FaTimes onClick={()=>closeForm()}/>
                    </div>
                    <div className="form-title centered">Payment Details</div>
                    <form >
                        <label htmlFor="number">Card Number</label>
                        <input className="full-input" id="number"  type="text" placeholder="xxxx xxxx xxxx xxxx" />
                        <div className="form-flex">
                            <div className="col">
                                <label htmlFor="date">Expiry Date</label>
                                <input type="text" id="date" placeholder="MM/YY"/>
                            </div>
                            <div className="col">
                                <label htmlFor="cvv">CVV</label>
                                <input type="text" id="cvv" placeholder="414"/>
                            </div>
                        </div>
                        <label htmlFor="name">Name on card</label>
                        <input className="full-input" type="text" placeholder="Name" id="name" />
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckOutForm