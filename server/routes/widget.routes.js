const WidgetController = require('../controllers/widget.controller');

module.exports = app =>{
    app.get('/api/widgets', WidgetController.index);
    app.get('/api/widgets/:id', WidgetController.findOneWidget);
    app.post('/api/widgets/:id', WidgetController.createWidget);
    app.put('/api/widgets/:id', WidgetController.updateWidget );
    app.delete('/api/widgets/:id', WidgetController.deleteWidget);
}