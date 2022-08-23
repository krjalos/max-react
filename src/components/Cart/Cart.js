import Controls from "./Controls";
import ItemsList from "./ItemsList";
import Modal from "../UI/Modal";

const Cart = props => {
    return (
        <Modal onClose={props.onClose}>
            <ItemsList/>
            <Controls onClose={props.onClose}/>
        </Modal>
    );
}

export default Cart;