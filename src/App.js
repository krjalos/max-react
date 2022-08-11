import React, {useState} from 'react';
import Form from "./components/form/Form";
import UserList from "./components/userList/UserList";
import Popup from "./components/popup/Popup";

function App() {

    const INITIAL_USERS = [
        {name: "Max", age: 31, id:Math.random()}
    ];

    const [users, setUsers] = useState(INITIAL_USERS);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({
        heading:"",
        text:"",
        button:""
    });

    const addUserHandler = user => {
        setUsers(prevState => {
            return [...prevState, user];
        });
    }

    const deleteUserHandler = userId => {
        setUsers(prevState => {
            return prevState.filter(user => user.id !== userId);
        });
    }

    const showPopupHandler = errorContent => {
        setPopupContent({
            heading:errorContent.heading,
            text:errorContent.text,
            button:errorContent.button
        });

        setShowPopup(true);
    }

    const closePopupHandler = () => {
        setPopupContent({
            heading:"",
            text:"",
            button:""
        });

        setShowPopup(false);
    }

  return (
    <div>
        {showPopup ? <Popup content={popupContent} onButtonClick={closePopupHandler}/> : null}
        <Form onError={showPopupHandler} onAddUser={addUserHandler}/>
        <UserList users={users} onUserClick={deleteUserHandler}/>
    </div>
  );
}

export default App;
