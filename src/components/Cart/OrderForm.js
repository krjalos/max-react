import Modal from "../UI/Modal";
import useInput from "../../hooks/use-input";
import classes from './OrderForm.module.css';


const OrderForm = props => {

  const allInputs = [];

  const {
    inputObject: firstNameInputObject
  } = useInput(
    value => value.trim() !== '',
    {name: 'First Name', id: 'first-name', error: `can't be empty`}
  );

  allInputs.push(firstNameInputObject);

  const {
    inputObject: lastNameInputObject
  } = useInput(
    value => value.trim() !== '',
    {name: 'Last Name', id: 'last-name', error: `can't be empty`}
  );

  allInputs.push(lastNameInputObject);

  const {
    inputObject: addressInputObject
  } = useInput(
    value => value.trim() !== '' && value.includes("street"),
    {name: 'Address', id: 'address', error: `Should contain 'street' and can't be empty`}
  );

  allInputs.push(addressInputObject);

  const {
    inputObject: phoneInputObject
  } = useInput(
    value => value.trim() !== '' && value.includes("+"),
    {name: 'Phone', id: 'phone', error: `Should contain '+' and can't be empty`}
  );

  allInputs.push(phoneInputObject);

  const {
    inputObject: creditCartdInputObject
  } = useInput(
    value => value.trim().length === 4 && !!value.match(/^[0-9]+$/),
    {name: 'Credit Card', id: 'credit-card', error: `Only numbers and 16 digits`}
  );

  allInputs.push(creditCartdInputObject);

  const formIsValid = allInputs.reduce((tester, input) => tester && input.inputIsValid, true);

  const formSubmitHandler = event => {
    event.preventDefault();

    if(!formIsValid) {
      return false;
    }

    props.onConfirmOrder(allInputs.map(input => {
      return {
        id:input.id,
        value:input.inputValue
      }
    }));
  }

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmitHandler} action="">

      {allInputs.map(input => input.inputCode())}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span> {props.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onCancelOrder} className={classes['button--alt']}>
          Back to Cart
        </button>
        <button disabled={!formIsValid ? 'disabled' : false} className={classes.button}>Confirm</button>
      </div>
    </form>
  </Modal>);
}

export default OrderForm;