import express from "express";

const router = express.Router();

const titulos = [];

router.get("/:id", (req, res) => {
  const titulo = titulos.find((c) => c.id == parseInt(req.params.id));

  if (!titulo)
    return res.status(404).json({ message: "Título não encontrado" });

  res.json(titulo);
});

router.get("/", (req, res) => {
  res.json(titulos);
});

router.put("/:id", (req, res) => {
  const titulo = titulos.find((c) => c.id === parseInt(req.params.id));

  if (!titulo)
    return res.status(404).json({ message: "Cliente não encontrado" });

  titulo.cliente = req.body.cliente;
  titulo.valor = req.body.valor;
  titulo.dataVencimento = req.body.dataVencimento;

  res.json(titulo);
});

router.delete("/:id", (req, res) => {
  const titulo = titulos.find((c) => c.id === parseInt(req.params.id));

  if (!titulo)
    return res.status(404).json({ message: "Titulo não encontrado" });

  const tituloRemovido = titulos.splice(titulo, 1);

  res.json(tituloRemovido);
});

router.post("/", (req, res) => {
  const titulo = {
    id: titulos.length + 1,
    cliente: req.body.cliente,
    valor: req.body.valor,
    dataVencimento: req.body.dataVencimento,
  };
  titulos.push(titulo);
  res.status(201).json(titulos);
});

export default router;
