const { DataTypes, Model } = require('Sequelize');
const db = require('./database')
const connection = db.connection

class Question extends Model {}

Question.init({
    questionText: {type: DataTypes.STRING, allowNull: false},
    pubDate: {type: DataTypes.DATE}
},
    {sequelize:connection, tableName: 'questions'})

class Choice extends Model {}
Choice.init({
        choiceText: {type: DataTypes.STRING, allowNull: false},
        votes: {type: DataTypes.INTEGER, defaultValue: 0},
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Question,
                key: 'id'
            }
        }
    },
    {sequelize:connection, tableName: 'choices'})

module.exports = {'Question': Question, 'Choice': Choice}