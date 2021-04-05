import { autoInjectable } from "tsyringe";
import BaseController from "./baseController";
import CityService from "@services/cityService";

@autoInjectable()
export default class CityController extends BaseController {
  constructor(service?: CityService) {
    super(service);
  }
}

// // Inserir
// CityRouter.post("/", async (req, res) => {
//   try {
//     const city = await CitySchema.create(req.body);

//     return res.status(201).send({ city });
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });

// // Listar (incluir ordenação e filtro de busca)
// CityRouter.get("/:id?", async (req, res) => {
//   try {
//     const { ordem, ...querys } = req.query;
//     const { id } = req.params;
//     const objectID = id ? { _id: id } : {};
//     const citys = await CitySchema.find({ ...objectID, ...querys });

//     if (!citys) {
//       res.status(400).send({ message: "Recurso não encontrado" });
//     }

//     if (ordem) {
//       const sortedCitys = sortData(citys, ordem);
//       return res.status(200).send({ sortedCitys });
//     }

//     return res.status(200).send({ citys });
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });

// // Alterar - update - put
// CityRouter.put("/:id", async (req, res) => {
//   try {
//     const citys = await CitySchema.findOneAndUpdate(
//       { _id: req.params.id },
//       req.body,
//       { new: true }
//     );

//     if (!citys) {
//       return res.status(400).send({ message: "Id invalido" });
//     }

//     return res.status(200).send({ data: citys });
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });

// // Excluir - deletar - delete
// CityRouter.delete("/:id", async (req, res) => {
//   try {
//     const citys = await CitySchema.findOneAndDelete(
//       { _id: req.params.id },
//       req.body
//     );

//     if (!citys) {
//       return res.status(400).send({ message: "Id invalido" });
//     }

//     return res.status(204).send();
//   } catch (err) {
//     res.status(400).send({ error: err });
//   }
// });
// export default CityRouter;
