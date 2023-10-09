// const User = require('../models/user')
const secretKey = process.env.SECRET_KEY
var jwt = require('jsonwebtoken')
const { User } = require('../models')
const { checkPassword, hashPassword } = require('../helpers/bcrypt')
const { signToken, decodeToken } = require('../helpers/jwt')
require('dotenv').config()

module.exports = {
  userRead: async (req, res, next) => {
    try {
      const userInfo = decodeToken(req.headers.token)
      res.status(200).json(userInfo)
    } catch (error) {
      console.log(error)
      next(error)
    }
  },

  userLogin: async (req, res, next) => {
    try {
      if (!req.body.email || !req.body.password)
        throw { name: 'EmailPasswordMissing' }

      const user = await User.findOne({ where: { email: req.body.email } })
      if (!user) throw { name: 'InvalidCredentials' }
      req.body.id = user.dataValues.id

      const isPasswordValid = checkPassword(req.body.password, user.password)
      if (!isPasswordValid) throw { name: 'InvalidCredentials' }

      let { dataValues } = user
      const generatedToken = signToken({
        id: dataValues.id,
        name: dataValues.name,
        email: dataValues.email
      })

      res.status(200).json({ message: 'Login success', token: generatedToken })
    } catch (err) {
      console.log(err)
      next(err)
    }
  },

  userRegister: async (req, res, next) => {
    try {
      const payload = req.body
      const createdUser = await User.create(payload)
      res
        .status(201)
        .json({ message: `User with email ${payload.email} is created` })
    } catch (error) {
      next(error)
    }
  }
}
