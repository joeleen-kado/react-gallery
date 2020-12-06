import React, { Component } from 'react';

class GalleryItem extends Component{

  state = ({
    likes  : 0
  })

    

  render(){
    let image = this.props.imageProp;
    
  return(
      <div>
          <h2>{image.title}</h2>
          <h4>{image.description}</h4>
          <img src={image.path}/>
          <h3>Likes: {image.likes}</h3>
          <h3>{image.id}</h3>
        <button onClick={(event)=>this.props.likePutExtensionProp(event, image.id)}>LIKE</button>
        
      </div>
      ) // end return
    } // end render
} // end class
















export default GalleryItem;