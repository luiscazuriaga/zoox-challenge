import { Request, Response } from "express";
import { autoInjectable } from "tsyringe";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import SessionService from "@services/mongoose/sessionService";
import AuthenticateService from "@services/Authentication/AuthenticateService";
import authConfig from "@configs/authConfig";

@autoInjectable()
export default class SessionController {
  service: SessionService;
  authService: AuthenticateService;
  constructor(service?: SessionService, authService?: AuthenticateService) {
    this.service = service;
    this.authService = authService;
  }

  post = async (req: Request, res: Response) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const {
        _doc: { password, ...resource },
      } = await this.service.post({
        ...req.body,
        password: hashedPassword,
      });
      return res.status(201).send({ resource });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  };

  postValidation = async (req: Request, res: Response) => {
    try {
      const { password, email } = req.body;

      const resource = await this.service.getByEmail(email);

      if (!resource) {
        throw Error("Email ou senha incorretos");
      }

      const authService = jwt.sign({ id: resource._id }, authConfig.secret);
      return res.status(200).send({ APItoken: authService, resource });
    } catch (err) {
      res.status(400).send({ error: err.message });
      return;
    }
  };
}
