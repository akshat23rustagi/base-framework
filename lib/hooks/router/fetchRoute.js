// Purpose : To fetch all routes from the application by creating router for each module

const path = require('path');
const fs = require('fs');

const getRouter = (app) => {
    return app.Router();
};

const attachRoutes = (router, basePath) => {
    const versionPath = fs.readdirSync(basePath).map(version => path.join(basePath, version));
    versionPath.forEach((path) => {
        fs.readdirSync(path).map(v => console.log(v));
    });
    
};

const fetchRoutes = (app) => {
    // fetch routes from `routes` folder
    const basePath = process.env.BASE_PATH || path.join(__dirname, '..', '..', '..', 'routes');
    const router = getRouter(app);
    attachRoutes(router, basePath);
};

exports = module.exports = fetchRoutes