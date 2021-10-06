import React from 'react'
import beetle from '../images/portfolio/beetle.jpg'
import liberty from '../images/portfolio/liberty.jpg'
import clouds from '../images/portfolio/clouds.jpg'
import shutterbug from '../images/portfolio/shutterbug.jpg'

const PortfolioPage = () => (
    <section id="portfolio">
        <div class="row section-intro">
            <div class="col-twelve">
                <h5>Portfolio</h5>
                <h1>Check Out Some of My Works.</h1>
                <p class="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>
            </div>   		
        </div>   
        <div class="row portfolio-content">
            <div class="col-twelve">
                <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
                    <div class="bgrid folio-item">
                        <div class="item-wrap">
                            <img src={liberty} alt="Liberty"/>
                            <a href="#" class="overlay">	                  	           
                                <div class="folio-item-table">
                                    <div class="folio-item-cell">
                                        <h3 class="folio-title">Liberty</h3>	     					    
                                        <span class="folio-types">Graphic Design</span>
                                    </div>	                      	
                                </div>                    
                            </a>
                        </div>	               
                    </div>  
                    <div class="bgrid folio-item">
                        <div class="item-wrap">
                            <img src={shutterbug} alt="Shutterbug"/>
                            <a href="#" class="overlay">              		                  
                                <div class="folio-item-table">
                                    <div class="folio-item-cell">
                                        <h3 class="folio-title">Shutterbug</h3>	     					    
                                        <span class="folio-types">Web Design</span>		     		
                                    </div> 	                      	
                                </div>                    
                            </a>
                        </div>
                    </div>  
                    <div class="bgrid folio-item">
                        <div class="item-wrap">
                            <img src={clouds} alt="Clouds"/>
                            <a href="#" class="overlay">             		                  
                                <div class="folio-item-table">
                                    <div class="folio-item-cell">
                                        <h3 class="folio-title">Clouds</h3>	     					    
                                        <span class="folio-types">Web Design</span>		     		
                                    </div> 	                      	
                                </div>                    
                            </a>
                        </div>
                    </div>  
                    <div class="bgrid folio-item">
                        <div class="item-wrap">
                        <img src={beetle} alt="Beetle"/>
                            <a href="#" class="overlay">                  	                 
                            <div class="folio-item-table">
                                <div class="folio-item-cell">
                                <h3 class="folio-title">Beetle</h3>	     					    
                                <span class="folio-types">
                                    Branding
                                </span>		     		
                            </div>  	                      	
                            </div>                    
                            </a>
                        </div>
                    </div>   
                </div>   
            </div>      
        </div>   
    </section>
);

export default PortfolioPage;