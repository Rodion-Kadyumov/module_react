import { useEffect, useState } from "react";
import './Entry.css';

function Entry({ entry }) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [loginError, setLoginError] = useState("Поле не должно быть пустым");
  const [passwordError, setPasswordError] = useState("Поле не должно быть пустым");
  const [formValid, setFormValid] = useState(false);
  const [checkBox, setCheckBox] = useState();
  const [checkBoxError, setCheckBoxError] = useState("Поле не должно быть пустым");
  const [isEntry, setIsEntry] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    loginOn();
    passwordOn();
  }

  useEffect(() => {
    if (loginError || passwordError || checkBoxError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, (loginError, passwordError, checkBoxError)) // ?

  const loginOn = (e) => {
    setLogin(e.target.value)
    if (!login) {
      setLoginError("Поле не должно быть пустым")
    } else {
      setLoginError('')
    }
  }

  const passwordOn = (e) => {
    setPassword(e.target.value)
    if (!password) {
      setPasswordError("Поле не должно быть пустым")
    } else {
      setPasswordError('')
    }
  }

  // const checkBoxOn = (e) => {
  //   if (checkBox.check) {
  //     setCheckBoxError("Поле не должно быть пустым")
  //   } else {
  //     setCheckBoxError('')
  //   }
  // }

  return (
    <div class="wrapper">
      <form className="form-entry">
        <div className="entry-form">
          <button
            onClick={() => setIsEntry(!isEntry)}
            className="entry-form__btn">
              {isEntry ? 'Зарегистрироваться' : 'Авторизоваться'}
          </button>
        </div>
        <h2 className="form-title">{isEntry ? 'Вход' : 'Регистрация'}</h2>
        <div class="form__item">
          <input
          onChange={(e) => loginOn(e)}
          className="form__item-input1"
          name="text"
          type="text"
          placeholder="Логин"
          value={login}
          />
          {loginError && <div className="valid-error">{loginError}</div>}

          <input
          onChange={(e) => passwordOn(e)}
          className="form__item-input2"
          name="password"
          type="password"
          placeholder="Пароль"
          value={password}
          />
          {passwordError && <div className="valid-error">{passwordError}</div>}
          {checkBoxError && <div className="valid-error">{checkBoxError}</div>}
          <div className="valid-btn">
          <button
              onClick={handleSubmit}
              className="form__submit"
              >
              {isEntry ? 'Войти' : 'Зарегистрироваться'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Entry;