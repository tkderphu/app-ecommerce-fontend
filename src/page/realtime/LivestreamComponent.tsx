function LiveStreamPageComponent() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">LiveStreamPro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link" href="#live">Live Stream</a></li>
                            <li className="nav-item"><a className="nav-link" href="#products">Products</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id="live" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Live Stream</h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="ratio ratio-16x9">
                                <iframe src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" frameBorder={0} allowFullScreen={true}></iframe>
                            </div>
                            <p className="text-center mt-3">Join our live stream to see our latest products in action!</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="products" className="py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Featured Products</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 1"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Product 1</h5>
                                        <p className="card-text">Description of Product 1.</p>
                                        <button className="btn btn-primary w-100">Buy Now</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 2"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Product 2</h5>
                                        <p className="card-text">Description of Product 2.</p>
                                        <button className="btn btn-primary w-100">Buy Now</button>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow-sm">
                                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Product 3"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Product 3</h5>
                                        <p className="card-text">Description of Product 3.</p>
                                        <button className="btn btn-primary w-100">Buy Now</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                </div>
                                <div className="mb-3">htmlFor=
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows={4} placeholder="Your Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2025 LiveStreamPro. All rights reserved.</p>
            </footer>
        </div>
    )
}
export default LiveStreamPageComponent