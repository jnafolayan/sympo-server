export default function buildCreateUser({ User, createRestError, validateUser, createHash }) {
  return async function createUser(userDTO) {
    const { error, value: dto } = validateUser(userDTO);

    if (error)
      throw createRestError(400, error.message);

    const { username, email, password } = dto;
    const passwordHash = await createHash(password);
    const user = { username, email, passwordHash };

    const userDoc = await User.create(user);

    return {
      _id: userDoc._id
    };
  }
}