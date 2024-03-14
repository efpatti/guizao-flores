const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = 5000;

async function fetchData() {
  const options = {
    method: 'GET',
    url: 'https://perenual.com/api/species-lists',
    headers: {
      Authorization: 'sk-pg5165f2de496ff544578',
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData(); // Call the function to fetch data

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
