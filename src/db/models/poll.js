export default function buildPollModel({ mongoose, Schema, uuid }) {
  const optionSchema = new Schema({
    label: {
      type: String,
      required: true
    }
  });

  const pollSchema = new Schema({
    question: {
      type: String,
      required: true
    },
    details: {
      type: String
    },
    options: [optionSchema]
  }, { timestamps: true });

  return mongoose.model("Poll", pollSchema, "polls");
}
