const express = require("express");
const cors = require("cors");
const db = require("./connection");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/valent", (req, res) => {
    const { nome, piro_grande, piro_pequeno, coracao } = req.body;

    const sql = `
        INSERT INTO valent (nome, piro_grande, piro_pequeno, coracao, destinatario)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(sql, [nome, piro_grande, piro_pequeno, coracao, req.body.destinatario], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json(err);
        } else {
            res.send("Dados inseridos com sucesso!");
        }
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});