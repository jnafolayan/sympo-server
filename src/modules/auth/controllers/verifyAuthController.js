export default function buildVerifyAuth({ decodeJWT, createRestError }) {
  return async function verifyAuth(req, res, next) {
    const auth = req.headers["authorization"];
    let match;

    if (auth && (match = /Bearer (\S+)/gi.exec(auth))) {
      try {
        const user = await decodeJWT(match[1])
        // attach user to request
        req.user = user;
        next();
      } catch (err) {
        switch (err.name) {
          case "TokenExpiredError":
            next(createRestError(403, "Your access token has expired", "TOKEN_EXPIRED"))
            break;
          case "JsonWebTokenError":
          default:
            next(createRestError(403, "There is an issue with your access token", "JWT_MALFORMED"))
            break;
        }
      }
    } else {
      next(createRestError(401, "Authorization required", "AUTH_REQUIRED"))
    }
  }
}