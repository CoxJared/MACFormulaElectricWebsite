import React, { Component } from 'react'
import './InstagramPosts.scss'

import post1 from './../../img/instagram/post1.png';
import post2 from './../../img/instagram/post2.JPG';
import post3 from './../../img/instagram/post3.png';


import InstagramEmbed from 'react-instagram-embed';

export class InstagramPosts extends Component {
  render() {
    window.addEventListener('scroll', function (event) {
      try{
        
        var bounding = document.querySelector("#instagram-container").getBoundingClientRect();

        let halfHeight = 100
        if (
          bounding.top >= 0 &&
          bounding.bottom - halfHeight <= (window.innerHeight || document.documentElement.clientHeight) ) {  

            //Show Elements
            document.getElementById("instagram-container").style.opacity=(1);
        }
      }catch(err){
        console.log(err)}
    })

    return (
      <div id="instagram-container">
        <a target="_blank" href="https://www.instagram.com/macformulaelectric/?hl=en" style={{textDecoration:'none'}}>
        <h1 className="instagram-title">@macformulaelectric
        <div className="instagram-underline"/>
        </h1>
        
        </a>
        <div className="instagram-post-container">
          <a href="https://www.instagram.com/p/CBROzbWhKRs/" target="_blank">
            <div className="instagram-post">
            <img src={post1} className="instagram-image"></img>
            </div>
          </a>
          <a href="https://www.instagram.com/p/B_KfTbjhIJg/">
            <div className="instagram-post">
            <img src={post2} className="instagram-image"></img>
            </div>
          </a>
          <a href="https://www.instagram.com/p/B-sZwmGhxRu/" target="_blank">
            <div className="instagram-post">
            <img src={post3} className="instagram-image"></img>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

export default InstagramPosts
