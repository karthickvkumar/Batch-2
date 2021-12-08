import React, {Component} from "react";
import axios from "axios";


class InboxPage extends Component{

  loadUsers(){
    var api_url = "https://reqres.in/api/users?page=2";

    axios.get(api_url)
        .then((response) => {
            var serverData = response.data;
            console.log(serverData.data)
        })
        .catch((error) => {
            console.log(error);
        }); 

  }

  render(){
    return(
      <div>
        <h1>This is a Inbox Page</h1>
        <button onClick={() => this.loadUsers()}>Load Users from API</button>
      </div>
    )
  }
}

export default InboxPage;