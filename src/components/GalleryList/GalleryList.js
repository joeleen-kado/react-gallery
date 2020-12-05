import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem.js';



class GalleryList extends Component{
render(){
  return(
      
      <div>
      <h1>hello from GalleryList</h1>
      
      {/* collection of images */}
                { this.props.imageArrayProp.map((image) => 
                        // The left side of the = is the name of the prop
                        // It must match this.props.x in the component
                        // The key prop must be at this level, not in component
                        <GalleryItem imageProp={image} key={image.id} 
                        />
                        )
                      }
                       {/* judgementExtensionProp={this.props.judgementProp} */} 

      </div>
      
      ) // end return
    } // end render
} // end clas










export default GalleryList;