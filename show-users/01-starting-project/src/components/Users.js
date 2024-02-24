import { Component, useState } from "react"
import User from "./User"
import classes from './Users.module.css'

class Users extends Component{
  //state, always an object here, with property named state only
  constructor(){
    super()
    this.state = {
      showUsers: true
    }
  }
  componentDidUpdate(){
    if(this.props.users.length === 0){
      throw new Error('Not found')
    }
  }
  toggleShowUsers(){
    //Incorrect - this.state.showUsers: false
    this.setState((prevState) => {
      return {showUsers: !prevState.showUsers}
    })
  }
  render(){
    const usersList = (
           <ul>
             {this.props.users.map(user => (
               <User key={user.id} name={user.name}/>
             ))}
           </ul>
         )
    return (
      <div className={classes.users}>
          <button onClick={this.toggleShowUsers.bind(this)}>{this.state.showUsers? 'Hide': 'Show'} Users</button>
          {this.state.showUsers && usersList}
      </div>
    )
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true)

//   function toggleShowUsers(){
//     setShowUsers(prevState => !prevState)
//   }

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map(user => (
//         <User key={user.id} name={user.name}/>
//       ))}
//     </ul>
//   )
//   return (
//     <div className={classes.users}>
//         <button onClick={toggleShowUsers}>{setShowUsers? 'Hide': 'Show'} Users</button>
//         {showUsers && usersList}
//     </div>
//   )
// }

export default Users