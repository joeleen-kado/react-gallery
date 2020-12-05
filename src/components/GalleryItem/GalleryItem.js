import React, { Component } from 'react';

class GalleryItem extends Component{

    state = {
    //   unmasked: false,
    // }

    // toggleMask = () => {
    //   this.setState({
    //     unmasked: !this.state.unmasked // flip the boolean using ! NOT
    //   })
    }

    // displayDutyStatus = () => {
    //   let dutyStatus = ``;
    //   if (this.props.hero.onDuty){
    //     dutyStatus='On Duty'
    //   } else {
    //     dutyStatus='Sleeping'
    //   }
    //   return dutyStatus
    // }

    render(){
        // Can make variables up here before return
        let hero = this.props.hero;
        
        // Can do if/else here...  
        // let dutyStatus = ``;
        // if (this.props.hero.onDuty){
        //   dutyStatus='On Duty'
        // } else {
        //   dutyStatus='Sleeping'
        // }

        return(
          <div className="hero" >
            <h2>{this.props.hero.superheroName}</h2>
            <p>Power: {this.props.hero.power}</p>
    
            {/* Conditionally render the hero's real name */}
            <p> &nbsp;
              { this.state.unmasked && // if this part is false, the next part won't show
                `Name: ${this.props.hero.realName}` } 
            </p>
    
            {/* Show `On Duty` if true, or `Sleeping` otherwise. */}            
            <p>
              On Duty: &nbsp; {this.displayDutyStatus()}
              {/* {
                this.props.hero.onDuty ? // if() conditional statement, ? is ternary operator
                  `On Duty` :   // if true
                  `Sleeping`    // if false
              } */}
            </p>
            
            <button onClick={this.toggleMask}>
              { this.state.unmasked? `Mask!` : `Unmask!` }
            </button>
            <button onClick={this.props.heroesAssemble}>Assemble!</button>
          </div>
        ) // end return
    } // end render
} // end class

export default GalleryItem;