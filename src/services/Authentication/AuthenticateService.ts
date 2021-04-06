import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import SessionSI from "@interfaces/sessionInterface";
import authConfig from "@configs/authConfig";

export default class AuthenticateService {
  async jwtSign(user: SessionSI, password: string) {
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new Error("Email ou senha incorretos");
    }

    const token = jwt.sign({ id: user._id }, authConfig.secret);
    return {
      token: token,
      user,
    };
  }
}
