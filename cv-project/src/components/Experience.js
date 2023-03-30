import React, {Component} from 'react'
// import uniqid from 'uniqid'
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

  //Step 1
  //handleOnChange --> take the name and value and changes then when the form is getting filled out
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
    const { title, company, description, isEditing} = this.state
    return (
      <div>
        {/* function to handle rendering of the previous things in array and the editing? stuff */}
        {isEditing ? (
        <div>
          <h1>Experience</h1>
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
          <button onClick={this.handleSubmit}>Submit</button>
        </div>

        ) : (
        <div>
          <h4>Title: {title}</h4>
          <h4>Company: {company}</h4>
          <h4>Description: {description}</h4>
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleAdd}>Add New Job Experience</button>
        </div>

        )}


      </div>
    )
  }
}

export default Experience
