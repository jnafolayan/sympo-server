export default function buildSignupUserController({ signupUser }) {
  return async function signupUserController(req, res, next) {
    try {
      const { username, email, token } = await signupUser(req.body);
      res.status(201).json({
        data: { username, email, token }
      });
    } catch (error) {
      next(error);
    }
  }
}