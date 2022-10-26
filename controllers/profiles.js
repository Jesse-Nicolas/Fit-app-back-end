import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'
import { Exercise }  from '../models/exercise.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => res.json(profiles))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addPhoto(req, res) {
  const imageFile = req.files.photo.path
  Profile.findById(req.params.id)
  .then(profile => {
    cloudinary.uploader.upload(imageFile, {tags: `${req.user.email}`})
    .then(image => {
      profile.photo = image.url
      profile.save()
      .then(profile => {
        res.status(201).json(profile.photo)
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('exercises')
  .then(profile => {
    Exercise.find({_id: {$nin: profile.exercises}})
    .then (() => {
      res.json(profile)
    })
  })
}

function createGoal(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.goals.push(req.body)
    profile.save()
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function addExercise(rew,res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.exercises.push(req.body.exerciseId)
    profile.save()
    .then(() => {
      res.json(profile)
    })
  })
}

export { index, addPhoto, show, createGoal, addExercise }
function deleteGoal(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.goals.remove({_id: req.params.goalId})
    profile.save()
    res.status(200).json(profile)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

export { index, addPhoto, show, createGoal, deleteGoal, }
