import React, {Component} from 'react'
import '../styles/formStyles.css';
import '../styles/edExStyles.css';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      university: '',
      degree: '',
      years: '',
      isEditing: true
    }
  }

  //handlechage
  //handlesubmit

    //Step 1
  //handleOnChange --> take they name and value and changes then when the form is getting filled out
  //handleSubmit --> changes handleSubmit to false
  //handleEdit --> setState({ isEdit => true}) --> when we click edit button we go into editing mode


  //Step 2
  //add button after Edit btn
  //handleAdd --> pushes the object of job to jobs array and then display the array
  //(change the display stuff too )
  //change handleSubmit to push to jobs array

  //Step 3
  //Change logic: when you click ADD button, it display a new edit window?


  handleChange = (event) => {
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
    const {university, degree, years, isEditing} = this.state
    return (

      <div>
        <h1 className='form--title'>EDUCATION</h1>
        {isEditing ? (
        <div className='form--container'>

            <label htmlFor='universityInput'>University</label>
            <input
              id='universityInput'
              type={'text'}
              name='university'
              value={university}
              onChange={this.handleChange}
            />
            <label htmlFor='degreeInput'>degree</label>
            <input
              id='degreeInput'
              type={'text'}
              name='degree'
              value={degree}
              onChange={this.handleChange}
            />
            <label htmlFor='yearsInput'>years</label>
            <input
              id='yearsInput'
              type={'text'}
              name='years'
              value={years}
              placeholder='YYYY-YYYY'
              onChange={this.handleChange}
            />

          <button className='form--submit-btn' onClick={this.handleSubmit}>Submit</button>
        </div>

        ) : (
        <div>
          <h4 className='edEx--data'><span>University:</span><br></br> {university}</h4>
          <h4 className='edEx--data'><span>Degree:</span><br></br> {degree} </h4>
          <h4 className='edEx--data'><span>Years:</span><br></br> {years} </h4>
          <button className='form--edit-btn' onClick={this.handleEdit}>Edit</button>
        </div>

        )}


      </div>
    )
  }
}

export default Education
