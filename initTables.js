const mysql = require("mysql2");

const connection = mysql.createConnection(
  "mysql://root:xfwRzHnRvMHJSZszJNGNrBnPdDJHVFDp@caboose.proxy.rlwy.net:29240/railway"
);

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar:", err);
    return;
  }
  console.log("✅ Conectado ao MySQL Railway!");

  const sql = `
  CREATE TABLE IF NOT EXISTS valent (
      id INT PRIMARY KEY AUTO_INCREMENT,
      nome VARCHAR(100),
      piro_grande TINYINT(1),
      piro_pequeno TINYINT(1),
      coracao INT
  );

  CREATE TABLE IF NOT EXISTS preco (
      id INT PRIMARY KEY AUTO_INCREMENT,
      preco_piro_grande INT,
      preco_piro_pequeno INT
  );

  CREATE TABLE IF NOT EXISTS pago (
      id INT PRIMARY KEY AUTO_INCREMENT
  );
  `;

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Erro ao criar tabelas:", err);
    } else {
      console.log("✅ Tabelas criadas ou já existentes!");
    }
    connection.end();
  });
});
