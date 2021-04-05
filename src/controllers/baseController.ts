import BaseService from "@services/baseService";
import sortData from "@utils/sortData";
import { Request, Response } from "express";

export default class BaseController {
  service: BaseService<any>;
  // alterar any para object do BaseService
  constructor(service: BaseService<any>) {
    this.service = service;
  }

  post = async (req: Request, res: Response) => {
    try {
      const resource = await this.service.post(req.body);

      return res.status(201).send({ resource });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  };

  get = async (req: Request, res: Response) => {
    try {
      const { ordem, ...querys } = req.query;
      const resource = await this.service.get(querys);

      if (!resource) {
        res.status(400).send({ message: "Recurso não encontrado" });
      }

      if (ordem) {
        const sortedResources = sortData(resource, ordem);
        res.status(200).send({ sortedResources });
        return;
      }
      res.status(200).send({ resource });
    } catch (err) {
      res.status(400).send({ error: err });
    }
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const resource = await this.service.getById(id);

      if (!resource) {
        const message = "Recurso não encontrado";
        res.status(400).send({ message: message });
        throw Error(message);
      }

      res.status(200).send({ resource });
    } catch (err) {
      res.status(400).send({ error: err });
      return;
    }
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const resource = await this.service.update(id, req.body);

      if (!resource) {
        const message = "Recurso não encontrado";
        res.status(400).send({ message: message });
        throw Error(message);
      }

      res.status(201).send({ resource });
    } catch (err) {
      res.status(400).send({ error: err });
      return;
    }
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const resource = await this.service.delete(id);

      if (!resource) {
        const message = "Recurso não encontrado";
        res.status(400).send({ message: message });
        throw Error(message);
      }

      res.status(204).send();
    } catch (err) {
      res.status(400).send({ error: err });
      return;
    }
  };
}
