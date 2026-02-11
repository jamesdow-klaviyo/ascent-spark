import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import { getPrototypeRoutes, prototypeNames } from './prototypes/registry'

const base = import.meta.env.BASE_URL

function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '40rem' }}>
      <h1>Prototypes</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Each link is a React route. Add a folder under <code>src/prototypes/</code> with an <code>index.tsx</code> to add one.
      </p>
      {prototypeNames.length === 0 ? (
        <p>No prototypes yet. Add <code>src/prototypes/my-name/index.tsx</code> (export default + optional <code>routes</code>).</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {prototypeNames.map((name) => (
            <li key={name} style={{ marginBottom: '0.5rem' }}>
              <Link to={name} style={{ color: '#0066cc' }}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

const router = createBrowserRouter(
  [
    { path: '/', element: <HomePage /> },
    ...getPrototypeRoutes(),
  ],
  { basename: base.replace(/\/$/, '') || '/' }
)

export default function App() {
  return <RouterProvider router={router} />
}
