import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';

class GalleryList extends Component{
  render(){
    return(
      <>
        {/* collection of images */}
        { this.props.imageArrayProp.map((image) => 
          <GalleryItem imageProp={image} key={image.id} 
                       likePutExtensionProp={this.props.likePutProp}/>
        )}
      </>
    ) // end return
  } // end render
} // end clas
export default GalleryList;