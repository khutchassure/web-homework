const mongoose = require('mongoose')
const User = require('./data-models/User').UserModel
const Merchant = require('./data-models/Merchant').MerchantModel


mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true
  })

.then(async () => {
    console.log('seeding')
    await mongoose.connection.db.dropDatabase()
    const users = [
        {
            firstName: 'Kyle',
            lastName: 'Hutch',
            dob: '1/1/1111'
        },
        {
            firstName: 'Joe',
            lastName: 'Schmoe',
            dob: '1/1/1111'
        }
    ];

    const merchants = [
        {name: 'Amazon'},
        {name: 'Wal-Mart'},
        {name: 'Hruskas'}
    ]

    await User.insertMany(users);
    await Merchant.insertMany(merchants);
    console.log('seeded')
    process.exit(0);

})