export default function buildFindUser({ User, createRestError }) {
  return async function findUser(username) {
    const userDoc = await User.findOne({ username });

    if (!userDoc) 
      return null;
    else
      return {
        _id: userDoc._id,
        username: userDoc.username,
        email: userDoc.email
      };
  }
}