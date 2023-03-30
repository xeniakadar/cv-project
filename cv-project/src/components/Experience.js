import React, {Component} from 'react'
// import uniqid from 'uniqid'
class Experience extends Component {
  constructor() {
    super();
    this.state = {
      jobs:[{
        title: '',
        company: '',
        startDate: '',
        finishDate: '',
        location: '',
        description: '',
        isEditing: true,
      }]
    }
  }
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

  handleOnChange = (index, event) => {
    const { name, value } = event.target.job
    const {jobs } = this.state
    //maps over each job info and assigns [name]:value to each without changing the others

    const updatedJobs = jobs.map((job, i) => {
      if (i === index) {
        return { ...job, [name]: value };
      }
      return job;
    });

    this.setState({ jobs: updatedJobs });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { jobs } = this.state;
    console.log("jobs: ", this.state.jobs)
  }

  handleEdit = () => {
    const { jobs } = this.state;
    const updatedJobs = [...jobs];
    updatedJobs.map((job, index) => {
      return this.setState({
        job[index].isEditing: true;
      })
    })
    this.setState({

    })
  }

  displayJob = {
      //map over jobs => {isEditing? ... }

  }

  // it 'saves'the previous job into the array (...prevState.jobs) and pushres the new job into the array
  handleAdd = () => {
    this.setState((prevState) => ({
      jobs: [...prevState.jobs, {
        title: '',
        company: '',
        startDate: '',
        finishDate: '',
        location: '',
        description: '',
        isEditing: true
      }]
    }));
  }

  render() {
    const {job, title, company, startDate, finishDate, location, description, isEditing} = this.state
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
            value={job.title}
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
          <label htmlFor='startDateInput'>Starting Date</label>
          <input
            type={'text'}
            name='startDate'
            id='startDateInput'
            value={startDate}
            placeholder="DD/MM/YYY"
            onChange={this.handleOnChange}
          />
          <label htmlFor='finishDateInput'>End Date</label>
          <input
            type={'text'}
            name='finishDate'
            id='finishDateInput'
            value={finishDate}
            placeholder="DD/MM/YYY"
            onChange={this.handleOnChange}
          />
          <label htmlFor='locationInput'>Location</label>
          <input
            type={'text'}
            name='location'
            id='locationInput'
            value={location}
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
          <h4>Starting Date: {startDate}</h4>
          <h4>Finish Date: {finishDate}</h4>
          <h4>Location: {location}</h4>
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
