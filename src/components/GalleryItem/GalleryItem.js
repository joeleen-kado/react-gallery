import React, { Component } from 'react';

class GalleryItem extends Component{

  state = {
      liked : false,
    }

    toggleJudgement = () => {
        this.setState({
          liked: !this.state.liked // flip the boolean using ! NOT
        })
      }

  
  render(){
    let image = this.props.imageProp;

  return(
      <div>
                    <h2>{image.title}</h2>
                    <h4>{image.description}</h4>
                    <img src={image.path}/>
                    
      </div>
      ) // end return
    } // end render
} // end class
















export default GalleryItem;