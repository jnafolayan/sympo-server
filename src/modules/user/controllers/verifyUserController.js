export default function buildVerifyUserController({ verifyUser }) {
  return async function verifyUserController(req, res, next) {
    try {
      const user = await verifyUser(req.body);
      res.status(200).json({
        data: user
      });
    } catch (err) {
      next(err);
    }
  }
}
