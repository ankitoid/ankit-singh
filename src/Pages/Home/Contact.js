import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e)=>{
    e.preventDefault();
    let emailPromise = emailjs.sendForm(
      "service_x25rzfa",
      'template_x2xtfok',
      form.current,
      'yeSdKlO6GGDuQLbi9'
    )

    toast.promise(emailPromise , {
      loading:"Sending...",
      success: <b>Sent successfully</b>,
      error: <b>Failed</b>
    })
  }
  return (
    <section id='Contact' className='contact--section'>
      <Toaster position='top-center'  reverseOrder={false} />
        <div>
            {/* <p className='sub--title'>Get In Touch</p> */}
            <h2>Contact Me</h2>
            {/* <p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis provident corrupti!</p> */}
            <p className='text-lg'>Please complete the form. I would love to connect and assist you.</p>
        </div>
        <form className="contact--form--container" ref={form} onSubmit={sendEmail}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        {/* <label htmlFor="choode-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md">
            <option>Select One...</option>
            <option>Item 1</option>
            <option>Item 2</option>
            <option>Item 3</option>
          </select>
        </label> */}
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name='message'
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox"  />
          <span className="text-sm">I accept  terms & conditions</span>
        </label>
        <div>
          <input type="submit" className="btn btn-primary contact--form--btn" value="Submit" />
          {/* <button className="btn btn-primary contact--form--btn" onClick={}>Submit</button> */}
        </div>
      </form>
    </section>
  )
}

export default Contact
