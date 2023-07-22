import React, { Component } from 'react'
import axios from 'axios'

class FormComponent extends Component {
    constructor() {
      super()
    
      this.state = {
        nameOfStudent:'',
        ageOfStudent:'',
        addressOfStudent:'',
        selectionOfStudent:''
    }
    }

    nameChangeHandler = event => {
        this.setState({
            nameOfStudent: event.target.value
        })
    }

    ageOfStudentHandler = event=> {
        this.setState({
            ageOfStudent: event.target.value
        })
    }

    addressOfStudentHandler = event=> {
        this.setState({
            addressOfStudent: event.target.value
        })
    }

    selectionOfStudent = event=> {
        this.setState({
            selectionOfStudent: event.target.value
        })
    }

    formSubmitHandler = event=> {
        alert(`${this.state.nameOfStudent} ${this.state.ageOfStudent} ${this.state.addressOfStudent} ${this.state.selectionOfStudent}`)
        event.preventDefault()
        
        axios
        .post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response)
            // this.setState({posts:response.data})
        })
        .catch(error =>{
            console.log(error)
            // this.setState({errorMessage: 'Error Retrieving Data'})
        })
    }

  render() {
    const {nameOfStudent, ageOfStudent, addressOfStudent, selectionOfStudent, formSubmitHandler} =this.state
    return (
        <form onSubmit={this.formSubmitHandler}>
        <div>
            <label htmlFor="Name">Name:</label>
            <input type="text" id='Name'value={nameOfStudent} onChange={this.nameChangeHandler}/>
        </div>
        <div>
            <label htmlFor="Name">Age:</label>
            <input type="text" id='Name' value={ageOfStudent} onChange={this.ageOfStudentHandler}/>
        </div>
        <div>
            <label htmlFor="Name">Address:</label>
            <textarea value={addressOfStudent} onChange={this.addressOfStudentHandler}/>
        </div>
        <div>
            <label htmlFor="Name">Selection:</label>
            <select value={selectionOfStudent} onChange={this.selectionOfStudent}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
            </select>
        </div>
        <div>
            <button>Submit</button>
        </div>
        
        
    </form>
    )
  }
}

export default FormComponent