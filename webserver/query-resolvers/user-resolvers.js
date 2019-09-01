const { UserModel } = require('../data-models/Merchant')
const { packageModel } = require('./utils.js')

async function find (criteria) {
  const query = Object.keys(criteria).length
    ? UserModel.find(criteria).lean()
    : UserModel.find().lean()

  const transactions = await query.exec()

  return packageModel(transactions)
}

async function findOne (id) {
  const query = UserModel.findById(id).lean()
  const transaction = await query.exec()

  return packageModel(transaction)[0] || null
}

module.exports = {
  find,
  findOne
}
