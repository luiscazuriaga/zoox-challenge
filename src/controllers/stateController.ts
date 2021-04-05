import { autoInjectable } from "tsyringe";
import BaseController from "./baseController";
import StateService from "@services/stateService";

@autoInjectable()
export default class StateController extends BaseController {
  constructor(service?: StateService) {
    super(service);
  }
}

// import { Router } from "express";

// import StateSchema from "@models/State";
// import sortData from "@utils/sortData";

// const StateRouter = Router();

// // Inserir
// StateRouter.post("/", async (req, res) => {
//   try {
//     const state = await StateSchema.create(req.body);

//     return res.status(201).send({ state });
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });

// // Listar (incluir ordenação e filtro de busca)
// StateRouter.get("/:id?", async (req, res) => {
//   try {
//     const { ordem, ...querys } = req.query;
//     const { id } = req.params;
//     const objectID = id ? { _id: id } : {};
//     const states = await StateSchema.find({ ...objectID, ...querys });

//     if (ordem) {
//       const sortedStates = sortData(states, ordem);
//       return res.status(200).send({ sortedStates });
//     }

//     return res.status(200).send({ states });
//   } catch (err) {
//     res.status(400).send({ message: err });
//   }
// });

// // Alterar - update - put
// StateRouter.put("/:id", async (req, res) => {
//   try {
//     const states = await StateSchema.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body,
//       { new: true }
//     );

//     if (!states) {
//       return res.status(400).send({ message: "Id invalido" });
//     }

//     return res.status(200).send({ data: states });
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });

// // Excluir - deletar - delete
// StateRouter.delete("/:id", async (req, res) => {
//   try {
//     const states = await StateSchema.findOneAndDelete(
//       { _id: req.params.id },
//       req.body
//     );

//     if (!states) {
//       return res.status(400).send({ message: "Id invalido" });
//     }

//     return res.status(204).send();
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });
// export default StateRouter;
