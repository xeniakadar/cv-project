import React, {Component} from 'react'

class Education extends Component {
  constructor() {
    super();
    this.state = {
      university: '',
      degree: '',
      years: ''
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




  render() {
    const {university, degree, years} = this.state
    return(
      <div>
        <form>
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
        </form>
        <button onClick={this.handleSubmit}></button>
      </div>
    )
  }
}

export default Education
