import React, { Component } from 'react';

import GalleryItem from '../GalleryItem/GalleryItem';


class GalleryList extends Component{
    render(){
        return(
            <>
                {/* list of super heroes */}
                { this.props.imageProp.map((item) => 
                        // The left side of the = is the name of the prop
                        // It must match this.props.x in the component
                        // The key prop must be at this level, not in component
                        <GalleryItem image={item} key={item.id} 
                                heroesAssemble={this.props.heroesAssemble} />
                    )
                }
            </>
        ) // end return
    } // end render
} // end class
export default GalleryList;
