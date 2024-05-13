const { Schema, model } = require("mongoose");

const MemberSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    verified: { type: Boolean, default: false },
    verificationCode: { type: String, required: false },
  },
  { timestamps: true }
);



const Member = model("Member", MemberSchema);
module.exports = Member;
