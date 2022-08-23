import classes from './Heading.module.css';

const Heading = props => {
    let heading;

    switch (props.type) {
        case 'h1':
            heading = <h1 className={`${classes.heading} ${props.className}`}>{props.children}</h1>;
            break;
        case 'h2':
            heading = <h2 className={`${classes.heading} ${props.className}`}>{props.children}</h2>;
            break;
        case 'h3':
            heading = <h3 className={`${classes.heading} ${props.className}`}>{props.children}</h3>;
            break;
        default:
            heading = <h4 className={`${classes.heading} ${props.className}`}>{props.children}</h4>;
            break;
    }


    return (heading);
}

export default Heading;