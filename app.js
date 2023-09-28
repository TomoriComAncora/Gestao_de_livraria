const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();

const port = 3000;

app.use(express.json());

app.get("/livros", async (req, res) => {
  const livros = await prisma.livro.findMany();
  res.json(livros);
});

app.get("/livros/:id", async (req, res) => {
  res.send("Buscando todos os livros");
});

app.post("/livros", async (req, res) => {
  res.send(req.body);
});

app.put("/livros/:id", async (req, res) => {
  res.send("atualizar livro");
});

app.delete("/livros/:id", async (req, res) => {
  res.send("deletar livro");
});

// autores

app.get("/autores", async (req, res) => {
  const autores = await prisma.autor.findMany();
  res.json(autores);
});

app.get("/autores/:id", async (req, res) => {
  res.send("Buscando todos os autores");
});

app.post("/autores", async (req, res) => {
  const { nome, data_nascimento, biografia, nacionalidade } = req.body;
  const autor = await prisma.autor.create({
    nome: nome,
    data: data_nascimento,
    biografia: biografia,
    nacionalidade: nacionalidade,
  });
  res.json(autor);
});

app.put("/autores/:id", async (req, res) => {
  res.send("atualizar autor");
});

app.delete("/autores/:id", async (req, res) => {
  res.send("deletar autor");
});

app.listen(port, () => {
  console.log("servidor ok!");
});
