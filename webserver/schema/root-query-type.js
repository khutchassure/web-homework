const graphql = require('graphql')
const TransactionType = require('./transaction-type')
const UserType = require('./user-type')
const MerchantType = require('./merchant-type')
const Transactions = require('../query-resolvers/transaction-resolvers.js')
const Users = require('../query-resolvers/user-resolvers')
const Merchants = require('../query-resolvers/merchant-resolvers')

const {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} = graphql
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    transaction: {
      type: TransactionType,
      args: {
        id: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Transactions.findOne(args.id)
      }
    },
    transactions: {
      type: GraphQLList(TransactionType),
      args: {
        amount: { type: GraphQLFloat },
        credit: { type: GraphQLBoolean },
        debit: { type: GraphQLBoolean },
        description: { type: GraphQLString },
        merchant_id: { type: GraphQLString },
        user_id: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Transactions.find(args)
      }
    },
    user: {
      type: GraphQLList(UserType),
      args: {
        id: { type: GraphQLString },
        dob: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Users.findOne(args.id)
      }
    },
    users: {
      type: GraphQLList(UserType),
      args: {
        id: { type: GraphQLString },
        dob: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Users.find(args)
      }
    },
    merchant: {
      type: GraphQLList(MerchantType),
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Merchants.findOne(args.id)
      }
    },
    merchants: {
      type: GraphQLList(MerchantType),
      args: {
        id: { type: GraphQLString },
        name: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Merchants.find(args)
      }
    }
  })
})

module.exports = RootQuery
