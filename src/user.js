import React from "react";
import Spinner from "./Spinner";

const Users = ({ loading, users }) => {
    // const mainstyle = {
    //     display: "flex"
    // };
    return loading ? (
        <div id="main" align="center">
            <img
            src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
            alt="loading..."
            className="loader"
            />
        </div>
    ) : (
        <div className="row" id="main">
            {users.map((user) => (
                <div className="col-sm-6 col-md-4">
                    <div className="info">
                    <img src={user.avatar} alt={user.avatar} className="image"></img>
                    <h2 className="id">ID : {user.id}</h2>
                    <h3 className="name">Name : {user.first_name} {user.last_name}</h3>
                    <p className="email">Email ID : <i class="far fa-envelope"></i>{user.email}</p>
                    </div>
                    </div>
            ))}
        </div>
    );
};
export default Users;