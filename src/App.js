import React, { Component } from 'react'

class App extends Component {


  constructor (props) {
    super(props)
    this.state = {
      items : [] ,
      name : '' ,
      age : ''
    }
  }

  deleteItem = (id) => {
    let newItems = this.state.items
    let deleteIndex = newItems.findIndex(i => i.id === id)
    newItems.splice(deleteIndex, 1)
    this.setState({
      items : newItems
    })
  }


  changeHandle = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = e => {
    if (this.state.name === '' || this.state.name === null || this.state.age === null || this.state.age === '' ) {
      alert('Fields are required')
    } else {
      let newItem = this.state.items
      newItem.push({
        id : Math.random() ,
        name : this.state.name ,
        age : this.state.age
      })
      this.setState({
        items : newItem ,
        name : '' ,
        age : ''
      })
    }
    e.preventDefault()
  }



  render() {

    let itemsList = this.state.items.length > 0 ? 
    this.state.items.map((item, index) => 
        <tr key={item.id}>
          <td colSpan="2">{index + 1}-  {item.name}</td>
          <td>{item.age}</td>
          <td><i className="fas fa-times" onClick={() => this.deleteItem(item.id)}></i></td>
        </tr>
    ):
    (
      <tr>
        <td colSpan="4" className="no-items">There is no items</td>
      </tr>
    )

    return (

      <section className="todo-app">
        <div className="container">
          <div className='row justify-content-center'>
            <div className="col-md-8">
            <table className="table table-dark">
                <thead>
                  <tr>
                    <th colSpan="2">Name</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsList}
                </tbody>
              </table>
              <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="Enter the name ..." value={this.state.name} className="form-control" onChange={this.changeHandle} required />
                <input type="number" name="age" placeholder="Enter the age ..." value={this.state.age} className="form-control" onChange={this.changeHandle} required />
                <button className="btn btn-primary" type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </section> 
    )
  }
}

export default App

