import React, {Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';

function ToRenderEverything(){
    useEffect( () => {
        console.log("on-load");
    }, []);

    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                <div className="container"><a className="navbar-brand js-scroll-trigger" href="#page-top">START BOOTSTRAP</a>
                    <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#portfolio">PORTFOLIO</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#contact">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt=""/>
                    
                    <h1 className="masthead-heading mb-0">START BOOTSTRAP</h1>
                    
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="pre-wrap masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
                    </div>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/cabin.png" alt="Log Cabin"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/cake.png" alt="Tasty Cake"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <Link to="/vz" className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </Link>
                                <img className="img-fluid" src="assets/img/portfolio/circus.png" alt="Circus Tent"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/game.png" alt="Controller"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/safe.png" alt="Locked Safe"/>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div><img className="img-fluid" src="assets/img/portfolio/submarine.png" alt="Submarine"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <div className="portfolio-modal modal fade" id="portfolioModal0"  role="dialog" aria-labelledby="#portfolioModal0Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Log Cabin</h2>
                                        
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cabin.png" alt="Log Cabin"/>
                                        
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal1" role="dialog" aria-labelledby="#portfolioModal1Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Tasty Cake</h2>
                                        
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/cake.png" alt="Tasty Cake"/>
                                        
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal2" role="dialog" aria-labelledby="#portfolioModal2Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Circus Tent</h2>
                                        
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/circus.png" alt="Circus Tent"/>
                                        
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal3" role="dialog" aria-labelledby="#portfolioModal3Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Controller</h2>
                                        
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/game.png" alt="Controller"/>
                                        
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal4" role="dialog" aria-labelledby="#portfolioModal4Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Locked Safe</h2>
                                        
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/safe.png" alt="Locked Safe"/>
                                        
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal5" role="dialog" aria-labelledby="#portfolioModal5Label" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
                        <div className="modal-body text-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        
                                        <h2 className="portfolio-modal-title text-secondary mb-0">Submarine</h2>
                                        
                                        <div className="divider-custom">
                                            <div className="divider-custom-line"></div>
                                            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                            <div className="divider-custom-line"></div>
                                        </div>
                                        <img className="img-fluid rounded mb-5" src="assets/img/portfolio/submarine.png" alt="Submarine"/>
                                        
                                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        <button className="btn btn-primary" href="#" data-dismiss="modal"><i className="fas fa-times fa-fw"></i>Close Window</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                    
                    <div className="text-center">
                        <h2 className="page-section-heading d-inline-block text-white">ABOUT</h2>
                    </div>
                    
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4 ml-auto">
                            <p className="pre-wrap lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-lg-4 mr-auto">
                            <p className="pre-wrap lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                    
                    <div className="text-center">
                        <h2 className="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                    </div>
                    
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-lg-4">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-contact mb-3"><i className="fas fa-mobile-alt"></i></div>
                                <div className="text-muted">Phone</div>
                                <div className="lead font-weight-bold">(555) 555-5555</div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-contact mb-3"><i className="far fa-envelope"></i></div>
                                <div className="text-muted">Email</div><a className="lead font-weight-bold" href="mailto:name@example.com">name@example.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="mb-4">LOCATION</h4>
                            <p className="pre-wrap lead mb-0">2215 John Daniel Drive
    Clark, MO 65243</p>
                        </div>
                        
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="mb-4">AROUND THE WEB</h4><a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/StartBootstrap"><i className="fab fa-fw fa-facebook-f"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.twitter.com/sbootstrap"><i className="fab fa-fw fa-twitter"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/startbootstrap"><i className="fab fa-fw fa-linkedin-in"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://www.dribble.com/startbootstrap"><i className="fab fa-fw fa-dribbble"></i></a>
                        </div>
                        
                        <div className="col-lg-4">
                            <h4 className="mb-4">ABOUT FREELANCER</h4>
                            <p className="pre-wrap lead mb-0">Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default ToRenderEverything;