const mongoose = require("mongoose");
const { Schema } = mongoose;
const { v4 } = require("uuid");

const uuid = () => {
  const tokens = v4().split("-");
  return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
};

//name, pass to field, both type string
const exerciseSchema = new Schema({
  exerciseName: {
    type: String,
    default: null,
  },
  exerciseId: {
    type: String,
    unique: true,
    default: () => uuid(),
  },
  exerciseStartDate: {
    type: Date,
    default: null,
  },
  exerciseEndDate: {
    type: Date,
    default: null,
  },
  exerciseTime: {
    type: Date,
    default: null,
  },
  repeatDate: {
    type: [String],
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
    type: Date,
    default: null,
  },
});

const foodItemSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  calory: {
    type: Number,
    default: null,
  },
});

const foodSchema = new Schema({
  foodList: {
    type: [foodItemSchema],
    default: null,
  },
  foodId: {
    type: String,
    unique: true,
    default: () => uuid(),
  },
  foodCategory: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
    type: Date,
    default: null,
  },
});

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  userFoodList: {
    type: [exerciseSchema],
    default: [],
  },
  userExerciseList: {
    type: [foodSchema],
    default: [],
  },
  lastUpdated: {
    type: Date,
    default: null,
  },
  todayCalory: {
    type: Number,
    default: null,
  },
  joinedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
const Exercise = mongoose.model("Exercise", exerciseSchema);
const Food = mongoose.model("Food", foodSchema);

module.exports = User;
