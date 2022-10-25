import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalsSchema = new Schema({
  content: String,
})

const profileSchema = new Schema({
  name: String,
  goals: [goalsSchema],
  days: [{type: Schema.Types.ObjectId, ref: 'Day'}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
