import './Footer.css'
import img from "./../assets/Logo-color.png";

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <img className="logo" src={img} alt="E-CELL" />
                <div className="foot-links-wrapper">
                    <div className="site-links foot-link">
                        <h4 className="links-title">Site Links</h4>
                        <p className="link">Home</p>
                        <p className="link">About</p>
                        <p className="link">Events</p>
                        <p className="link">Gallery</p>
                        <p className="link">Testimonials</p>
                    </div>

                    <div className="ref-links foot-link">
                        <h4 className="links-title">Reference Links</h4>
                        <p className="link">NIT Agartala</p>
                        <p className="link">IIIT Agartala</p>
                        <p className="link">IIC Website</p>
                        <p className="link">Startup India</p>
                        <p className="link">MHRD</p>
                    </div>
                </div>
                <iframe className="g-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.3788164800835!2d91.42115771478595!3d23.840678484544963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753ed686722f717%3A0x18d822d15feb14af!2sE-CELL%2C%20NIT%20Agartala!5e0!3m2!1sen!2sin!4v1644342321516!5m2!1sen!2sin" />
            </div>
            <div className="social-media">
                <h3 className="social-title">Follow our Social Media handles:</h3>
                <i class="f-sm fab fa-linkedin" />
                <i class="f-sm fab fa-facebook" />
                <i class="f-sm fab fa-youtube" />
                <i class="f-sm fab fa-instagram" />
                <i class="f-sm fab fas fa-envelope" />
            </div>

            <p className="foot-text">Designed and Developed by Web Development Team, E-Cell, NIT Agartala<br/><i class="far fa-copyright"/> Copyright 2022 &nbsp; All Rights Reserved</p>
        </>
    );
}

export default Footer;