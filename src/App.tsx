import prototypeNames from './prototypes-list.json'

const base = import.meta.env.BASE_URL

function App() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '40rem' }}>
      <h1>Prototypes</h1>
      <p style={{ color: '#666', marginBottom: '1.5rem' }}>
        Each link is a standalone prototype in <code>public/prototypes/</code>. Add a folder there to see it here.
      </p>
      {prototypeNames.length === 0 ? (
        <p>No prototypes yet. Add a folder under <code>public/prototypes/</code> with an <code>index.html</code>.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {prototypeNames.map((name: string) => (
            <li key={name} style={{ marginBottom: '0.5rem' }}>
              <a href={`${base}prototypes/${name}/`} style={{ color: '#0066cc' }}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default App
