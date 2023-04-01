import React, {useState} from 'react'
import '../styles/formStyles.css';
import '../styles/edExStyles.css';

function Education() {

  const [formData, setFormData] = useState({
    university: '',
    degree: '',
    years: '',
    isEditing: true

  })

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


  const handleChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name] : [event.target.value]
      }
   })
  }

  function handleSubmit(event) {
    event.preventDefault()
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



  // const {university, degree, years, isEditing} = this.state
  return (
    <div>
      <h1 className='form--title'>EDUCATION</h1>
      {formData.isEditing ? (
      <div className='form--container'>

          <label htmlFor='universityInput'>University</label>
          <input
            id='universityInput'
            type={'text'}
            name='university'
            value={formData.university}
            onChange={handleChange}
          />
          <label htmlFor='degreeInput'>degree</label>
          <input
            id='degreeInput'
            type={'text'}
            name='degree'
            value={formData.degree}
            onChange={handleChange}
          />
          <label htmlFor='yearsInput'>years</label>
          <input
            id='yearsInput'
            type={'text'}
            name='years'
            value={formData.years}
            placeholder='YYYY-YYYY'
            onChange={handleChange}
          />

        <button className='form--submit-btn' onClick={handleSubmit}>Submit</button>
      </div>

      ) : (
      <div>
        <h4 className='edEx--data'><span>University:</span><br></br> {formData.university}</h4>
        <h4 className='edEx--data'><span>Degree:</span><br></br> {formData.degree} </h4>
        <h4 className='edEx--data'><span>Years:</span><br></br> {formData.years} </h4>
        <button className='form--edit-btn' onClick={handleEdit}>Edit</button>
      </div>

      )}


    </div>
  )
}

export default Education
