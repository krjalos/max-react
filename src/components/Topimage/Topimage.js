import classes from './Topimage.module.css';

import image from '../../assets/meals.jpeg';

const Topimage = props => {
    return (
        <div className={classes.topImage}>
            <img src={image} alt="Meals"/>
        </div>
    );
}

export default Topimage;