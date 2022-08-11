import {useState} from "react";

import Input from "./Input";
import Label from "./Label";
import Button from "../UI/Button";
import Card from "../UI/Card";

const Form = props => {

    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const usernameChangeHandler = event => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();

        if(username.trim().length  === 0 || age.length === 0) {
            props.onError({
                heading:"Invalid Input",
                text:"Please fill both Username and Age with correct data (non-empty values)",
                button:"Okay"
            });

            return;
        }

        if(age < 0) {
            props.onError({
                heading:"Invalid Input",
                text:"Please type positive numerical age value",
                button:"OK"
            });

            return;
        }

        const newUser = {
            id:Math.random(),
            name:username,
            age:age
        }

        props.onAddUser(newUser);

        setUsername("");
        setAge("");

    }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <Label label="Username"/>
                <Input value={username} onInputChange={usernameChangeHandler}/>
                <Label label="Age (years)"/>
                <Input value={age} type="number" onInputChange={ageChangeHandler}/>
                <Button>Add User</Button>
            </form>
        </Card>
    );
}

export default Form;