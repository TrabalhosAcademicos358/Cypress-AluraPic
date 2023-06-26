const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "reporter": "mochawesome",
    "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss"
    }    
  },
  projectId: "t8i5mk",
  baseUrl: "https://alura-fotos.herokuapp.com",
  baseUrlApi: "https://apialurapic.herokuapp.com/"
});
