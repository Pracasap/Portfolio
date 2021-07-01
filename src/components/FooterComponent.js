import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer p-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 copyright">
                        <h6>© 2021 Coppyrights Prakash.com</h6>
                    </div>
                    <div class="col-md-6 social-links">
                        <a href="https://www.linkedin.com/in/prakashsapkota7/" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-linkedin" />
                        </a>&#8194;
                        <a href="http://github.com/pracasap" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-github" />
                        </a>&#8194;
                        <a href="mailto:optimistic.prakash@gmail.com" target="_blank" rel="noreferrer">
                        <ion-icon name="mail" />
                        </a>&#8194;
                        <a href="http://twitter.com/enceder_" target="_blank" rel="noreferrer">
                        <ion-icon name="logo-twitter" />
                        </a>&#8194;
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;