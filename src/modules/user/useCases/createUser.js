export default function buildCreateUser({ User, createRestError, validateUser, createHash }) {
  return async function createUser(userDTO) {
    const { error, value: dto } = validateUser(userDTO);

    if (error)
      throw createRestError(400, error.message);

    const { username, email, password } = dto;

    // ensure user doesn't exist
    const foundUser = await User.findOne({ $or: [{ username }, { email }] });
    if (foundUser)
      throw createRestError(422, "User already exists");
    
    const passwordHash = await createHash(password);
    const user = { username, email, passwordHash };

    const userDoc = await User.create(user);

    return {
      username,
      email,
      _id: userDoc._id
    };
  }
}