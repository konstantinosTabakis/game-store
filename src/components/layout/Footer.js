import background from "../../assets/img/layout/Footer.svg"
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='' style={{ backgroundImage: `url(${background})` }}>
        <div className="footer-inner">
            <div className="col">
                <div className="brand">Game Store</div>
                <div className="btns">
                    <BsFacebook size="18px"/>
                    <BsLinkedin size="18px"/>
                    <BsTwitter size="18px"/>
                </div>
                <div className="footer-cta">
                    <button className="btn">
                        <Link to='/games'>Shop Now</Link>    
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="title">Company</div>
                <div className="itm">About Us</div>
                <div className="itm">Careers</div>
                <div className="itm">Management Team</div>
                <div className="itm">Contact Us</div>
            </div>
            <div className="col">
                <div className="title">Customers</div>
                <div className="itm">Customer Support</div>
                <div className="itm">Join a Local User Group</div>
            </div>
            <div className="col">
                <div className="title">Partners</div>
                <div className="itm">All Partner Programs</div>
                <div className="itm">Solutions Partner Program</div>
                <div className="itm">App Partner Program</div>
            </div>
        </div>

    </footer>
     
  )
}

export default Footer