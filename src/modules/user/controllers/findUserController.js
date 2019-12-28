export default function buildFindUserController({ findUser }) {
  return async function findUserController(req, res, next) {
    const username = req.params.username;
    try {
      const user = await findUser(username);
      res.status(200).json({
        data: user
      });
    } catch (err) {
      next(err);
    }
  }
}
