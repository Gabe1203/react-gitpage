import React from 'react';


const HomePage = () => (
    <section id="intro">   
        <div class="intro-overlay"></div>	
        <div class="intro-content">
            <div class="row">
                <div class="col-twelve">
                    <h5>Hello, World.</h5>
                    <h1>I'm Gabe Valladares.</h1>
                    <p class="intro-position">
                        <span>Data</span>
                        <span>Software</span> 
                        <span>Fullstack</span>
                    </p>
                    <a class="waves-effect grey darken-1 btn-small" href="/about" title="">More About Me</a>
                </div>  
            </div>   		 		
        </div>   
        <ul class="intro-social">        
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-behance"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>        	
    </section>
);

export default HomePage