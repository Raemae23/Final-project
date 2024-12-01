const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
const viewController = require('../controllers/viewController');

router.post('/request', scheduleController.requestSchedule);

router.get('/requests', scheduleController.getAllRequests);

router.get('/updateSched/:id', scheduleController.getRequestById);

router.post('/updateSched/:id', scheduleController.updateRequest);

router.get('/delete-request/:id', scheduleController.deleteRequest);



router.get('/view/:id', viewController.getRequestById);

router.get('/view-del/:id', viewController.deleteRequest);


module.exports = router;
