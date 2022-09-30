// import { redirect } from '@remix-run/node'

// export async function action({ request }) {
//   const body = await request.formData()
//   console.log({ body })
//   return redirect('ris/welcome')
// }

export default function WelcomeRoute() {
  return <div>Welcome to the RIS!</div>
}
