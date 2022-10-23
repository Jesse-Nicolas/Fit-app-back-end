import mongoose from 'mongoose'

const Schema = mongoose.Schema

const weekSchema = new Schema({
  day: {type: Schema.Types.ObjectId, ref: 'Day'},
})

const goalsSchema = new Schema({
  content: String,
})

const profileSchema = new Schema({
  name: String,
  goals: [goalsSchema],
  week: [weekSchema],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
