const mysql = require("mysql2");

// Usa a URL do Railway (ou variável local se quiser testar)
const connection = mysql.createConnection(process.env.DATABASE_URL);

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar no MySQL:", err);
  } else {
    console.log("✅ Conectado ao MySQL!");
  }
});

module.exports = connection;
