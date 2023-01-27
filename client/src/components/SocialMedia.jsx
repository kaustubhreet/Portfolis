import React from 'react';
import {  BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {

  function handlePageChange() {
    window.location.href="https://github.com/kaustubhreet"
  }
  //links for linkedin
  function handleLinkedinChange() {
    window.location.href="https://www.linkedin.com/in/kaustubh-reet-8679b1191/"
  }

  //links for instagram
  function handleInstaChange(){
    window.location.href="https://www.instagram.com/kaustubh_reet/"
  }

return (
  <div className="app__social">
     <div>
     
       < BsGithub onClick={handlePageChange} />
      
    </div>
    <div>
      < BsLinkedin onClick={handleLinkedinChange}/>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram onClick={handleInstaChange} />
    </div>
  </div>
)};

export default SocialMedia;