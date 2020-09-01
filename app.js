const express = require('express')
const app = express()
const port = 3000

const recettes = [
    {
        id: 1,
        title: 'Macaronis au fromage',
        preparation: 15,
        people: 2
    },
    {
        id: 2,
        title: 'Croque-monsieur',
        preparation: 10,
        people: 1
    },
    {
        id: 3,
        title: 'Pastabox',
        preparation: 2,
        people: 4
    },
    {
        id: 4,
        title: 'Paella',
        preparation: 90,
        people: 8
    }
]

// Route par défaut atteignable à la racine (localhost:3000 ou 127.0.0.1:3000)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Retourne la liste des recettes
app.get('/recettes', (req, res) => {
    res.send(recettes)
})

// Code lancé au démarrage de l'app
app.listen(port, () => {
    // Utiliser ` ` comme quotes permet d'intégrer à tout moment dans la string du javascript entouré de ${ ... }
    console.log(`Example app listening at http://localhost:${port}`)
})