function errorHandling(err, req, res, next){
  if (err) {
      let status = err.status || 500
      res.json({
          status,
          msg: "AN ERROR OCCURRED: try later"
      })
  }
  next()
}
<<<<<<< HEAD

=======
>>>>>>> 8dff9a0bf6d998070218dd74e2eddb0f44727af3
module.exports = errorHandling;