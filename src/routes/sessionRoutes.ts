import SessionController from "@controllers/sessionController";
import { Router } from "express";

const sessionRouter = Router();
const sessionController = new SessionController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Sessions:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: O id do usuario gerado automaticamente
 *         email:
 *           type: string
 *           description: O email do usuario
 *         password:
 *           type: string
 *           description: A senha do usuario
 *       example:
 *         email: luis@gmail.com
 *         password: 906a40d
 */

/**
 * @swagger
 * tags:
 *   name: Sessions
 *   description: API para manusear Sessions e disponilibilizar API keys
 */

// Routes with Controllers
sessionRouter.post("/signup", sessionController.post);

/**
 * @swagger
 * /session/signup:
 *   post:
 *     security:
 *         - bearerAuth: []
 *     summary: Cadastra um usuario
 *     tags: [Sessions]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Sessions'
 *     responses:
 *       201:
 *         description: Usuario criado
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Sessions'
 *       500:
 *         description: Não foi possivel criar usuario
 */

sessionRouter.post("/", sessionController.postValidation);

/**
 * @swagger
 * /session:
 *   post:
 *     security:
 *         - bearerAuth: []
 *     summary: Disponibilizar API key do usuario
 *     tags: [Sessions]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Sessions'
 *     responses:
 *       200:
 *         description: API key do usuario criada
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Sessions'
 *       400:
 *         description: Não foi possivel encontrar o usuario
 */

export default sessionRouter;
