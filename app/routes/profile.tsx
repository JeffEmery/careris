import { Outlet } from '@remix-run/react'

export default function ProfileRoute() {
  return (
    <div>
      <h1>User Profile Route</h1>
      <p>This page provides details about the logged in user.</p>
      <Outlet />
    </div>
  )
}
