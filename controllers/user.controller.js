const users = require('../models/users');
const jwt = require('jsonwebtoken');

module.exports = {

    register: async (req, res) => {
        try {
            const exist = await users.findOne({ $or: [{ email: req.validatedResult.email },{ phoneNumber: req.validatedResult.phoneNumber }] });
            if(exist) {
                return res.status(400).send({status: false, data: { message: 'userdata already existed' } });
            }
            const user = new users(req.validatedResult);
            const result = await user.save();
            const token = await jwt.sign({ id: result._id }, 'shaik');
            res.send({ status: true, data: { token } });
        } catch(err) {
            console.log(err);
            res.status(500).send({ status: false, data: err });
        }
        
    },

    login: async (req, res) => {
        try {
            const user = await users.findOne({ email: req.body.email });
            if(!user) {
                return res.status(400).send({ status: false, data: { message: 'Invalid cerdentainls' } });
            }
            if(req.body.password !== user.password) {
                return res.status(400).send({ status: false, data: { message: 'Invalid cerdentainls' } })
            }
            const token = await jwt.sign({ id: user._id }, 'shaik');
            res.send({ status: true, data: { token } });
 
        } catch(err) {
            console.log(err);
            res.status(500).send({ status: false, data: err });
        }
    },

    getUserProfile: async (req, res) => {
       try {
            const data = await users.findById(req.user.id, { _id: 0, password: 0 });
            if(!data) {
                return res.status(404).send({ status: false, data: { message: 'user details not found'}})
            }
            res.send({ status: true, data })
       } catch(err) {
           console.log(err);
           res.status(500).send({ status: false, data: err });
       }
    },

    updateUserProfile: async (req, res) => {
      try {
        const exist = await users.findById(req.user.id);
        if(!exist) {
            return res.status(404).send({ status: false, data: { message: 'user details not found' } });
        }
        req.validatedUpdate.updatedAt = new Date();
        await users.findByIdAndUpdate(req.user.id, req.validatedUpdate);
        res.send({ status:true, data: { isUpdated: true } });
      } catch(err) {
          res.status(500).send({ status: false, data: err })
      }
    },

    deleteUserProfile: async (req, res) => {
      try {
          const exist = await users.findById(req.user.id);
          if(!exist) {
              return res.status(404).send({ status: false, data: { message: 'user details not found ' } });
          }
        await users.findByIdAndRemove(req.user.id);
        res.send({ status: true, data: { isDeleted: true } });
      } catch(err) {
          res.status(500).send({ status: false, data: err })
      }
    },

    changePassword: async (req, res) => {
       try {
            const user = await users.findById(req.user.id);
            if(!user) {
                return res.status(404).send({ status: false, data: { message: 'user details not found' } });
            }
            if(user.password !== req.validatedChangePassword.oldPassword) {
                return res.status(400).send({ status:false, data: { message: 'invalid old password' } });
            }
            const updateObj = {
                password: req.validatedChangePassword.newPassword,
                updatedAt: new Date()
            }
            await users.findByIdAndUpdate(req.user.id, updateObj);
            res.send({ status: true, data: {isChangePassword: true}});
       } catch(err) {
           res.status(500).send({ status: false, data: err })
       }
    },

    resetPassword: (req, res) => {
        res.send('ResetPassword successfully')
    }
};