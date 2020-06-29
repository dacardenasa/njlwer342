import React, { Component } from "react";

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      list: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
      inputText: ''
    }
  }

  handleSubmit(event){
    this.setState(
      {
        list: this.state.list.concat([this.state.inputText]),
        inputText: ''
      }
    );
    event.preventDefault();
  }

  handleChange(event){
    this.setState(
      {
        inputText: event.target.value
      }
    );
  }

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.list.map((item, index) => 
              <li key={index}>{item}</li>
            )}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="new-task"
              placeholder="Ingresa una tarea y oprime Enter"
              onChange={this.handleChange}
              value={this.state.inputText}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
