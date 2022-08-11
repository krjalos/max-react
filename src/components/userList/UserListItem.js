import classes from './UserListItem.module.css';

const UserListItem = props => {
    return (
        <li onClick={() => {props.onUserClick(props.id)}} className={classes.userListItem}>{props.name} ({props.age} years old)</li>
    );
}

export default UserListItem;