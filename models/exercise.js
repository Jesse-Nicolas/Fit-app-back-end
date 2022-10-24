import mongoose from "mongoose"


const Schema = mongoose.Schema

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    muscle: {
      type: String,
      required: true,
      enum: ['upper back', 'lower back', 'chest', 'abs', 'arms', 'legs']
    },
    equipment: {
      type: String,
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile'},
  }
)


const Exercise = mongoose.model('Exercise', exerciseSchema)

export { Exercise }