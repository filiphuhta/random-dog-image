import React from 'react';
import './dog.css'

export default class dogGenerator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dogURL: ""
    };
    this.newDog = this.newDog.bind(this);
  }

  render() {
    return (
      <div className="dog-container">
        <img variant="top" src={this.state.dogURL} />
        <button className="dog-button" onClick={this.newDog}>New Dog Image</button>
      </div>
    );
  }

  componentDidMount() {
    // Simple GET request using fetch
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({ dogURL: data.message }));
  }

  newDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => this.setState({ dogURL: data.message }));
  }
}

