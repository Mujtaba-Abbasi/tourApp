const express = require('express')
const {getATour, getAllTours, updateTour, deleteTour, addTour, checkID} = require('../controllers/tourControllers')

const tourRouter = express.Router();

tourRouter.param('id', checkID)

tourRouter.route("/").get(getAllTours).post(addTour);
tourRouter.route("/:id").get(getATour).patch(updateTour).delete(deleteTour);

module.exports = tourRouter;