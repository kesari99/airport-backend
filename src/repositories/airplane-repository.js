const CrudRepository  = require('./crud-repository');

const db = require("../models/index");

const { Airplane } = db;
class AirplaneRepository extends CrudRepository {

    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;
