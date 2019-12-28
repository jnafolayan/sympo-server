export default function buildVerifyUser({ User, createRestError, validateLogin, compareHash }) {
  return async function verifyUser(userDTO) {
    const { error, value: dto } = validateLogin(userDTO);

    if (error)
      throw createRestError(400, error.message);

    const userDoc = await User.findOne({ username: dto.username });
    if (!userDoc)
      throw createRestError(404, "Account does not exist");

    const verified = await compareHash(dto.password, userDoc.passwordHash);
    if (!verified)
      throw createRestError(401, "Password is incorrect");

    return {
      _id: userDoc._id,
      username: userDoc.username,
      email: userDoc.email
    };
  }
}