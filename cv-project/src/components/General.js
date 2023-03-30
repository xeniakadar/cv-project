
import React, { Component } from 'react';
import '../styles/formStyles.css';
import '../styles/generalStyles.css';

class General extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      isEditing: true
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
     isEditing: false,
    })
  }

  handleEdit = () => {
    this.setState({
      isEditing: true
    })
  }

  render() {
    const {fullName, email, phone, isEditing} = this.state
    return (
      <div className='main--container'>
        <h1 className='form--title'>CONTACT</h1>
        {isEditing ? (
          <div className='form--container'>
              <label htmlFor='fullNameInput' className='form--label'>First Name</label>
              <input
                type='text'
                id="fullNameInput"
                name="fullName"
                value={fullName}
                onChange={this.handleChange} />

              <label htmlFor='emailInput' className='form--label'>Email</label>
              <input
                type='text'
                name="email"
                id="emailInput"
                value={email}
                onChange={this.handleChange} />

              <label htmlFor='phoneInput' className='form--label'>Phone Number</label>
              <input
                type='text'
                id="phoneInput"
                name="phone"
                value={phone}
                onChange={this.handleChange} />
            <button className='form--submit-btn' onClick={this.handleSubmit}>Submit</button>

          </div>
        ) : (
          <div className='cv--container'>
              <h4 className='cv--name'>{fullName}</h4>
              <div className='cv--data-container'>
                <h4 className='cv--data'><span>email:</span> {email}</h4>
                <h4 className='cv--data'><span>phone:</span> {phone}</h4>
              </div>
                <button className='form--edit-btn' onClick={this.handleEdit}>Edit</button>
            </div>
        )}

      </div>
    )
  }
}



export default General;
