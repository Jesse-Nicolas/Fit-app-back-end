import mongoose from "mongoose"


const Schema = mongoose.Schema

const exerciseSchema = new Schema(
  {
    name: String,
    reps: Number,
    muscle: String,
    equipment: String,
    author: { type: Schema.Types.ObjectId, ref: 'Profile'},
  }
)


const Exercise = mongoose.model('Exercise', exerciseSchema)

export { Exercise }