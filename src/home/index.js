import React, { Fragment } from 'react';
import './theme/css/home.css';
import './theme/css/landing-page.css';
import "./theme/css/style.css";
import "./theme/plugins/Ionicons/css/ionicons.min.css";
import "./theme/plugins/animate-css/animate.css";
import "./theme/plugins/magnific-popup/magnific-popup.css";
import image1 from "../src/theme/images/wrapper-img.png";



function Home() {
  return (
    <Fragment>
               <section class="slider">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <div class="block">
                              <h1 class="animated fadeInUp">
                                 EXPERIENCE THE VIRTUAL LEARNING
               
                              </h1>
                              <h2 class="animated fadeInUp">BRING LEARNING TO PEOPLE</h2>
                              <a href="https://themefisher.com/free-bootstrap-templates/" target="_blank" class="btn btn-main animated fadeInUp" >Go to Courses</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               
               <section class="service">
                  <div class="container">
                     <div class="row">
                        <div class="section-title">
                           <h2>How Future Key Works</h2>
                           <p>It's time to build future and make some big decisions</p>
                        </div>
                     </div>
                     <div class="row ">
                        <div class="col-sm-6 col-md-3">
                           <div class="service-item">
                              <i class="icon ion-coffee"></i>
                              <h4>Aim</h4>
                              <p>Future Key Provides low cost education with mission to give world class education to each and every student. We believe to empower the new generation.</p>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                           <div class="service-item">
                              <i class="ion-compass"></i>
                              <h4>Virtual Learning</h4>
                              <p>Students learn at their own pace. First we have covered every topic in detail. We will help student to grow faster with our virtual learning experience.</p>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                           <div class="service-item">
                              <i class="ion-planet"></i>
                              <h4>Empower Students</h4>
                              <p>With Future Key, students can learn industry oriented courses to enhance their skills. We encourage each and every student to build better world.</p>
                           </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                           <div class="service-item">
                              <i class="ion-headphone"></i>
                              <h4>Customer Support</h4>
                              <p>Customer Service is our top most priority.We guarantee your satisfaction and High-Quality Content.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section class="feature bg-2">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-6 col-md-offset-6">
                           <h2 class="section-subtitle">Learn for Skill Development</h2>
                           <p>Build a deep, solid understanding in Engineering courses and more.</p>
                           <h2 class="section-subtitle">Enjoy Your Learning Everywhere</h2>
                           <p>Stream courses on your phone, tablet and laptop. Adaptive quizes help students master each course. Recommended videos help student to gain more knowledge and enabling long lasting learning.</p>
               
                           <a href="#" class="btn btn-view-works">Start My Course</a>
                        </div>
                     </div>
                  </div>
               </section>
               
               <section class="about section">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-7 col-sm-12">
                           <div class="block">
                              <div class="section-title">
                                 <h2>Everyone Deserves Chance to Make a Future</h2>
                                 <p>Across the earth, 775 million people are illitrate with another 152 million children set to follow in their footsteps because they aren't attending school. We are aiming to deliver education they need and we need your help to change the life of everyone. Teach at Future Key and help them to build the future they deserve.!</p>
                              </div>
                              <a href="#" class="btn btn-view-works" >Teach on Future Key</a>
                           </div>
                        </div>
               
                        <div class="col-md-5 col-sm-12">
                           <div class="block">
                              <img src={image1} alt="Img" />
                           </div>
                        </div>
               
                     </div>
                  </div>
               </section>
               <section class="about-feature bg-dark section dark-service">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <div class="title">
                              <h2>We offer Take your Future to the next level</h2>
                           </div>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-4">
                           <div class="service-item">
                              <i class="ion-ios-color-filter-outline"></i>
                              <h4>Online Courses</h4>
                              <p>We are providing online engineering courses in low cost which will help student to build a perfect platform for their future growth.</p>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="service-item">
                              <i class="ion-ios-unlocked-outline"></i>
                              <h4>Innovation</h4>
                              <p>We provide a platform to a people who want to showcase their innovation or Innovative Projects to the Globe</p>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="service-item">
                              <i class="ion-ios-mic-outline"></i>
                              <h4>Teach and Earn</h4>
                              <p>We developed a platform where people can earn money by uploading their courses<br/> for lifetime.</p>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="service-item">
                              <i class="ion-ios-lightbulb-outline"></i>
                              <h4>Course Membership</h4>
                              <p>We offer courses from our Experts to institutes.</p>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="service-item">
                              <i class="icon ion-coffee"></i>
                              <h4>Blog</h4>
                              <p>We provide Live Training Sessions across the globe People can connect and have practical Experience.</p>
                           </div>
                        </div>
                        <div class="col-md-4">
                           <div class="service-item">
                              <i class="ion-ios-game-controller-b-outline"></i>
                              <h4>Compiler</h4>
                              <p>We are providing platform to get people aware of Software and Coding.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section class="service-list section bg-gray">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <div class="section-title text-center">
                              <h2>About</h2>
                           </div>
                           <p>Future is working towards an exciting mission, and we care a lot about how we achieve it. Our values guide how we do business - how we interact internally as well as with millions of Gurus, students and partners.
                           </p>
                           <p>So, what makes life special on Future Key?</p>
                           <p>We are mission-driven, result-driven.</p>
                           <p>We work in a purpose-driven company that places a high value on results, so we can give development resources more and more people to learn.</p>
                           <p>Our teams make decisions based on research and analysis - not instinct or perception - and we carefully measure their effects on students, Gurus, organizations and our own businesses.</p>
                           <p>We are always learning.</p>
                           <p>With the mission to improve life through learning, it is no surprise that we place great emphasis on the role of learning in our own lives and work. We understand that learning is not a sign of hindrance or weakness in our work - it is found for our development, both as individuals and as a business.</p>
                           <p>Individuals make great contributions, but it takes cooperation, compromise and kindness to build a great business. We succeed as a team, leave our ego at the door, and are proud of our shared efforts.
                           </p>
                           <p>Our openness allows us to better serve the diverse people who use Future Key worldwide.</p>
                           <p>Future key provides virtual learning experience that can help each person to understand each topic in detailed manner. Future Key provides people a platform where they can learn, engage, teach and excited to create their own path.</p>
                           <p>We bring the best Guru’s across the globe with good content for skill development learning experience to each and every person. We craft learning journeys for every student that addresses their unique needs. We believe spreading the education everywhere.</p>
                           <p>At Future key, we leverage technology to merge best practices like use of videos, engaging content and quizzes with the best teachers so that every person across the globe has access to the best learning experience. We at Future Key work towards offering students the best learning experience with affordable pricing.</p>
                        </div>
                     </div>
                  </div>
               </section>
               
               <section class="call-to-action bg-1 section-sm overly">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <div class="block">
                              <h2>We design delightful digital experiences.</h2>
                              <p>Read more about what we do and our philosophy of design. Judge for yourself The work and results <br/> we’ve achieved for other clients, and meet our highly experienced Team who just love to design.</p>
                              <a class="btn btn-main btn-solid-border" href="#" >Tell Us Your Story</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               
               {/* <section class="testimonial">
                  <div class="container">
                     <div class="row">
                        <div class="section-title text-center">
                           <h2>Join Future key today</h2>
                           <p>You will have a great learning experience that will deliver quality results for your career</p>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-6">
                           <div class="block">
                              <ul class="counter-box clearfix">
                                 <li>
                                    <div class="counter-item">
                                       <i class="ion-ios-chatboxes-outline"></i>
                                       <h4 class="count" data-count="99">0</h4>
                                       <span>Online Courses</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="counter-item">
                                       <i class="ion-ios-glasses-outline"></i>
                                       <h4 class="count" data-count="45">0</h4>
                                       <span>Institutes Enrollments</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="counter-item">
                                       <i class="ion-ios-compose-outline"></i>
                                       <h4 class="count" data-count="125">0</h4>
                                       <span>Students Enrollments</span>
                                    </div>
                                 </li>
                                 <li>
                                    <div class="counter-item">
                                       <i class="ion-ios-timer-outline"></i>
                                       <h4 class="count" data-count="200">0</h4>
                                       <span>Registered Students</span>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div class="col-md-5 col-md-offset-1">
                          sdjsdjasdhjsadgasjidahsdbgasydghasduy
                        </div>
                     </div>
                  </div>
               </section> */}
               {/* plugins/jQuery/jquery.min.js */}
               
              
               </Fragment>
  );
}

export default Home;
