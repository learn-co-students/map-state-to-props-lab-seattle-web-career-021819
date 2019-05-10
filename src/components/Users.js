import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let userNames = this.props.users.map((user)=>{
      return <li>{user.username}</li>
    })

    return (
      <div>
        <ul>
          Users!
          {userNames}
        </ul>
        Count: {this.props.users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state)=>{
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
