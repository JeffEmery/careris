import { Form } from '@remix-run/react'

export default function Index() {
  return (
    <div className="antialised text-gray-900 px-6">
      <div className="max-w-xl mx-auto py-12 divide-y md-max-w-4xl">
        <div className="py-8">
          <div className="flex items-center">
            <img
              className="object-contain h-12 w-12 mr-2"
              src="./img/logo.png"
              alt="Logo"
            />
            <h1 className="text-4xl font-bold">CareRIS</h1>
          </div>
          <div className="mt-2 text-lg text-gray-600">
            Welcome to the next generation Radiology Information System
          </div>
        </div>
        <div className="py-12">
          <h2 className="text-2xl font-bold">Login</h2>
          <div className="mt-2 text-lg text-gray-600">
            Please enter your credentials.
          </div>
          <div className="mt-8 max-w-md">
            <Form
              className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              id="loginForm"
              method="post"
              action="/ris/welcome"
            >
              <div className="grid grid-cols-1 gap-6">
                <label className="block" htmlFor="username">
                  <span className="text-gray-700">Username</span>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="text"
                    id="username"
                    name="username"
                    placeholder=""
                  ></input>
                </label>
                <label className="block" htmlFor="password">
                  <span className="text-gray-700">Password</span>
                  <input
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                  ></input>
                </label>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                  type="submit"
                  form="loginForm"
                  value="submit"
                >
                  Login
                </button>
              </div>
            </Form>
            <div className="block mt-4">
              <a className="hover:underline" href="/login">
                Forgot password
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
