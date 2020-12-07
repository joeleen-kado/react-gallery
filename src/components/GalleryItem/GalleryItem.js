import React, { Component } from 'react';

class GalleryItem extends Component{
  state = ({
    likes  : 0,
    showPicture : false
  })//END state
  
  togglePicture = () => {
      this.setState({
        showPicture: !this.state.showPicture // flip the boolean using ! NOT
      })//END setState
    };//END togglePicture

  render(){
    let image = this.props.imageProp;
    
    return(
      <>
        <h2>{image.title}</h2>
            {this.state.showPicture? <img src={image.path}/> :   
              <h4 className="i">{image.description}</h4>
            }
        <h3>Likes: {image.likes}</h3>
        <button onClick={this.togglePicture}>{ this.state.showPicture? 
          `SEE DESCRIPTION` : `SEE IMAGE` }
        </button>
        <button onClick={(event)=>
          this.props.likePutExtensionProp(event, image.id)}>LIKE
        </button>
      </>
    ) // end return
  } // end render
} // end class
export default GalleryItem;