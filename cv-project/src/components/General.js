
import React, { useState } from 'react';
import '../styles/formStyles.css';
import '../styles/generalStyles.css';

const General = () => {

  const [formData, setFormData] = useState(
    { name: '', email: '', phone: '', isEditing: true }
  )

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        isEditing: false
      }
    })
  }

  const handleEdit = () => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        isEditing: true
      }
    })
  }


    // const {fullName, email, phone, isEditing} = this.state
    return (
      <div className='main--container'>
        {formData.isEditing && <h1 className='form--title'>CONTACT</h1>}
        {formData.isEditing ? (
          <div className='form--container'>
              <label htmlFor='fullNameInput' className='form--label'>First Name</label>
              <input
                type='text'
                id="fullNameInput"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange} />

              <label htmlFor='emailInput' className='form--label'>Email</label>
              <input
                type='text'
                name="email"
                id="emailInput"
                value={formData.email}
                onChange={handleChange} />

              <label htmlFor='phoneInput' className='form--label'>Phone Number</label>
              <input
                type='text'
                id="phoneInput"
                name="phone"
                value={formData.phone}
                onChange={handleChange} />
            <button className='form--submit-btn' onClick={handleSubmit}>Submit</button>

          </div>
        ) : (
          <div className='cv--container'>
              <h4 className='cv--name'>{formData.fullName}</h4>
              <div className='cv--data-container'>
                <h4 className='cv--data'><span>email:</span> {formData.email}</h4>
                <h4 className='cv--data'><span>phone:</span> {formData.phone}</h4>
              </div>
                <button className='form--edit-btn' onClick={handleEdit}>Edit</button>
            </div>
        )}

      </div>
    )

}



export default General;



// import React, { Component } from 'react';
// import '../styles/formStyles.css';
// import '../styles/generalStyles.css';

// class General extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: '',
//       email: '',
//       phone: '',
//       isEditing: true
//     }
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//      isEditing: false,
//     })
//   }

//   handleEdit = () => {
//     this.setState({
//       isEditing: true
//     })
//   }

//   render() {
//     const {fullName, email, phone, isEditing} = this.state
//     return (
//       <div className='main--container'>
//         {isEditing && <h1 className='form--title'>CONTACT</h1>}
//         {isEditing ? (
//           <div className='form--container'>
//               <label htmlFor='fullNameInput' className='form--label'>First Name</label>
//               <input
//                 type='text'
//                 id="fullNameInput"
//                 name="fullName"
//                 value={fullName}
//                 onChange={this.handleChange} />

//               <label htmlFor='emailInput' className='form--label'>Email</label>
//               <input
//                 type='text'
//                 name="email"
//                 id="emailInput"
//                 value={email}
//                 onChange={this.handleChange} />

//               <label htmlFor='phoneInput' className='form--label'>Phone Number</label>
//               <input
//                 type='text'
//                 id="phoneInput"
//                 name="phone"
//                 value={phone}
//                 onChange={this.handleChange} />
//             <button className='form--submit-btn' onClick={this.handleSubmit}>Submit</button>

//           </div>
//         ) : (
//           <div className='cv--container'>
//               <h4 className='cv--name'>{fullName}</h4>
//               <div className='cv--data-container'>
//                 <h4 className='cv--data'><span>email:</span> {email}</h4>
//                 <h4 className='cv--data'><span>phone:</span> {phone}</h4>
//               </div>
//                 <button className='form--edit-btn' onClick={this.handleEdit}>Edit</button>
//             </div>
//         )}

//       </div>
//     )
//   }
// }



// export default General;
