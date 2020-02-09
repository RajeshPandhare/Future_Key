import React, { Fragment } from 'react'
class Register extends React.Component {
  render() {
    return (
      <Fragment>
      <section class="page-title bg-2">
                  <div class="container">
                     <div class="row">
                        <div class="col-md-12">
                           <div class="block">
                              <h1>Register</h1>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ex!</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </section>
               <section class="buy-pro" >
                  <div class="container">
                     <div class="row">
                        <form id="contact-form">
                           <div class="col-md-6  col-sm-12">
                              <h1>Register as Guru</h1>
                              <div class="block">
                                 <div class="form-group">
                                    <input name="user_name" type="text" class="form-control" placeholder="Your First Name" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_name" type="text" class="form-control" placeholder="Your Last Name" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_email" type="text" class="form-control" placeholder="Email Address" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_mobile" type="text" class="form-control" placeholder="mobile" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_mobile" type="password" class="form-control" placeholder="Password" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_mobile" type="password" class="form-control" placeholder="confirm Password" />
                                 </div>
                              </div>
                              <button class="btn btn-default" type="submit">Submit</button>
                           </div>
                        </form>
                        <form id="contact-form">
                           <div class="col-md-6  col-sm-12">
                              <h1>Register as User</h1>
                              <div class="block">
                                 <div class="form-group">
                                    <input name="user_name" type="text" class="form-control" placeholder="Your First Name" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_name" type="text" class="form-control" placeholder="Your Last Name" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_email" type="text" class="form-control" placeholder="Email Address" /> 
                                 </div>
                                 <div class="form-group">
                                    <input name="user_mobile" type="text" class="form-control" placeholder="mobile" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_mobile" type="password" class="form-control" placeholder="Password" />
                                 </div>
                                 <div class="form-group">
                                    <input name="user_mobile" type="password" class="form-control" placeholder="confirm Password" />
                                 </div>
                              </div>
                              <button class="btn btn-default" type="submit">Submit</button>
                           </div>
                        </form>
                     </div>
                  </div>
                  </section>
        </Fragment>
    )
  }
}
export default Register;