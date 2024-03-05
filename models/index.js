
const User = require('./User')
const Post = require('./Posts')





User.hasMany(post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
  });

Post.belongsTo(User, {
    foreignKey: 'user_id'
})

module.expports = { User, Post}