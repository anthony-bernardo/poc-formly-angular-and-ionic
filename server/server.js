const express = require('express')
const bodyParser = require('body-parser') // Middleware for parsing JSON

const app = express()
const port = 3000

// Middleware to parse JSON data
app.use(bodyParser.json())

const localityList = [
	{
		id: 1000,
		city: 'Sierre',
		npa: '3960',
	},
	{
		id: 1001,
		city: 'Corin',
		npa: '3960',
	},
	{
		id: 1002,
		city: 'Muraz',
		npa: '3960',
	},
	{
		id: 1003,
		city: 'Lausanne',
		npa: '1000',
	},
	{
		id: 1004,
		city: 'Pully',
		npa: '1009',
	},
]

const streetList = [
	{
		id: 2001,
		city: 'Sierre',
		npa: '3960',
		street: 'Avenue de la Gare',
	},
	{
		id: 2002,
		city: 'Sierre',
		npa: '3960',
		street: 'Avenue des Platanes',
	},
	{
		id: 2003,
		city: 'Sierre',
		npa: '3960',
		street: 'Avenue de Rothorn',
	},
	{
		id: 2004,
		city: 'Corin',
		npa: '3960',
		street: 'Rue principale (Corin)',
	},
	{
		id: 2005,
		city: 'Corin',
		npa: '3960',
		street: 'Avenue secondaire (Corin)',
	},
	{
		id: 2006,
		city: 'Corin',
		npa: '3960',
		street: 'Ruelle secondaire (Corin)',
	},
	{
		id: 2007,
		city: 'Muraz',
		npa: '3960',
		street: 'Rue principale (Muraz)',
	},
	{
		id: 2008,
		city: 'Muraz',
		npa: '3960',
		street: 'Avenue secondaire (Muraz)',
	},
	{
		id: 2009,
		city: 'Muraz',
		npa: '3960',
		street: 'Ruelle secondaire (Muraz)',
	},
	{
		id: 2010,
		city: 'Lausanne',
		npa: '1000',
		street: 'Avenue de la Gare',
	},
	{
		id: 2011,
		city: 'Lausanne',
		npa: '1000',
		street: 'Rue du grey',
	},
	{
		id: 2012,
		city: 'Lausanne',
		npa: '1000',
		street: 'Avenue du lac',
	},
	{
		id: 2013,
		city: 'Lausanne',
		npa: '1000',
		street: 'Chemin de la poste',
	},
	{
		id: 2014,
		city: 'Pully',
		npa: '1009',
		street: 'Chemin de la poste',
	},
]

app.get('/locality', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')

	const { zip } = req.query
	const filteredItems = localityList.filter((item) => item.npa === zip)

	res.json(filteredItems)
})

app.get('/street', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')

	const { zip, locality } = req.query
	const filteredItems = streetList.filter((item) => item.npa === zip && item.city === locality)

	res.json(filteredItems)
})

app.get('/user-preferences', (req, res) => {
	res.set('Access-Control-Allow-Origin', '*')

	/*const preferences = {
		isInOtherCountry: false,
		zip: '3960',
		locality: {
			id: 1000,
			title: 'Sierre',
		},
		street: {
			id: 2001,
			title: 'Avenue de la Gare',
		},
	}*/

	const preferences = {}

	res.json(preferences)
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
