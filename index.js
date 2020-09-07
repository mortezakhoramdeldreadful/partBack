let events = require('events');
const fs = require('fs')
const Server = require("my-server-part-morteza");
const Router = require("my-router-part-morteza")
let eventEmitter = new events.EventEmitter();
let router = new Router(eventEmitter)
const appDirectory = 'app/';
readAllRoutes().then((r) => {
    router.setRoutes(r)
    console.log(r)
})
let server = new Server("127.0.0.1", 8585, router)
server.start()

async function readAllRoutes() {
    let routes = {}
    await fs.readdirSync(appDirectory).forEach(file => {
        for (const property in require('./' + appDirectory + file + '/index.js')) {
            routes[property] = require('./' + appDirectory + file + '/index.js')[property]
        }
    });
    return routes
}
