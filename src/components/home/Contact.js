import Avatar from "../../assets/img/layout/Avatar.png"

function Contact() {
  return (
    <section className="contact">
        <div className="form">
          <img src={Avatar} alt="" />
            <h2 className='centered'>Do you want to learn more?</h2>
            <p className="subheading centered">Feel free to contact us</p>
            <div className="form-inner">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='Type your name' />
                <label htmlFor="email">Email</label>
                <input type="text" id='email' placeholder='Type your email' />
                <label htmlFor="message">Message</label>
                <textarea  id="message"  rows="6" placeholder='Type your message'></textarea>
                
                <button className="btn">Submit</button>
            </div>
        </div>
    </section>
  )
}

export default Contact