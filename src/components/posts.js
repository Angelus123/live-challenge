import axios from 'axios';
import React, { Component } from 'react';

import Post from './post'
class Posts extends Component {
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
      
     const userData = this.state.users.map((user) =>{
     return(<Post 
      key={user.id}
      title={user.title}
      body ={user.body}
      userId ={user.userId}
      />)});
           return(
                <div style ={{margin:'10px',  width:'80%'}}>  
                  <div >Data{userData}</div>             
                </div>    
           )
           }
          }
       
export default Posts;