import React from "react";
import './header.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="header-container">
        <div className="header-logo">
        <Link to = '/'>
          <img 
                src="https://t3.ftcdn.net/jpg/02/47/48/00/360_F_247480017_ST4hotATsrcErAja0VzdUsrrVBMIcE4u.jpg"
                width="100px" 
                alt =""
            />
            </Link>
        </div>
        <div className="header-nav">
                <Link to = '/bestseller'>Best Seller</Link>   
                <Link to = '/electronicsproduct' >Electronics</Link>
                <Link to = '/menproduct' >Men's Fashion</Link>
                <Link to= '/womenproduct'>Women's Fashion</Link>
                <Link to = '/' >Sports</Link>
                <Link to = '/details' >Details</Link>
                {/* <Link to = '/contactus' >Contact Us</Link>   */}
                {/* <Link to = '/audit_table' > Audit table</Link>     */}
                {/* <Link to = '/scrollable_table' > Scrollable table</Link>              */}
        </div>
        <div className="header-nav icons">     
            <FontAwesomeIcon className='icon'  icon={faCircleUser} />
            <span>Chinna</span>
            <FontAwesomeIcon  className='icon' icon={faCartShopping} />
        </div>
    </div>
  );
}

export default Header;
