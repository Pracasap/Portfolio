import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer p-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center">
                        <h6>© 2021 Coppyrights Prakash.com</h6>
                    </div>
                    <div class="col-md-6 text-center social-links">
                        <a href="http://github.com/pracasap" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-github"></ion-icon>
                        </a>&#8194;
                        <a href="https://www.linkedin.com/in/prakashsapkota7/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        </a>&#8194;
                        <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-facebook"></ion-icon>
                        </a>&#8194;
                        <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-twitter"></ion-icon>
                        </a>&#8194;
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;