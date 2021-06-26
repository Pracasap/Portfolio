import React from 'react';
// import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer p-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-6 text-left">
                        <h5>© 2021 Coppyrights Prakashsapkota.com</h5>
                    </div>
                    <div class="col-md-6 col-lg-6 text-center">
                        <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                            Facebook
                        </a>&nbsp;
                        <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                            Twitter
                        </a>&nbsp;
                        <a href="http://instagram.com/" target="_blank" rel="noreferrer">
                            Instagram
                        </a>&nbsp;
                        <a href="http://pinterest.com/" target="_blank" rel="noreferrer">
                            Pinterest
                        </a>
                    </div>
        </div>
    </div>
        </footer>
    );
}

export default Footer;