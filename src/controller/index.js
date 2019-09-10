import APPRequest from '../controller/request';

export const AppController = {
    
    index(req, res, next) {
        return res.render('index', { title: 'Divine Express' });
    },
    
    trips(req, res, next) {
        res.render('trips', { title: 'Divine Express' });
    },
    
    async terminals(req, res, next) {
        const terminals = await APPRequest.getTerminals();
        res.render('terminals', { title: 'Divine Express', terminals });
    }
};