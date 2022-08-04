import classes from './Card.module.scss';

const Card = (props) => {
    const classAttr = classes.card + ' ' + props.className;
    return <div className={classAttr}>{props.children}</div>
}

export default Card;