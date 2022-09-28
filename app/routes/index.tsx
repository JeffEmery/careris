import { Form } from '@remix-run/react'

export default function Index() {
  return (
    <div>
      <h1>Welcome to CareRIS</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Form>
        <div className="bg-clip-text">Login</div>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username"></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password"></input>
        </div>
        <button>Login</button>
        <a href="/login">Forgot password</a>
      </Form>
    </div>
  )
}
