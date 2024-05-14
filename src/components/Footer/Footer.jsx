import React from "react";

function Footer() {

    return (
        <div className="">
            <footer className="py-5 container ">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Company</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">ABout Us</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Sell On Ecoyaan</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Careers</a></li>

                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Terms of use</a></li>

                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Links</h5>
                        <ul className="nav flex-column">
                           
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                           
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to receive updates on blogs, future launches and more !</h5>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="r9e7mm" />
                                <button className="btn btn-success" type="button" fdprocessedid="zr5bii">Subscribe</button>
                            </div>
                            <p className="mt-4">By subscribing, you agree to receive notifications
                                <a href="/" className="m-2">Privacy Policy</a></p>

                            <ul className="list-unstyled d-flex justify-content-end ">

                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="/">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="/">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a className="link-body-emphasis" href="/">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </li>

                            </ul>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"> </div>

                <div className="d-flex align-items-center justify-content-between ">

                    <div className="col-6 col-md-2 mb-3 fs-5 ">
                        <h5>Registered Address: </h5>
                      
                        <p className="text-body-secondary">1-N-12T-781/1
                            Sri Krishna Vilasa,
                            Urvastores,
                            Ashoknagar(MR),
                            Mangalore,
                            Dakshina Kannada- 575006,
                            Karnataka, India</p>
                    </div>

                    <div className="col-6 col-md-2 mb-3 fs-5">
                        <h5>Legal Business Name:</h5>
                        <p className="text-body-secondary">
                            Kindkarma E-Retail Private Limited
                        </p>
                        <p className="text-body-secondary">
                            CIN:U47912KA2023PTC182592
                            Telephone: +91 9980490777
                        </p>
                    </div>

                    <div>

                    </div>

                    {/* <p className="">© 2024 Company, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">

                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <i className="bi bi-linkedin"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="link-body-emphasis" href="/">
                                <i className="bi bi-twitter"></i>
                            </a>
                        </li>

                    </ul> */}
                </div>


            </footer>
            <div className="text-center bg-dark text-white p-3 mb-0 fs-5">
                © 2023 - 2024, Ecoyaan<sup>TM</sup>
            </div>
        </div>
    )
}

export default Footer;