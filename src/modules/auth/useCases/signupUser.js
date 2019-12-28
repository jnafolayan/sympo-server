export default function buildSignupUser({ createUser, createRestError, generateJWT }) {
  return async function signupUser(userDTO) {
    const data = await createUser(userDTO);
    const token = generateJWT({ id: data._id, email: data.email });
    return { ...data, token };
  }
}