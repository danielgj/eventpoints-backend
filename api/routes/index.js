var indexRouter = new Route({
    id: 'staticRoute',
    path: '/api/v1/',
    cors: true
}, function(gw) {
    gw.json({message: "Up and runing"});
});

module.exports = indexRouter;
