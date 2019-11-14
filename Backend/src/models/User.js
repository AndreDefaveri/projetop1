const { Schema, model } = require("mongoose")

const UserSchema = new Schema(
  {
    email: String
  },
  {
    nome: String
  },
  {
    senha: String
  },
 { token: String },
  {
    timestamps: true
  }
)

module.exports = model("User", UserSchema)
