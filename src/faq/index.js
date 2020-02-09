import React, { Fragment } from 'react'
class FAQ extends React.Component {
  render() {
    return (
      <Fragment>
      <section class="page-title bg-2">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <div class="block">
                  <h1>FAQ</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, totam.</p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="faq section-sm ">
      <div class="container">
         <div class="col-md-6 mt-30" style={{ 'padding-right' : '5%'}} >
            <h2 class="text-center">Future Key FAQ</h2>
            <div class="row">
               <h4>How does pricing work on Future Key?</h4>
               <p>The Guru of the course determines the list price of the course. In addition, both Guru’s and Future Key can offer discounts on courses at anytime. Once you have purchased a course, you are able to learn your course.</p>
            </div>
            <div class="row">
               <h4>Do I have to pay taxes when I purchase a course?</h4>
               <p>Students who reside in nations that charge VAT (Value Added Tax) or GST (Goods & Services Tax) may be required to pay this tax when they purchase a Future Key course.</p>
            </div>
            <div class="row">
               <h4>My certificate has my account’s username on it, instead of my real name. How can I change it?</h4>
               <p>Certificates of completion are generated using whatever name you entered when you created your Future Key account. For more details please contact Support Team.</p>
            </div>
            <div class="row">
               <h4>Does Future Key offer promotions on courses?</h4>
               <p>Yes! We frequently run promotions that offer courses at great, low prices! If you want to be alerted of our promotions, please make sure you’re subscribed to our promotional emails.</p>
            </div>
            <div class="row">
               <h4>What if I don’t like a course I purchased?</h4>
               <p>We want you to be satisfied, so if you're not happy with a course, you can even request to change you expect in course.</p>
            </div>
            <div class="row">
               <h4>Still have questions?</h4>
               <p>Contact our support team and we’ll be happy to answer your questions.</p>
            </div>
         </div>
         <div class="col-md-6 mt-30" style={{ 'padding-right': '5%'}}>
            <h2 class="text-center">Guru FAQ</h2>
            <div class="row">
               <h4>Do I have to pay any fees in order to become a Guru?</h4>
               <p>There is no fee to be A Guru on Future Key. Gurus are paid according to a revenue share model.</p>
            </div>
            <div class="row">
               <h4>How will I get paid?</h4>
               <p>Guru can connect a PayPal or PhonePe/Google Pay account to their Future Key account. You are paid on a monthly basis.</p>
            </div>
            <div class="row">
               <h4>Are there any requirements that my course must meet?</h4>
               <p>Yes. Courses must have at least 30 minutes of video content and at least 5 lectures or learning modules.<br />
                  In order to ensure that students have great learning experiences, we also have a Quality Review Process that every course goes through.
               </p>
            </div>
            <div class="row">
               <h4>What approval do I need to get started?</h4>
               <p>No approval is needed to get started. You can start creating your course via this link, Before your course is published on our platform it will need to meet our course minimum requirements.</p>
            </div>
            <div class="row">
               <h4>Can I teach a course in this language?</h4>
               <p>You can teach a course in any language of your choosing.</p>
            </div>
         </div>
      </div>
   </section>
   </Fragment>
    )
  }
}
export default FAQ;