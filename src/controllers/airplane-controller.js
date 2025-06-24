const {AirplaneService} = require('../services/index');
const { StatusCodes } = require("http-status-codes");

async function createAirplane(req, res) {
    try{
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });

        return res
            .status(StatusCodes.CREATED)
            .json({
                message: 'Airplane created successfully.',
                success: true,
                data: airplane,
                error: {}
            });

    } catch(err) {
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json({
                message: 'Airplane created failed.',
                success: false,
                data: {},
                error: {err}
            });
    }
}

module.exports ={ createAirplane}
