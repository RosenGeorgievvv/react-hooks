import React, { useState } from "react";
import Login from "./Login";
import User from "./User";

function ContextTutorial(){
    const [username, setUsername] = useState("");

    return(
        <div>
            <Login setUsername={setUsername} />
            <User username={username} />
        </div>
    )
}