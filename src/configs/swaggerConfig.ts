import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Zoox API",
      version: "1.0",
      description: "API para consulta e cadastro de estados e cidades",
    },
    servers: [
      {
        url: "http://localhost:8000/api/v1",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/*.ts"],
};

/**
 * Configura o Swagger UI para a aplicação expressjs.
 * @param {express} app Aplicação express
 */

export default (app) =>
  app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSDoc(swaggerDefinition))
  );
