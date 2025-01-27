import React, { useState } from "react"
import { Link } from 'react-router-dom';
import { loginFields } from "../constants/formFields";


const Login = ({goToApp}) => {
  // const [user, setUser] = useState({register: false});
  const fields = loginFields;
  let fieldsState = {};
  fields.forEach(field => fieldsState[field.id] = '');
  const [loginState, setLoginState] = useState(fieldsState);

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
      <button onClick={() => {
        console.log('lol');
        goToApp()
        }}>Go to the app</button>
      <div className="mb-10">
        <div className="flex justify-center">
          <img
            alt=""
            className="h-14 w-14"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-bank-5339249-4466137.png" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          "Login to your account"</h2>
        <p className="mt-2 text-center text-sm text-gray-600 mt-5">
          "Don't have an account yet? " {' '}
          <Link to="/register" className="font-medium text-purple-600 hover:text-purple-500">
            "Signup"
          </Link>
        </p>
      </div>
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

export default Login