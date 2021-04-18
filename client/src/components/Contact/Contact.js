import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import './styles.scss'
import axios from 'axios';

export default function Contact() {
  const [slideUpclass, setSlideUpClass] = useState(false)
  const [mail, setMail] = useState(false)
  const [phone, setPhone] = useState(false)
  const [submit, setSubmit] = useState(false)
  const [message, setMessage] = useState({
    date: "",
    email: "",
    message: ""
  })


  const clickToMail = () => {
    setMail(true)
    setPhone(false);
    setSubmit(false)
  }


  const clickToPhone = () => {
    setPhone(true);
    setMail(false)
    setSubmit(false)
  }


  const sendMail = () => {
    setMail(false)
    setSubmit(true)
    setMessage({...message, date: new Date()})
    console.log(message)
    axios.post(`http://localhost:5000/admin/new-message`,  {message})
      .then(res => {
        console.log(res);
      })
    
  }

  return (
      <div className={slideUpclass ? "page slideUp" : "page" }> 
      <div className="nav">
         <Nav setSlideUpClass={setSlideUpClass}/>
      </div>
      <div className="content">
        <div className="headline">
          <h1>CONTACT</h1>
        </div>
        <div className="contactIcons">
            <h3>
              <i className="far fa-envelope" onClick={() => clickToMail()}></i>
              <a href="https://github.com/orisco" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/orisayag/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <i className="fas fa-phone" onClick={() => clickToPhone()}></i>
            </h3>  
        </div>
        {mail ? <div className="form">
              <input type="text" placeholder="Your email" onChange={(e) => setMessage({...message, email: e.target.value})}></input>
              <input type="text" placeholder="Your message" onChange={(e) => setMessage({...message, message: e.target.value})}></input>
              <h3 onClick={() => sendMail()}>send</h3>
        </div> : ""}

        {submit ? <div className="message"><h1>message sent.</h1></div>
                  : ""}
        
        {phone ? <div className="form">
              <h1>050-792-7930</h1>
        </div> : ""}
       </div>
      </div>

  )
}
