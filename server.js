try {
    process.loadEnvFile()
} catch (error) {
    console.warn("archivo.env no encontrado, usando variables predeterminadas")
}

const jsonServer = require("json-server")

const server = jsonServer.create()

const middlewares = jsonServer.defaults()

server.use(middlewares)

const routes = jsonServer.router("db.json") //se añaden aquilas rutas basicas de CRUD
server.use(routes)

const PORT = process.env.PORT || 5005

server.listen(PORT, () => {
    console.log(`json server ejecutandose en el puerto ${PORT}`)
    console.log(`acceso local en url http://localhost:${PORT}`)
})