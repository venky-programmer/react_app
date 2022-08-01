import React, { Component } from 'react'
import './FormStyle.css'
import axios from 'axios'

class Form extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      details: ''
    }

    this.changeName = this.changeName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changeSubject = this.changeSubject.bind(this)
    this.changeDetails = this.changeDetails.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
  }

  changeName(event) {
    this.setState({
      name: event.target.value,
    })
  }

  changeEmail(event) {
    this.setState({
      email: event.target.value,
    })
  }

  changeSubject(event) {
    this.setState({
      subject: event.target.value,
    })
  }

  changeDetails(event) {
    this.setState({
      details: event.target.value,
    })
  }

  onSubmitForm(event) {
    event.preventDefault();

    const contacted = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      details: this.state.details
    }

    axios.post('http://localhost:4000/app/contacted', contacted)
      .then(res => console.log(res.data));

    this.setState({
      name: '',
      email: '',
      subject: '',
      details: ''
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='form-div'>
          <div className='form'>
            <form onSubmit={this.onSubmitForm}>
              <label>Your Name</label>
              <input type='text' placeholder='Enter name' onChange={this.changeName} value={this.state.name} />
              <label>Email</label>
              <input type='email' placeholder='Enter email address' onChange={this.changeEmail} value={this.state.email} />
              <label>Subject</label>
              <input type='text' placeholder='Enter Subject' onChange={this.changeSubject} value={this.state.subject} />
              <label>Details</label>
              <textarea rows='6' placeholder='Type a short message here.' onChange={this.changeDetails} value={this.state.details} />
              <input type='submit' className='btn' value='Submit' />
            </form>
          </div>
        </div >
      </div>
    )
  }
}

export default Form