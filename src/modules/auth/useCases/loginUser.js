export default function buildLoginUser({ verifyUser, createRestError, generateJWT }) {
  return async function loginUser(userDTO) {
    const data = await verifyUser(userDTO);
    const token = generateJWT({ id: data._id, email: data.email });
    return { ...data, token };
  }
}