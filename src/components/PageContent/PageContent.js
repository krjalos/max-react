import classes from './PageContent.module.css';
import Card from "../UI/Card";
import Heading from "../UI/Heading";

const PageContent = props => {
    return (
        <Card className={classes.pageContent} backgroundColor="#383838">
            <section>
                <Heading type="h2">Delicious Food, Delivered To You</Heading>
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </section>
        </Card>
    );
}

export default PageContent;