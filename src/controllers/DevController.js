import axios from 'axios';
import Dev from '../models/Dev.js';
import parseStringToArray from '../utils/ParseStringToArray.js';

export default {
  async index(request, response) {
    const devs = await Dev.find();
    response.status(200).json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    const devExists = await Dev.findOne({ github_username });

    if (devExists)
      return response.status(400).json({ error: 'Dev já cadastrado' });

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringToArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const newDev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });

    response.status(201).json(newDev);
  },
};
