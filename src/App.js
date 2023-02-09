import Users from "./user";
import './App.css';
import React, { Component } from "react";
// import Spinner from "./Spinner";
// import logo from './logo.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users_data: [], loading: false };
    this.showUsers = this.showUsers.bind(this);
  }
  showUsers() {
    this.setState({ loading: true });

    setTimeout(
      async function() {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false});
      }.bind(this),
         2000
    );
  }
  
  // showUsers() {
  //   document.getElementById("main").style.display = "flex";
  //   // const source = "https://reqres.in/api/users?page=1";
  //   const response = await fetch("https://reqres.in/api/users?page=1");
  //   const jsonresponse = await response.json();
  //   console.log(jsonresponse);
  //   // fetch(source)
  //   // .then((response) => response.json())
  //   // .then((users) => {
  //   this.setState({ users_data: jsonresponse["data"], loading: false});
  //   }.bind(this),
  //   2000
  //   );
  // }
  //   .catch((error) => {
  //     console.error(error);

  //   });
  // }

  //   this.setState({ loading: true });

  //   setTimeout(
  //     async function () {
  //       const response = await fetch("https://reqres.in/api/users?page=1");
  //       const jsonresponse = await response.json();
  //       console.log(jsonresponse);
  //       this.setState({ users_data: jsonresponse["data"], loading: false });
  //     }.bind(this),
  //     2000
  //   );
  // }

  
  // const [users, setUsers] = useState([]);
  
  // const loadUsers = async () =>
  // {
    //   const response = await fetch(" https://reqres.in/api/users?page=1");
    //   const jsonResponse = await response.json();
    //   setUsers(jsonResponse); 
    
    // };
    
    render()
    {
    return (
      <>
      <nav id="col-sm-6 col-md-4">
        <ul>
          <li><h1 id="logo">Users Information</h1></li>
          <li><button onClick={this.showUsers}>Get Users</button></li>
        </ul>
      </nav>
      {/* {this.state.loading && <Spinner/>} */}
      <div className="userdatacontainer">
      <Users loading={this.state.loading} users={this.state.users_data} />
      </div>

      </>
    //     {/* <nav className="navbar">
    //       <div className="navitem">
    //         <h2>User Interface</h2>
    //         <button className="fetchbtn" onclick={this.updateState}>
    //           Get Users
    //         </button>
    //       </div>
    //       </nav>
    //       <div className="userdatacontainer">
    //         <Users loading={this.state.loading} users={this.state.users_data} />
    //       </div> */}
    //   // <h1>Hello All</h1>
    //   // <button onClick={loadUsers}>Get Data</button>
    //   // <h2>Users : </h2>
    //   // <ul>
    //   //   {users.map(({ id, login, avatar_url }) => (
    //   //     <li key ={id}>
    //   //       Name : {login}
    //   //       Avatar: {avatar_url} 
    //   //       </li>
    //     // ))}
    //   // </ul>
    // // </nav>
  );
}
}
export default App;
