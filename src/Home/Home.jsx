import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMessage: true
    };
  }

  componentDidMount() {
    // Définir un timer pour faire disparaître le message après 3 secondes
    this.messageTimer = setTimeout(() => {
      this.setState({ showMessage: false });
    }, 3000);
  }

  componentWillUnmount() {
    // Nettoyer le timer si le composant est démonté
    clearTimeout(this.messageTimer);
  }

  render() {
    return (
      <div className="container mx-auto p-4 text-center">
        {this.state.showMessage && (
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4 rounded-md transition-opacity duration-300">
            <h2 className="text-2xl font-bold">Welcome to Our Competition World</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Home;