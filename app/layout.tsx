import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Create Crash App</title>
      </head>
      <body>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          {children}
        </div>
        <footer style={{ marginBottom: 16 }}>Powered by Vercel</footer>
      </body>
    </html>
  )
}
