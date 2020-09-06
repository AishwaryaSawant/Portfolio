import React, { Component } from 'react';


// function openRepoinNewTab(url) {
//   var win = window.open(url, "_blank");
//   win.focus();
// }

export default class Porfolio extends Component {
  

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <a href={`${item.url}`} target="_blank" rel="noopener noreferrer">

                <div className="columns portfolio-item">
                  <div className="item-wrap">
                      <img src={`${item.imgurl}`} style={{height:'300px',width:'350px'}}/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                  </div>
                </div>
                </a>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}