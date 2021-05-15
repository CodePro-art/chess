const User = require('../models/user');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');

// ---------------------------------------------------------------- //
// ------------------------ GET functions ------------------------- //
// ---------------------------------------------------------------- //

const getAllUsers = async (req,res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
};

const getUserById = async (req,res) => {
  const _id = req.params.id

  try {
    const user = await User.findById(_id);
    if (!user) return res.status(404).send();
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
};

// ---------------------------------------------------------------- //
// ------------------------ POST functions ------------------------ //
// ---------------------------------------------------------------- //
const insertUsers = async (req,res) => {
  
  const arr = req.body;

  // hashing all user's passwords
  for(let i=0;i<arr.length;i++){
    const hashedPassword = await bcrypt.hash(arr[i].password,8);
    arr[i].password = hashedPassword;
  }

  try {
    User.insertMany(arr);
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send();
  }
};

const loginUser = async (req,res) => {
  try {
    
    const user = await User.findByCredentials(req.body.email, req.body.password);
    console.log(req.body.email)
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    // console.log(e)
    res.status(400).send({ error: { message: 'You have entered an invalid username or password' }, });
  }
};

const logoutUser = async (req,res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => token.token !== req.token);
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

const logoutAllSessions = async (req,res) => {
  try {
    req.user.tokens = []
    await req.user.save()
    res.send()
  } catch (e) {
    res.status(500).send()
  }
};

const createNewUser = async (req,res) => {
  const user = new User(req.body)
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
};


// ---------------------------------------------------------------- //
// ----------------------- PATCH functions ------------------------ //
// ---------------------------------------------------------------- //

const updateUser = async (req,res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) return res.status(400).send({ error: 'Invalid updates!' })
  
  try {
      updates.forEach(update => req.user[update] = req.body[update])
      await req.user.save()
      res.send(req.user)
  } catch (e) {
      res.status(400).send(e)
  }
};


// ---------------------------------------------------------------- //
// ----------------------- DELETE functions ----------------------- //
// ---------------------------------------------------------------- //

const removeUser = async (req,res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).send();
    res.send(user);
    } catch (e) {
      res.status(500).send();
    }
};

// export all module's functions
module.exports = {
  logoutUser,
  logoutAllSessions,
  loginUser,
  insertUsers,
  createNewUser,
  removeUser,
  updateUser,
  getAllUsers,
  getUserById
}
