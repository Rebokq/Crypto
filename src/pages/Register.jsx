import React, { useState } from "react"
import { Link } from 'react-router-dom';
import { loginFields } from "../constants/formFields";
import FormHeader from "../components/Login_Register/FormHeader"
import { useTranslation } from 'react-i18next';


const Register = () => {
  // const [user, setUser] = useState({register: false});
  const fields = loginFields;
  let fieldsState = {};
  fields.forEach(field => fieldsState[field.id] = '');
  const [loginState, setLoginState] = useState(fieldsState);
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState('fr');

  const changeLanguage = () => {
    lng === 'fr' ? setLng('en') : setLng('fr')
    i18n.changeLanguage(lng);
  };

  const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
  }

  //Handle Login API Integration here
  const authenticateUser = () => {

  }

  return (
    <div>
      <button onClick={() => changeLanguage()}>Change Language</button>
      <h1>{t('welcome')}</h1>
      <>
        <FormHeader
          heading="Signup to create an account"
          paragraph="Already have an account?"
          linkName="Login"
          linkUrl="/signup"
        />

      </>
      <form className="mt-8 space-y-6">
        <div className="-space-y-px">
          {
            fields.map(field =>
              <div className="my-5" key={field.id}>
                <label htmlFor={field.labelFor} className="sr-only">
                  {field.labelText}
                </label>
                <input
                  key={field.id}
                  onChange={handleChange}
                  value={loginState[field.id]}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  required={field.isRequired}
                  className={fixedInputClass}
                  placeholder={field.placeholder}
                />
              </div>
            )
          }
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
              Forgot your password?
            </a>
          </div>
        </div>
        <div>
          <button
            type={'submit'}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10"
            onSubmit={handleSubmit}
          >

            Connection
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register