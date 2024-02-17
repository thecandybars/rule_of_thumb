const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("people", {
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(30),
    },
    picture: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    lastUpdated: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    votePositive: {
      type: DataTypes.INTEGER,
    },
    voteNegative: {
      type: DataTypes.INTEGER,
    },
  });
};
