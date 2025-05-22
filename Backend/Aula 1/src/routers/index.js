import express from "express";
import clienteController from "../controllers/client-controller.js";
import billingController from "../controllers/billing-controller.js";

const router = express.Router();
router.use("/clientes", clienteController);

router.use("/billing", billingController);

export default router;

