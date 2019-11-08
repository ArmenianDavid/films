import React from 'react'
import {Link} from 'react-router-dom';

class Nav extends React.Component{
    constructor(){
      super();
      this.state={
        display : 'none',
      }
      this.handleDispleyMenu = this.handleDispleyMenu.bind(this);
    }
  

    handleDispleyMenu(){
      if(this.state.display === 'none'){
        this.setState({
         display : 'block'
       })
      }else if(this.state.display === 'block'){
        this.setState({
          display : 'none',
        })
      }
       console.log(this.state.display)
    }

  
        
      
   
  render(){
    return (
    <div>             
      <div className='mainMenu'>
          <div>Menu</div>
          <ul className='mainMenu'>
           <Link to='/myTop'><li>My Top Movies</li></Link>
           <Link to='/mostGrossing'><li>The highest grossing movies</li></Link>
           <Link to='/topAction'><li>Top action movies</li></Link>
          </ul>
        </div>

      <div className='tabletMenu' >
          <div onClick={()=>this.handleDispleyMenu()}>Menu</div>
          <ul style={{display : this.state.display}}>
           <Link to='/myTop'> <li onClick={this.handleDispleyMenu}>My Top Movies</li></Link>
            <Link to='/mostGrossing'><li onClick={this.handleDispleyMenu}>The highest grossing movies</li></Link>
            <Link to='/topAction'><li onClick={this.handleDispleyMenu}>Top action movies</li></Link>
          </ul>
      </div>
       
   </div>
  )
  }
  
}

export default Nav