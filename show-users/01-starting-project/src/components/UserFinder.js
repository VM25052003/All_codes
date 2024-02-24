import { useState, useEffect, Component } from "react";
import Users from "./Users";
import classes from './UserFinder.module.css'
import UsersContext from '../store/users-context'
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component{
    static contextType = UsersContext
    constructor(){
        super()
        this.state = {
            filteredUsers: [],
            searchTerm: ''
        }
    }

//Imagine our users are loaded from a server from a database. So we're sending an HTTP request, so initially filteredUsers = [], when rendered for the first time. Hence we can't use component did update in this scenario because don't want fetch users over and over again. So, componentDidMount will run only once
    componentDidMount(){
        this.setState({ 
            filteredUsers: this.context.users
        })
    }
    componentDidUpdate(prevProp, prevState){
        //Avoiding infinite loop, similar ot dependency[] in useEffect()
        if(prevState.searchTerm !== this.state.searchTerm){
            this.setState({
                filteredUsers: this.context.users.filter(user => user.name.includes(this.state.searchTerm))
            })
        }
    }

    searchChangeHandler(e){
        this.setState({searchTerm: e.target.value})
    }

    //Can't wrap Users in try catch to deal with errors as not usual js code. 
    render() {
        return (
            <>
            <div className={classes.finder}>
                <input type="search" onChange={this.searchChangeHandler.bind(this)}/>
            </div>
            <ErrorBoundary>
            <Users users={this.state.filteredUsers}/>
            </ErrorBoundary>
            </>
        )
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS)
//     const [searchTerm, setSearchTerm] = useState('')

//     useEffect(() => {
//         setFilteredUsers(DUMMY_USERS.filter(user => user.name.includes(searchTerm)))
//     }, [searchTerm])

//     function searchChangeHandler(e){
//         setSearchTerm(e.target.value)
//     }

//     return (
//         <>
//         <div className={classes.finder}>
//             <input type="search" onChange={searchChangeHandler}/>
//         </div>
//         <Users users={filteredUsers}/>
//         </>
//     )
// }

export default UserFinder