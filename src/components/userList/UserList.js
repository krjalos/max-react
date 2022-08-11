import UserListItem from './UserListItem';
import Card from "../UI/Card";

const UserList = props => {
    return (
        <Card>
            <ul>
                {props.users.map(user => <UserListItem key={user.id} id={user.id} name={user.name} age={user.age} onUserClick={props.onUserClick}/>)}
            </ul>
        </Card>
    );
}

export default UserList;