import React, { useRef} from 'react';
import {MdEmail,MdPhoneInTalk,MdLocationOn} from "react-icons/md"
import {SiLinkedin,SiInstagram,SiGithub} from "react-icons/si"

const Contact = () => {
  return (
    <div className='contact' id='contact'>
    <h1 className='heading'>Contact Us</h1>
    <div className='contact_content'>
    <form  className='contact-from'>
      <input type="text" name='name' className="contact__form-input" placeholder="Name"/>
      <input type="email" name='email' className="contact__form-input" placeholder="Email-Id"/>
      <textarea name="project" className="contact__form-input" placeholder="Project Expalnation"></textarea>
      <button>Send</button>
    </form>
    <div className='socialMedia'>
      <div className='socialMedia_item'>
        <MdEmail/>
        <p>usaidajmal274@gmail.com</p>
      </div>
      <div className='socialMedia_item'>
        <MdPhoneInTalk/>
        <p>7306209999</p>
      </div>
      <div className='socialMedia_item'>
        <MdLocationOn/>
        <p>Manjeri , Kerala</p>
      </div>
       
      <div className='socialMedia_personal'>
        <a href=''><SiLinkedin/></a>
        <a href=''><SiInstagram/></a>
        <a href=''><SiGithub/></a>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Contact
