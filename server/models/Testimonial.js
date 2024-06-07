const { Schema, model } = require("mongoose");

const TestimonialSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: Object, required: true },
    photo: { type: String, required: false },
  },
  { timestamps: true, toJSON: { virtuals: true }}
);


const Testimonial = model("Testimonial", TestimonialSchema);
module.exports =  Testimonial;