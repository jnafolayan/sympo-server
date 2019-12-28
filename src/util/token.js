import jwt from "jsonwebtoken";
import * as config from "../config";

export function generateJWT(payload) {
  return jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiry
  });
}

export function decodeJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (err)
        reject(err);
      else
        resolve(decoded);
    });
  });
}