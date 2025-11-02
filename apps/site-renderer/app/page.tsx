export default function HomePage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>✅ Site Renderer - Home Page</h1>
      <p>If you can see this, the deployment is working!</p>
      <p>Current time: {new Date().toISOString()}</p>
      <p>Environment: {process.env.NODE_ENV}</p>
      <nav>
        <ul>
          <li><a href="/test">Test Page</a></li>
          <li><a href="/api/health">Health Check</a></li>
        </ul>
      </nav>
    </div>
  )
}
// Trigger redeployment
