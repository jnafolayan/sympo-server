export default function buildUserModel({ mongoose, Schema, uuid }) {
  const userSchema = new Schema({
    username: {
      type: String,
      required: true,
      index: true
    },
    email: {
      type: String,
      required: true
    },
    passwordHash: {
      type: String
    }
  });

  return mongoose.model("User", userSchema, "users");
}
