require("dotenv").config();

module.exports = {
  env: {
    REACT_APP_MAPS_API_KEY: REACT_APP_MAPS_API_KEY,
    "http://localhost:8000/api": "http://localhost:8000/api",
  },
};
