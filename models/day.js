import mongoose from "mongoose"


const Schema = mongoose.Schema

const daySchema = new Schema(
  {
    name: String,
    meals: {type: Schema.Types.ObjectId, ref: 'Meal'},
    exercises: {type: Schema.Types.ObjectId, ref: 'Exercise'},
  }
)


const Day = mongoose.model('Day', daySchema)

export { Day }