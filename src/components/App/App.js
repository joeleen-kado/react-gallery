import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.js';




class App extends Component {

  state = {
    ourImages: [],
    //areAssembled: false
  };

  componentDidMount() {
    this.getGallery();
  }

  // Get data from the server
  getGallery = () => {
    axios.get('/gallery')
      .then( response => {
        // store data into state after it comes back
        this.setState({
          ourImages: response.data
        }, function () {
          console.log(`State - after getGallery: ${this.state}`);
      }//end function
      )// end setState
      })
  }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> 
        <GalleryList imageProp={this.state.ourImages} 
               />
      {/* heroesAssemble={this.heroesAssemble} */}

      </div>
    );
  }
}

export default App;
