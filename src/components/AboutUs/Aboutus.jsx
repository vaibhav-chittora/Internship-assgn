import React from 'react'



function Aboutus() {
    return (
        <>
            {/* ABout ecoyaan */}
            <div className="row featurette m-5 mt-5  " style={{}}>
                <div className="col-md-7 ml-5  ">
                    <h2 className="featurette-heading fw-bold lh-1">About Ecoyaan </h2>
                    <p className="lead">At Ecoyaan, we are more than just a platform. Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.

                    </p>
                    <p>We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). To keep you motivated on this journey, on our platform and our social media pages, you can find:</p>

                    <ul>
                        <li>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                        <li>Videos, posts, and quizzes on climate change and sustainability</li>
                        <li>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                    </ul>
                </div>
                <div className="col-md-5">
                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                    <img src="https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png" alt="" width="550" height="400" />
                </div>
            </div>

            {/* Our Values */}

            <h1 className='m-5 pl-3'>Our Values</h1>
            <div className="d-flex justify-content-around ">


                <div className="card mb-3 border-0 " style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://ecoyaan.com/images/Trust.png" height="100" className="img-fluid rounded-start"
                                alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Trust</h5>
                                <p className="card-text">We value the trust of our community. We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.</p>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3 border-0" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://ecoyaan.com/images/Authenticity.png" height="100" className="img-fluid rounded-start"
                                alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Authenticity</h5>
                                <p className="card-text"> We are genuine in our mission to promote sustainability and environmental awareness. An authentic community of eco-conscious people can inspire each other on the journey towards sustainability.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="d-flex justify-content-around ">


                <div className="card mb-3 border-0" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://ecoyaan.com/images/Impact.png" height="100" className="img-fluid rounded-start"
                                alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Impact</h5>
                                <p className="card-text">We measure our success by our impact on the planet and our community. We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others.</p>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mb-3 border-0" style={{ maxWidth: '600px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://ecoyaan.com/images/FunAndEngaging.png" height="100" className="img-fluid rounded-start"
                                alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Fun & Engaging</h5>
                                <p className="card-text">Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. We aim to inject fun and creativity into everything we do, from designing our products to providing services.</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* Team Members */}

            <section className="ezy__team9 light  m-5">
                <div className="">
                    <div className="row justify-content-center mb-4 mb-md-5">
                        <div className="col-lg-6 col-xl-5 text-center">
                            <h2 className="ezy__team9-heading mb-3">Meet The Team</h2>

                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/about-us-founding-team-01.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">ABHISHEK</h4>
                                    <p className="mb-3 small">CO-FOUNDER</p>
                                    <p className="opacity-50 mb-0">Connect with the founders Socially :</p>
                                    <div className="ezy__team9-social-links mt-4 ">
                                        <a href="#"className="me-3"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                                        <a href="#"className="me-3"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item active px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/about-us-founding-team-02.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">SARWAN</h4>
                                    <p className="mb-3 small">CO-FOUNDER</p>
                                    <p className="opacity-50 mb-0">Connect with the founders Socially :</p>
                                    <div className="ezy__team9-social-links mt-4 ">
                                        <a href="#"className="me-3"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                                        <a href="#"className="me-3"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/about-us-social-media-team-01.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">SHRUTHI</h4>
                                    <p className="mb-3 small">SOCIAL MEDIA</p>
                                    <p className="opacity-50 mb-0">Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability.</p>
                                    <div className="ezy__team9-social-links mt-4 ">
                                        <a href="#"className="me-3"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                                        <a href="#"className="me-3"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/about-us-social-media-team-02.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">URMIL</h4>
                                    <p className="mb-3 small">SOCIAL MEDIA</p>
                                    <p className="opacity-50 mb-0">Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion.</p>
                                    <div className="ezy__team9-social-links mt-4 ">
                                        <a href="#"className="me-3"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                                        <a href="#"className="me-3"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">

                    <div className="row text-center">
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/about-us-product-team-01.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">DIVYA</h4>
                                    <p className="mb-3 small">UX DESIGN</p>
                                    <p className="opacity-50 mb-0">Divya creates user-friendly and engaging interfaces for our platform. </p>
                                    <div className="ezy__team9-social-links mt-4 ">
                                        <a href="#"className="me-3"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                                        <a href="#"className="me-3"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item active px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/about-us-product-team-02.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">PRASHANITH</h4>
                                    <p className="mb-3 small">ENGINEERING</p>
                                    <p className="opacity-50 mb-0">Prashanith is our front-end engineer, who brings the UX designs to life</p>
                                    <div className="ezy__team9-social-links mt-4 ">
                                        <a href="#"className="me-3"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                                        <a href="#"className="me-3"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/about-us-product-team-03.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">SAI ABHILASH</h4>
                                    <p className="mb-3 small">ENGINEERING</p>
                                    <p className="opacity-50 mb-0">Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform</p>
                                    <div className="ezy__team9-social-links mt-4 ">
                                        <a href="#"className="me-3"><i className="bi bi-linkedin"></i></a>
                                        <a href="#" className="me-3"><i className="bi bi-instagram"></i></a>
                                        <a href="#"className="me-3"><i className="bi bi-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="ezy__team9-item px-4 py-4 mt-4">
                                <img
                                    src="https://ecoyaan.com/images/favicon.png"
                                    alt=""
                                    className="img-fluid rounded-circle "
                                    width="120"
                                />
                                <div className="ezy__team9-content mt-3">
                                    <h4 className="mb-1">???</h4>
                                    <p className="mb-3 small">TEAM ECOYAAN</p>
                                    <p className="opacity-50 mb-0">This spot awaits you.
                                        Check out our <a href="/">open positions</a></p>
                                    <div className="ezy__team9-social-links mt-4">
                                        <i className="fa fa-facebook"></i>
                                        <a href="#" className="me-3"><span className="fab fa-linkedin-in"></span></a>
                                        <a href="#" className="me-3"><span className="fab fa-twitter"></span></a>
                                        <a href="#"><span className="fab fa-behance"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Aboutus