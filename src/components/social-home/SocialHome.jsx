import React from 'react'
import './socialHome.css'
import github from "../../assets/github.png";
import linkdin from "../../assets/linkdin.png";
import watsapp from "../../assets/watsapp.png";

const SocialHome = () => {
  return (
    <div className="social__home">
        <div className="social__home-icons">
        <a href="https://github.com/Hamzasohail123" className="social__home-icon" target="_blank">
<i className="uil uil-github "><img src={github}  width={30} alt="" /></i>
</a> 
<a href="https://www.linkedin.com/in/hamza-sohail-b637b4219/" className="social__home-icon" target="_blank"> 
<i className="uil uil-linkedin"><img src={linkdin}  width={30} alt="" /></i>
</a>
<a href="https://api.whatsapp.com/send?phone=923353381690" className="social__home-icon" target="_blank">
<i className="uil uil-whatsapp"><img src={watsapp} width={26} alt="" /></i> 
</a> 
        </div>



<div className='line'></div>
</div>
  )
}

export default SocialHome