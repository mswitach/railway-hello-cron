const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://cronobb-app-75a433149d26.herokuapp.com/editoriales");
    const editoriales = response.data.map((e) => e.nombre).sort();
    res.send(\`
      <h2>Total de editoriales: \${editoriales.length}</h2>
      <ul>\${editoriales.map(n => '<li>' + n + '</li>').join('')}</ul>
    \`);
  } catch (error) {
    console.error("Error al consultar editoriales:", error.message);
    res.status(500).send("Error al consultar editoriales.");
  }
});

app.listen(PORT, () => {
  console.log("Servidor Express activo en el puerto " + PORT);
});