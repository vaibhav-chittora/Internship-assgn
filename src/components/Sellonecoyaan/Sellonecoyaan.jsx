import React from 'react'


function Sellonecoyaan() {
    return (
        <section className="ezy__contact4 light">
            <div className="container">
                <div className="row py-4">
                    <div className="col-lg-7 mb-3 mb-lg-0">
                        <img src="https://ecoyaan.com/images/SellOnEcoyaan.png" alt="" width='100%' height='100%' className='rounded'/>
                        {/* <div className="ezy__contact4-bg-holder h-100 width:90% height:100% "
                            style={{ 'background-image': 'url(https://ecoyaan.com/images/OurStory4.png)', padding: 20}}>
                        </div> */}
                    </div>
                    <div className="col-lg-5  ">
                        <div className="card ezy__contact4-form-card border-0">
                            <div className="card-body p-md-5">
                                <h2 className="ezy__contact4-heading mb-3 fs-2">Seller Form</h2>
                                <p className="ezy__contact4-sub-heading mb-5">We will get back to you!
                                </p>

                                <form>
                                    <div className="form-group mb-3 mt-2">Name
                                        <input type="text" className="form-control" placeholder="Enter Name" />
                                    </div>
                                    <div className="form-group mb-3 mt-2">Email
                                        <input type="email" className="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div className="form-group mb-3 mt-2">Mobile Number
                                        <input type="number" className="form-control" placeholder="Enter phone number" />
                                    </div>
                                    <div className="form-group mb-3">Message
                                        <textarea name="message" className="form-control" placeholder="Enter Message"
                                            rows="3"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-success ezy__contact4-btn px-2 fs-5">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sellonecoyaan