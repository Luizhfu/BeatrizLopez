const mysql = require("mysql2");

// Conecta usando a variável de ambiente DATABASE_URL do Railway
const connection = mysql.createConnection(process.env.DATABASE_URL);

// Testa conexão
connection.connect((err) => {
  if (err) {
    console.error("❌ Erro ao conectar no MySQL:", err.message);
  } else {
    console.log("✅ Conectado ao MySQL!");
  }
});

// Exporta a conexão para usar no serve.js
module.exports = connection;
