import { assets } from '../../assets/assets';
import './Footer.css';

function Footer()
{
    return(
        <>
        <div className="footer" id='footer'>
<div className="footer-content">
    <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dicta hic odio non architecto, doloremque odit numquam esse mollitia nam? Animi ducimus necessitatibus fuga excepturi?</p>
    <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
    </div>
    </div>
    <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
    <div className="footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+91 8965864089</li>
    <li>contact@tomato.com</li>
</ul>
    </div>
</div>
<hr />
<p className="footer-copyright">
    copyright 2026 @tomato.com - All Right Reserved.
</p>
        </div>
        </>
    )

}

export default Footer;