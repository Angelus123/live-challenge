import axios from 'axios';
import React, { Component } from 'react';


class FullPost extends Component {
    state = {
        users:[]
    }
     
    componentDidMount () {
        
  
        
            axios.get("https://jsonplaceholder.typicode.com/posts") 
                 .then(response => {  
                   const userData= response.data.slice(0,20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                    this.setState({users:userData})
                 })

        }
    
  

    render () { 
      
     const userData = this.state.users.map((user) =>{return(<div key={user.id}
      style= {{ display:"inlineBlock", width:"30%", margin:"10px", border:'3px solid black',}}>{user.title}</div>)})
     
           return(
                <div className="FullPost">
                    
                  <div >Data{userData}</div>
                   
                </div>    
           )
           }
          }
       
export default FullPost;