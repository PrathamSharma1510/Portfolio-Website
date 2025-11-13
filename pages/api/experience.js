// pages/api/experience.js
import data from './experience.json';

export default function handler(req, res) {
  res.status(200).json(data);
}