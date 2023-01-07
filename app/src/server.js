const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080

app.set('PORT', PORT)

app.get('/', (req, res) => {
	res.send(`
	<header style='text-align: center'>
		<h1>Hello world v1.0.0</h1>
		<hr>
		<h3>App for docker test</h3>
	</header>
		`)
})

app.listen(app.get('PORT'),() => {
	console.log(`Listening on port ${app.get('PORT')}`)
})
