export default function buildCreateUserController({ createUser }) {
  return async function createUserController(req, res, next) {
    const userDTO = req.body;
    try {
      const user = await createUser(userDTO);
      res.status(201).json({
        data: user
      });
    } catch (err) {
      next(err);
    }
  }
}
