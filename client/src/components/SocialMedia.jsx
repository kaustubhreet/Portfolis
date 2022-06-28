import React from 'react';
import {  BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
     <div>
     <a href to="https://github.com/kaustubhreet">  < BsGithub>
      </BsGithub></a>
    </div>
    <div>
      < BsLinkedin/>
    </div>
    <div>
      <FaFacebookF />
    </div>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;