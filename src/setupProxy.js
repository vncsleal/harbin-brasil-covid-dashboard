const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy("/v1/dataset/covid19/caso_full/data", {
            target: "https://api.brasil.io",
            secure: false,
            changeOrigin: true
        })
    )
}