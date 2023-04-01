import React, {Component} from 'react'
// import uniqid from 'uniqid'
import '../styles/formStyles.css';
import '../styles/edExStyles.css';


class Experience extends Component {
  constructor() {
    super();
    this.state = {
        title: '',
        company: '',
        description: '',
        isEditing: true,
    }
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    this.setState({
      isEditing: false
    })
  }

  handleEdit = () => {
    this.setState({
      isEditing: true
    })
  }


  render() {
    const { title, company, description, isEditing} = this.state
    return (
      <div>
        {/* function to handle rendering of the previous things in array and the editing? stuff */}
        <h1 className='form--title'>EXPERIENCE</h1>
        {isEditing ? (
        <div className='form--container'>

          <label htmlFor='titleInput'>Title</label>
          <input
            type={'text'}
            name='title'
            id='titleInput'
            value={title}
            onChange={this.handleOnChange}
          />
          <label htmlFor='companyInput'>Company</label>
          <input
            type={'text'}
            name='company'
            id='companyInput'
            value={company}
            onChange={this.handleOnChange}
          />
          <label htmlFor='descriptionInput'>Description</label>
          <input
            type={'text'}
            name='description'
            id='descriptionInput'
            value={description}
            onChange={this.handleOnChange}
          />
          <button className='form--submit-btn' onClick={this.handleSubmit}>Submit</button>
        </div>

        ) : (
        <div className='edEx--container'>
          <h4 className='edEx--data'><span>Title:</span><br></br> {title}</h4>
          <h4 className='edEx--data'><span>Company:</span><br></br> {company}</h4>
          <h4 className='edEx--data'><span>Description:</span><br></br> {description}</h4>
          <button className='form--edit-btn' onClick={this.handleEdit}>Edit</button>
          {/* <button  onClick={this.handleAdd}>Add New Job Experience</button> */}
        </div>

        )}


      </div>
    )
  }
}

export default Experience

// class Experience extends Component {
//   constructor() {
//     super();
//     this.state = {
//         title: '',
//         company: '',
//         description: '',
//         isEditing: true,
//     }
//   }

//   handleOnChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     })
//   }

//   handleSubmit = (event) => {
//     this.setState({
//       isEditing: false
//     })
//   }

//   handleEdit = () => {
//     this.setState({
//       isEditing: true
//     })
//   }


//   render() {
//     const { title, company, description, isEditing} = this.state
//     return (
//       <div>
//         {/* function to handle rendering of the previous things in array and the editing? stuff */}
//         <h1 className='form--title'>EXPERIENCE</h1>
//         {isEditing ? (
//         <div className='form--container'>

//           <label htmlFor='titleInput'>Title</label>
//           <input
//             type={'text'}
//             name='title'
//             id='titleInput'
//             value={title}
//             onChange={this.handleOnChange}
//           />
//           <label htmlFor='companyInput'>Company</label>
//           <input
//             type={'text'}
//             name='company'
//             id='companyInput'
//             value={company}
//             onChange={this.handleOnChange}
//           />
//           <label htmlFor='descriptionInput'>Description</label>
//           <input
//             type={'text'}
//             name='description'
//             id='descriptionInput'
//             value={description}
//             onChange={this.handleOnChange}
//           />
//           <button className='form--submit-btn' onClick={this.handleSubmit}>Submit</button>
//         </div>

//         ) : (
//         <div className='edEx--container'>
//           <h4 className='edEx--data'><span>Title:</span><br></br> {title}</h4>
//           <h4 className='edEx--data'><span>Company:</span><br></br> {company}</h4>
//           <h4 className='edEx--data'><span>Description:</span><br></br> {description}</h4>
//           <button className='form--edit-btn' onClick={this.handleEdit}>Edit</button>
//           {/* <button  onClick={this.handleAdd}>Add New Job Experience</button> */}
//         </div>

//         )}


//       </div>
//     )
//   }
// }

// export default Experience
