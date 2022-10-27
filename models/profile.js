import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalsSchema = new Schema({
  content: {
    type: String,
    required: true},
  date: Date,
})

const profileSchema = new Schema({
  name: String,
  goals: [goalsSchema],
  meals: [{type: Schema.Types.ObjectId, ref: 'Meal'}],
  exercises: [{type: Schema.Types.ObjectId, ref: 'Exercise'}],
  photo: String
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
