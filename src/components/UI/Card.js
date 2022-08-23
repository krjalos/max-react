import classes from './Card.module.css';

const Card = props => {
    return (
        <div className={`${classes.card} ${props.className}`} style={{backgroundColor:props.backgroundColor}}>
            {props.children}
        </div>
    );
}

export default Card;