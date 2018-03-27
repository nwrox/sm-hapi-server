const routes = server => {
  server.route({
    method:'GET',
    path:'/axios',
    handler: (request, h) => h.file('axios.min.js')
  })

  server.route({
    method:'GET',
    path:'/getSubmit',
    handler: (request, h) => {
      const {
        user,
        password
      } = request.query

      return user && password
        ? `Olá ${user}, a sua senha é ${password}`
        : JSON.stringify(request.query, null, 4)
    }
  })

  server.route({
    method:'GET',
    path:'/hello',
    handler: (request, h) => h.file('giphy.webp')
  })

  server.route({
    method: 'POST',
    path:'/postSubmit',
    handler: (request, h) => {
      const {
        user,
        password
      } = request.payload

      return user && password
        ? `Olá ${user}, a sua senha é ${password}`
        : JSON.stringify(request.query, null, 4)
    }
  })
}

module.exports = routes
