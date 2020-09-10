import React, { Component } from 'react';
import Modal from 'react-modal';
// import axios from 'axios';
import Hero from '../components/Hero';
import emailjs from 'emailjs-com';
// import{ init } from 'emailjs-com';
// init("user_iYjFkA2q6ALi6rg6uS4dF");

Modal.setAppElement('div');

const customStyles = {
    content: {
        top: 'calc(50% + 27.5px)',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '35%',
        minWidth: '250px',
        height: '25%',
        minHeight: '250px',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: "0",
        borderRadius: "3px",
        border: "none"
    }
};

// function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

export default class ContactUs extends Component {
    
  state = {
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    subject: '',
    subjectError: '',
    message: '',
    messageError: '',

    resData: '',

    modalIsOpen: false
}

change = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

closeModal = () => {
    this.setState({
        modalIsOpen: false
    });
}


onSubmit = (e) => {
    e.preventDefault();
    e.persist();

    if (this.state.name === '') {
        this.setState({
            nameError: 'Please provide your name'
        })
    } else {
        this.setState({
            nameError: ''
        })
    }

    if (this.state.email === '') {
        this.setState({
            emailError: 'Please provide an email address'
        })
    } else if (this.state.email === /^((?!@).)*$/ || this.state.email.indexOf('.') === -1) {
        this.setState({
            emailError: 'Please provide a valid email address'
        })
    } else {
        this.setState({
            emailError: ''
        })
    }

    if (this.state.subject === '') {
        this.setState({
            subjectError: 'Please provide a subject message'
        });
    } else {
        this.setState({
            subjectError: ''
        });
    }

    if (this.state.message === '') {
        this.setState({
            messageError: 'Please leave a message'
        })
    } else {
        this.setState({
            messageError: ''
        })
    }
    console.log("Aishwarya Email12");

    setTimeout(() => {
        console.log("Aishwarya Email1");
        if (this.state.nameError === '' && this.state.emailError === '' && this.state.subjectError === '' && this.state.messageError === '') {
            console.log("Aishwarya Email if consition");
            emailjs.sendForm('service_73mwiyv', 'template_k32h9gn', 'contact-form', 'user_iYjFkA2q6ALi6rg6uS4dF')
            .then((result) => {
                console.log("Aishwarya Email");
                console.log(result.text);
                this.setState({
                    resData: result.data
                });

                this.setState({
                    modalIsOpen: true
                });

                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })
            }, (error) => {
                console.log("Aishwarya Email Error");
                console.log(error.text);
            });
            // axios.post('/send-email', {
            //     name: this.state.name,
            //     email: this.state.email,
            //     subject: this.state.subject,
            //     message: this.state.message
            // }, {
            //         headers: {
            //             'content-type': 'application/json',
            //         },
            //     })
            //     .then(response => {
            //         this.setState({
            //             resData: response.data
            //         });

            //         this.setState({
            //             modalIsOpen: true
            //         });

            //         this.setState({
            //             name: '',
            //             email: '',
            //             subject: '',
            //             message: '',
            //         })

            //     })
            //     .catch(function (error) {
            //         console.log(error.response);
            //     })
        } else {
            this.setState({
                resData: 'Oops! Something went wrong!'
            });
        }
    }, 10);

}
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          {/* <div className="row section-head">
            <div className="ten columns">
              <p className="lead"> */}
              {/* </p>
            </div>
          </div> */}
          <table>
            <tr>
              
              <td width="50%">

              
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">

                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                Feel free to contact me for any work or suggestions below
                

                <h4>LinkedIn : <a href={resumeData.linkedinId} target="_blank">
                  {resumeData.linkedinId}</a><br/>
                  Phone Number : <a href="tel:{resumeData.phoneNumber}">
                  +1 862-237-5676</a><br/>
                  Primary Email : <a href="mailto:{resumeData.emailid}">
                  sawant.ai@northeastern.edu</a><br/>
                  Secondary Email : <a href="mailto:{resumeData.gemail}">
                  aishwaryasawant697@gmail.com</a><br/> 
                  Address : {resumeData.address}
                </h4> 
                <div className="three columns">
                    <img className="contact-pic"  src="images/ContactPic.jpg" alt="" />
                </div>              
                </div>
            </aside>          
          </div>
                  
                  </td><td>
                <div className="row">
                <aside className="eigth columns footer-widgets">
                <div className="widget">

                <div id="contactForm">
                <Hero
                    header="Let's Get In Touch"
                    subHeader="Tell me about yourself and what I can do for you."
                    bg="contact-bg"
                />
                <div className="full-width-row cta-form--bg">
                    <div className="row-container">
                        <form className="cta-form" id="contact-form">
                            <label className="cta-form__label" htmlFor="name">Name</label>
                            <input
                                name="name"
                                value={this.state.name}
                                onChange={e => this.change(e)}
                                type="text"
                                className="cta-form__input"
                                // id="name"
                                style={{ margin: `${this.state.nameError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.nameError}</p>
                            <label className="cta-form__label" htmlFor="email">Email</label>
                            <input
                                name="email"
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                type="text"
                                className="cta-form__input"
                                // id="email"
                                style={{ margin: `${this.state.emailError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.emailError}</p>
                            <label className="cta-form__label" htmlFor="subject">Subject</label>
                            <input
                                name="subject"
                                value={this.state.subject}
                                onChange={e => this.change(e)}
                                type="text"
                                className="cta-form__input"
                                // id="subject"
                                style={{ margin: `${this.state.subjectError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.subjectError}</p>
                            <label className="cta-form__label" htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                onChange={e => this.change(e)}
                                value={this.state.message}
                                className="cta-form__textarea"
                                // id="message"
                                style={{ margin: `${this.state.messageError.length > 0 ? "0" : ''}` }}
                            />
                            <p className="form-error">{this.state.messageError}</p>
                            <div align="center">
                                {/* <input type="submit" className="btn btn--white" value="Send Message"></input></div> */}
                            <button 
                                className="btn btn--white"
                                onClick={e => this.onSubmit(e)}
                            >
                               Send
                            </button> </div>
                        </form>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    contentLabel="Example Modal"
                    style={customStyles}
                    closeTimeoutMS={150}
                    overlayClassName="formOverlay"
                >
                    <div className="modalHeader-container">
                        <span className="modalHeader-container__text">Your message was sent!</span>
                        <i className="fa fa-times modalHeader-container__close-icon" aria-hidden="true" onClick={this.closeModal}></i>

                    </div>

                    <div className="modal-body">
                        <p className="modal-body__text">{this.state.resData}</p>
                        <p>I'll be in touch with you soon.</p>
                    </div>

                    <button className="btn btn--white" style={{
                        textAlign: "center", margin: "10px auto",
                        display: "block"
                    }} onClick={this.closeModal}>Close</button>
                </Modal>
            </div>
              
              </div>
            </aside>          
          </div>     
          </td>
            </tr>
          </table>
        </section>
        );
  }
}