import Dev from '../models/Dev.js';
import parseStringToArray from '../utils/ParseStringToArray.js';

export default {
  async index(request, response) {
    const { latitude, longitude, techs } = request.query;

    const techsArray = parseStringToArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 50000, //distancia em metros
        },
      },
    });

    response.status(200).json(devs);
  },
};
