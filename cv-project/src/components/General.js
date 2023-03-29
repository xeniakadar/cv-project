
import React, {Component} from 'react';

class General extends Component{
  state = {
    name: '',
    email: '',
    phone: '',
    isEditing: true
  };


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
      <div>
        {isEditing ? (
          <div>
            <h1>Contact</h1>
            <form>
              <label htmlFor='fullNameInput'>First Name</label>
              <input
                type='text'
                id="fullNameInput"
                name="fullName"
                value={fullName}
                onChange={this.handleChange} />

              <label htmlFor='emailInput'>Email</label>
              <input
                type='text'
                name="email"
                id="emailInput"
                value={email}
                onChange={this.handleChange} />

              <label htmlFor='phoneInput'>Phone Number</label>
              <input
                type='text'
                id="phoneInput"
                name="phone"
                value={phone}
                onChange={this.handleChange} />
            </form>
            <button onClick={this.handleSubmit}>Submit</button>
          </div>
        ) : (
          <div>
              <h1>Name: {fullName}</h1>
              <h1>Email: {email}</h1>
              <h1>Phone: {phone}</h1>
              <button onClick={this.handleEdit}>Edit</button>
            </div>
        )}

      </div>
    )
  }
}



export default General;
