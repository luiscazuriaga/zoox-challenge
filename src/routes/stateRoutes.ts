import StateController from "@controllers/stateController";
import { Router } from "express";
import ensureAuthenticated from "@middlewares/ensureAuthenticated";

const stateRouter = Router();
const stateController = new StateController();

/**
 * @swagger
 * components:
 *   schemas:
 *     Estados:
 *       type: object
 *       required:
 *         - nome
 *         - abreviacao
 *       properties:
 *         id:
 *           type: string
 *           description: O id da estado gerado automaticamente
 *         nome:
 *           type: string
 *           description: O nome da estado
 *         abreviacao:
 *           type: string
 *           description: A abreviação do estado
 *       example:
 *         nome: São paulo
 *         abreviacao: SP
 */

/**
 * @swagger
 * tags:
 *   name: Estados
 *   description: API para manusear dados dos Estados
 */

//Verify Authenticated
stateRouter.use(ensureAuthenticated);

// Routes with Controllers
stateRouter.post("/", stateController.post);

/**
 * @swagger
 * /estados:
 *   post:
 *     security:
 *         - bearerAuth: []
 *     summary: Cadastra um estado
 *     tags: [Estados]
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Estados'
 *     responses:
 *       201:
 *         description: Estado criado
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Estados'
 *       500:
 *         description: Não foi possivel criar o estado
 */

stateRouter.get("/", stateController.get);
/**
 * @swagger
 * /estados:
 *   get:
 *     security:
 *         - bearerAuth: []
 *     summary: Retorna todos os estados em uma lista
 *     tags: [Estados]
 *     responses:
 *       200:
 *         description: A lista de estados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estados'
 */
stateRouter.get("/:id", stateController.getById);

/**
 * @swagger
 * /estados/{id}:
 *   get:
 *     security:
 *         - bearerAuth: []
 *     summary: Retorna todos os estados em uma lista
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id do estado
 *     responses:
 *       200:
 *         description: A lista de estados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Estados'
 */

stateRouter.put("/:id", stateController.update);

/**
 * @swagger
 * /estados/{id}:
 *  put:
 *    security:
 *        - bearerAuth: []
 *    summary: Atualizar informações do estado
 *    tags: [Estados]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id do estado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Estados'
 *    responses:
 *      200:
 *        description: As informações do estado foram atualizados
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Estados'
 *      404:
 *        description: O id não corresponde a nenhum estado
 *      500:
 *        description: Ocorreu algum erro no servidor
 */

stateRouter.delete("/:id", stateController.delete);

/**
 * @swagger
 * /estados/{id}:
 *   delete:
 *     security:
 *         - bearerAuth: []
 *     summary: Remover estado atraves do id
 *     tags: [Estados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Id do estado
 *     responses:
 *       204:
 *         description: O estado foi deletada
 *       400:
 *         description: O estado não foi encontrada
 */

export default stateRouter;
