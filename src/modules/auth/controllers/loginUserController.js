export default function buildLoginUserController({ loginUser }) {
  return async function loginUserController(req, res, next) {
    try {
      const { username, email, token } = await loginUser(req.body);
      res.status(200).json({
        data: { token, username, email }
      });
    } catch (error) {
      next(error);
    }
  }
}