const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    API_URL: "https://strapigift.herokuapp.com",
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./scripts/generate-sitemap");
    }

    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
