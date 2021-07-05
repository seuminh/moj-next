const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        baseURL: "http://localhost:3000",
      },
    };
  }

  return {
    env: {
      baseURL: "https://test.khambodiahr.com",
    },
  };
};
