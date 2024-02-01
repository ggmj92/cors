const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const PORT = 4000;

app.use(cors());

app.get('/characters/:characterName', async(req, res) => {
    const characterName = req.params.characterName;
    const url = `https://rickandmortyapi.com/api/character/?name=${characterName}`;

    try {
        const response = await axios.get(url);
        const { name, status, species, gender, origin, image } = response.data.results[0];

        res.json({ name, status, species, gender, origin, image });
        
    } catch (error) {
        res.status(404).json({error: 'Charactert not found'});
    }
});

app.listen(PORT, () => {
    console.log(`Expres running on http://localhost:${PORT}`);
})