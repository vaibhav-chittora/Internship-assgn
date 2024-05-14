import React from "react";
function Home() {

    return (
        <>
        {/* Carousel */}
       

      
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000" >
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner " style={{'height': '650px'}}>
                <div className="carousel-item active">
                    <img src="https://ecoyaan.com/images/carousel-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://ecoyaan.com/images/carousel-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://ecoyaan.com/images/carousel-3.png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>



        {/* Main Home page section */}


            <div className="row featurette  p-5 mt-5 ">
                <div className="col-md-7 ">
                    <h2 className="featurette-heading fw-normal lh-1 fw-bold ">Join our community in creating a more sustainable future for everyone.</h2>
                    <p className="lead">At Ecoyaan, we are more than just a platform. Our vision is to build an eco-conscious community for people and products.</p>

                    <p className="fs-5">Consider us your partner for all things sustainable. To keep you motivated on the journey, we will provide you with engaging information about climate change, the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.</p>
                </div>
                <div className="col-md-5">

                    <img src="https://ecoyaan.com/images/Impact.png" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />

                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                </div>
            </div>

            <div className="row featurette  p-5 mt-2 ">
                <div className="col-md-7 ">
                    <h2 className="featurette-heading fw-normal lh-1 fw-bold">Carefully curated Eco-friendly products</h2>
                    <p className="lead">We believe that every purchase you make can have a positive impact on the planet and the future.</p>

                    <p className="fs-5">Soon, we will be connecting you with eco-friendly and sustainable products that are carefully selected based on their environmental and social benefits.</p>
                </div>
                <div className="col-md-5">

                    <video src="https://ecoyaan.com/images/ProductCuration.mp4" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />

                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                </div>
            </div>


            <div className="row featurette  p-5 mt-2 ">
                <div className="col-md-7 ">
                    <h2 className="featurette-heading fw-normal lh-1 fw-bold">For businesses that care deeply about sustainability</h2>
                    <p className="lead">Do you run a business that is committed to sustainability in every aspect of your work?</p>

                    <p className="fs-5">If yes, then you are the perfect fit for our platform. Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. Contact us today:</p>
                    <button type="button" className="btn btn-success btn-lg">Contact Us</button>
                </div>
                <div className="col-md-5">

                    <img src="https://ecoyaan.com/images/OurStory4.png" alt="" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />

                    {/* <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text></svg> */}
                </div>

                <div className="border-top border-5 my-5  "></div>

            </div>

        </>

    )

}

export default Home;