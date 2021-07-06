const Sequelize = require("sequelize");
const db = require("../db");
const crypto = require("crypto");

const User = db.define("user", {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    alloWNull: false,
    validate: {
      isEmail: true,
    },
  },
  photoUrl: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      min: 6,
    },
    allowNull: false,
    get() {
      return () => this.getDataValue("password");
    },
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue("salt");
    },
  },
  socketId: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: true,
  },
});

User.prototype.correctPassword = function (password) {
  return User.encryptPassword(password, this.salt()) === this.password();
};

User.createSalt = function () {
  return crypto.randomBytes(16).toString("base64");
};

User.encryptPassword = function (plainPassword, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainPassword)
    .update(salt)
    .digest("hex");
};

const setSaltAndPassword = (user) => {
  if (user.changed("password")) {
    user.salt = User.createSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
User.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword);
});

//function to save socketId
User.updateSocket = async function (username, socketId) {
  try {
    await User.update(
      { socketId: socketId },
      { where: { username: username } }
    );
  } catch (err) {
    console.log(err);
  }
};

User.removeSocket = async function (id) {
  try {
    await User.update({ socketId: null }, { where: { id: id } });
  } catch (err) {
    console.log(err);
  }
};

User.getSocket = async function (id) {
  var user;
  try {
    user = await User.findOne({ where: { id: id } });
  } catch (err) {
    console.log(err);
  }
  return user;
};

module.exports = User;
