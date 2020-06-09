
if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: "mongodb+srv://nasr:099013090@vue-qynta.mongodb.net/mevn-auth?retryWrites=true&w=majority",
    secret: "secret"
  }
} else {
  module.exports = {
    mongoURI: "mongodb://localhost:27017/mevn",
    secret: "secret"
  }

}