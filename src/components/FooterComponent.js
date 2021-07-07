import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer p-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 copyright">
                        <h6>© 2021 Coppyrights Prakash.com</h6>
                    </div>
                    <div className="col-md-6 social-links">
                        <a href="https://www.linkedin.com/in/prakashsapkota7/" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="logo-linkedin" /></span>
                        </a>&#8194;
                        <a href="http://github.com/pracasap" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="logo-github" /></span>
                        </a>&#8194;
                        <a href="mailto:optimistic.prakash@gmail.com" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="mail" /></span>
                        </a>&#8194;
                        <a href="http://twitter.com/enceder_" target="_blank" rel="noreferrer">
                        <span className="footer-icon"><ion-icon name="logo-twitter" /></span>
                        </a>&#8194;
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;