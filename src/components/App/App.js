import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.js';

class App extends Component {
  state = {
    ourImages: []
    //liked : false
  };

  componentDidMount() {
    this.getGallery();
  }//END componentDidMount

  // Get data from the server
  getGallery = () => {
    axios.get('/gallery')
      .then( response => {
        // store data into state after it comes back
        this.setState({
          ourImages: response.data
        }, function () {
          console.log('State - after getGallery:', this.state);
      }//END function
    )//END setState
    })//END .then
  };//END getGallery

  likePut = () => {
    axios
      .put('/gallery/like/:id')
      .then((response) => {
        console.log('Response:', response);
      })
      .catch((error) => {
        alert('WHOOPS!');
        console.log('Error:', error);
      });
    this.getGallery();
  };//END likePut
// judgement = () => {
  //     console.log('Make a Judgement');
  //     this.setState({
  //       //liked : true
  //     })
  //   }
render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        {/* // <p>Gallery goes here</p>
         // <img src="images/goat_small.jpg"/>*/}
        <GalleryList imageArrayProp={this.state.ourImages}
                        likePutProp={this.likePut}
        />
      </div>
    );//END return
  }//END render
}//END App
export default App;