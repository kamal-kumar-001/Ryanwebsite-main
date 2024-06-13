const { Schema, model } = require("mongoose");

const PodcastSchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String },
    slug: { type: String, required: true, unique: true },
    body: { type: Object },
    photo: { type: String, required: false },
    audio: { type: String, required: false },
    youtubeaudio: { type: String, required: false },
    amazonaudio: { type: String, required: false },
    appleaudio: { type: String, required: false },
    spotifyaudio: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String] },
    categories: [{ type: Schema.Types.ObjectId, ref: "PostCategories" }],
  },
  { timestamps: true, toJSON: { virtuals: true } }
);


const Podcast = model("Podcast", PodcastSchema);
module.exports = Podcast;
