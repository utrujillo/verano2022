module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/customs',
      handler: 'navbar.customAction',
      config: {
        auth: false
      }
    }
  ]
}