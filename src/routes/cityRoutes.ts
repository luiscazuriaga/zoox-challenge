import CityController from "@controllers/cityController";
import { Router } from "express";
import ensureAuthenticated from "@middlewares/ensureAuthenticated";

const cityRouter = Router();
const cityController = new CityController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Cidades:
 *       type: object
 *       required:
 *         - nome
 *         - estadoId
 *       properties:
 *         id:
 *           type: string
 *           description: O id da cidade gerado automaticamente
 *         nome:
 *           type: string
 *           description: O nome da cidade
 *         estadoId:
 *           type: string
 *           description: O Id do estado da cidade
 *       example:
 *         nome: Guaruja
 *         estadoId: 606a40d83a2e37195d22d9e2s
 */

/**
 * @swagger
 * tags:
 *   name: Cidades
 *   description: API para manusear dados das Cidades
 */

//Verify Authenticated
cityRouter.use(ensureAuthenticated);

// Routes with Controllers
cityRouter.post("/", cityController.post);

/**
 * @swagger
 * /cidades:
 *   post:
 *     security:
 *         - bearerAuth: []
 *     summary: Cadastra uma cidade
 *     tags: [Cidades]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Cidades'
 *     responses:
 *       201:
 *         description: Cidade criada
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Cidades'
 *       500:
 *         description: Não foi possivel criar cidade
 */

cityRouter.get("/", cityController.get);
/**
 * @swagger
 * /cidades:
 *   get:
 *     security:
 *         - bearerAuth: []
 *     summary: Retornar todas as cidades em uma lista
 *     tags: [Cidades]
 *     responses:
 *       200:
 *         description: A lista de cidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cidades'
 */
cityRouter.get("/:id", cityController.getById);
/**
 * @swagger
 * /cidades/{id}:
 *   get:
 *     security:
 *         - bearerAuth: []
 *     summary: Retornar todas as cidades em uma lista
 *     tags: [Cidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id da cidade
 *     responses:
 *       200:
 *         description: A lista de cidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cidades'
 */
cityRouter.put("/:id", cityController.update);

/**
 * @swagger
 * /cidades/{id}:
 *  put:
 *    security:
 *        - bearerAuth: []
 *    summary: Atualizar informações da cidade
 *    tags: [Cidades]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id da cidade
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Cidades'
 *    responses:
 *      200:
 *        description: As informações da cidade foram atualizadas
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cidades'
 *      404:
 *        description: O id não corresponde a nenhuma cidade
 *      500:
 *        description: Ocorreu algum erro no servidor
 */

cityRouter.delete("/:id", cityController.delete);

/**
 * @swagger
 * /cidades/{id}:
 *   delete:
 *     security:
 *         - bearerAuth: []
 *     summary: Remover cidade atraves do id
 *     tags: [Cidades]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id da cidade
 *     responses:
 *       204:
 *         description: A cidade foi deletada
 *       400:
 *         description: A cidade não foi encontrada
 */

export default cityRouter;
