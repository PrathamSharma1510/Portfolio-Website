// pages/api/education.js
import data from './education.json';

export default function handler(req, res) {
  res.status(200).json(data);
}
