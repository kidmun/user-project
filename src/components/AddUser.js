import useInput from './hooks/use-input';
import Card from './UI/Card';

import './AddUser.css';

const isNotEmpty = (value) => value.trim() !== '';
const isGender = (value) => value.trim().toUpperCase() === 'M' || value.trim().toUpperCase()  === 'F'

const AddUser = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isNotEmpty);
  const {
    value: genderValue,
    isValid: genderIsValid,
    hasError: genderHasError,
    valueChangeHandler: genderChangeHandler,
    inputBlurHandler: genderBlurHandler,
    reset: resetGender,
  } = useInput(isGender);
  const {
    value: heightValue,
    isValid: heightIsValid,
    hasError: heightHasError,
    valueChangeHandler: heightChangeHandler,
    inputBlurHandler: heightBlurHandler,
    reset: resetHeight,
  } = useInput(isNotEmpty);


  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && ageIsValid && genderIsValid && heightIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(firstNameValue, lastNameValue, ageValue, genderValue, heightValue);

    resetFirstName();
    resetLastName();
    resetAge();
    resetGender();
    resetHeight();
  };

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const ageClasses = ageHasError ? 'form-control invalid' : 'form-control';
  const genderClasses = genderHasError ? 'form-control invalid' : 'form-control';
  const heightClasses = heightHasError ? 'form-control invalid' : 'form-control';

  return (
    <Card >
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
        </div>
        <div className={ageClasses}>
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            id='age'
            value={ageValue}
            onChange={ageChangeHandler}
            onBlur={ageBlurHandler}
          />
          {ageHasError && <p className="error-text">Please enter your age.</p>}
        </div>
        <div className={genderClasses}>
          <label htmlFor='gender'>Gender</label>
          <input
            type='text'
            id='gender'
            value={genderValue}
            onChange={genderChangeHandler}
            onBlur={genderBlurHandler}
          />
          {genderHasError && <p className="error-text">Please enter your gender only 'M' or 'F'</p>}
        </div>
        <div className={heightClasses}>
          <label htmlFor='height'>Height</label>
          <input
            type='number'
            id='height'
            value={heightValue}
            onChange={heightChangeHandler}
            onBlur={heightBlurHandler}
          />
          {heightHasError && <p className="error-text">Please enter your height.</p>}
        </div>
      </div>

     
      <div className='form-actions'>
        <button disabled={!formIsValid}>Add</button>
      </div>
    </form>
    </Card>
  );
};

export default AddUser;
