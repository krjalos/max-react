import classes from './ProfileForm.module.css';
import {LoginContext} from "../../context/context";
import {useContext, useRef} from "react";
import {useHistory} from "react-router-dom";

const ProfileForm = () => {

  const loginCtx = useContext(LoginContext);
  const passRef = useRef();
  const history = useHistory();

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDG1ZgpOR0NsuKT2-7o55Y_9mXuZmQn-ys', {
        headers: {
          'Content-Type': 'application/json'
        }, method: 'POST', body: JSON.stringify({
          idToken: loginCtx.authToken,
          password: passRef.current.value,
          returnSecureToken: true
        })
      });

      if (response.ok) {

        history.replace('/');

      } else {

        const responseData = await response.json();

        let errorMessage = 'Pass change failed';

        if (responseData && responseData.error && responseData.error.message) {
          errorMessage = responseData.error.message;
        }

        alert(errorMessage);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form onSubmit={formSubmitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={passRef} type='password' id='new-password'/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
