import React, { Component } from 'react';
// import {  FormGroup, Input, Button} from 'reactstrap';
import './email.css';
class Email extends Component{
    constructor(){
        super()
        this.state={
            firstName:"",
            lastName:"",
            email:"",
            message:"",
            sendButton: <button 
            type="submit"
            className="submit-button"
            disabled>
                Send
            </button>
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})

        if(this.state.firstName !== "" && this.state.lastName !== "" && this.state.email !== "" && this.state.message !== "")
        {
            this.setState({sendButton: <button 
                type="submit"
                className="submit-button">
                    Send
                </button>})
        }
        else{
            this.setState({sendButton: <button 
                type="submit"
                className="submit-button"
                disabled>
                    Send
                </button>})
        }
    }

    render(){


    


        return (
            <div className="form-full">
                <h1 className="contact-form-title">Send Us An Email!</h1>
                <div className="form-container">
                    <form name="contact" method="post">
                        <input type="hidden" name="form-name" value="contact" />
                        <input 
                        type="text" 
                        name="firstName"
                        className="__first_name-input"
                        placeholder = "First Name"
                        onChange={this.handleChange}/>

                        
                        
                        {(document.body.offsetWidth > 1300)? <textarea name="message" 
                        className="__message-input"
                        placeholder = "Message"
                        onChange={this.handleChange}/> : <div />} 

                        <input 
                        type="text" 
                        name="lastName"
                        className="__last_name-input"
                        placeholder = "Last Name"
                        onChange={this.handleChange}/>
                        
                        <input type="email" name="email"
                        className="__email-input"
                        placeholder = "Email Address"
                        onChange={this.handleChange}/>
                        
                        {(document.body.offsetWidth > 1300)? <div />: <textarea name="message" 
                        className="__message-input"
                        placeholder = "Message"
                        onChange={this.handleChange}/> } 
                        
                            
                        {this.state.sendButton}

                    </form>
                </div>
            </div>
        )
                }
    
}

export default Email
