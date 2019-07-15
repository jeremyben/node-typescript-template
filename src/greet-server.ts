import { createServer } from 'http'

export function greet() {
	console.log('Side effect')
	return Promise.resolve('Hello world')
}

export default createServer(async (req, res) => {
	if (req.method !== 'GET') {
		res.writeHead(405, { Allow: 'GET' })
		res.end()
		return
	}

	const title = await greet()

	res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
	res.end(`<!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
      body { margin:0; height:100vh; display:flex; align-items:center; justify-content:center; font-family:monospace; color:#007bff }
    </style>
  </head>
  <body>
    <h1>${title}</h1>
  </body>
  </html>`)
})
