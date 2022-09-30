import { useParams } from '@remix-run/react'
import type { LoaderFunction, ActionFunction } from '@remix-run/node' // or cloudflare/deno

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params['*'])
  return null
}

export const action: ActionFunction = async ({ params }) => {
  console.log(params['*'])
}

export default function NotFoundRoute() {
  const params = useParams()
  return (
    <div>
      The route doesn't{' '}
      <strong>
        <em>{params['*']}</em>
      </strong>{' '}
      exist.
    </div>
  )
}
