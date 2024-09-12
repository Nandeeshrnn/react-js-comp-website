import React from 'react'
import Form from '../Forms/Form'
import './Contact.css'
import Gmap from '../Google Map/Gmap'
import Banner from '../Banner/Banner'

const Contact = () => {
  return (
    <>
    <Banner banHeader={'Contact Us'} />
    <div className='container-contact'>
      <div className='con-section'>
        <Form />
      </div>
      <div className='con-section para'>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iste quod porro, unde, architecto accusamus dolorum beatae maiores ducimus earum facilis, quos voluptatibus dignissimos sunt explicabo? Magnam, et accusantium saepe vero maiores vel aperiam nesciunt iure asperiores repellendus velit nam deleniti ullam veniam pariatur ea ipsum. Nemo deleniti recusandae suscipit deserunt. Rerum, velit atque. Praesentium eveniet dignissimos, nostrum inventore earum tenetur aperiam nulla, cumque quae odio quibusdam! Quisquam aliquam, aliquid, nobis beatae optio doloremque culpa ullam, sapiente fuga saepe asperiores explicabo magnam nostrum ipsam perferendis doloribus quod porro? Fuga amet officiis aliquam blanditiis animi nam neque perspiciatis, illo temporibus soluta.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore iste quod porro, unde, architecto accusamus dolorum beatae maiores ducimus earum facilis, quos voluptatibus dignissimos sunt explicabo? Magnam, et accusantium saepe vero maiores vel aperiam nesciunt iure asperiores repellendus velit nam deleniti ullam veniam pariatur ea ipsum. Nemo deleniti recusandae suscipit deserunt. Rerum, velit atque. Praesentium eveniet dignissimos, nostrum inventore earum tenetur aperiam nulla, cumque quae odio quibusdam! Quisquam aliquam, aliquid, nobis beatae optio doloremque culpa ullam, sapiente fuga saepe asperiores explicabo magnam nostrum ipsam perferendis doloribus quod porro? Fuga amet officiis aliquam blanditiis animi nam neque perspiciatis, illo temporibus soluta.</p>
      </div>
     
    </div>
     <div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.814490490914!2d77.57047787359048!3d13.04747721321323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae177803929401%3A0x4271eb8a6ad158be!2sAaruhi%20Institute!5e0!3m2!1sen!2sin!4v1724924146980!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" Loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
     </div>
     </>
  )
}
export default Contact