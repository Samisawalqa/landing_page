export default function(){
    return(
        <section id="courses" className="courses section">


          <div className="container section-title" data-aos="fade-up">
            <h2>Courses</h2>
            <p>Popular Courses</p>
          </div>

          <div className="container">

            <div className="row">

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="course-item">
                  <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Web Development</p>
                      <p className="price">$169</p>
                    </div>

                    <h3><a href="course-details.html">Website Design</a></h3>
                    <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img src="assets/img/trainers/trainer-1-2.jpg" className="img-fluid" alt="" />
                        <a href="" className="trainer-link">Antonio</a>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;50
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;65
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="course-item">
                  <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Marketing</p>
                      <p className="price">$250</p>
                    </div>

                    <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                    <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img src="assets/img/trainers/trainer-2-2.jpg" className="img-fluid" alt="" />
                        <a href="" className="trainer-link">Lana</a>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;35
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;42
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="course-item">
                  <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
                  <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <p className="category">Content</p>
                      <p className="price">$180</p>
                    </div>

                    <h3><a href="course-details.html">Copywriting</a></h3>
                    <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                      <div className="trainer-profile d-flex align-items-center">
                        <img src="assets/img/trainers/trainer-3-2.jpg" className="img-fluid" alt="" />
                        <a href="" className="trainer-link">Brandon</a>
                      </div>
                      <div className="trainer-rank d-flex align-items-center">
                        <i className="bi bi-person user-icon"></i>&nbsp;20
                        &nbsp;&nbsp;
                        <i className="bi bi-heart heart-icon"></i>&nbsp;85
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </section>)
}