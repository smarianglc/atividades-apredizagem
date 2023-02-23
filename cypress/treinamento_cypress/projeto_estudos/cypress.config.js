const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "reporter": "mochawesome",
    "reporterOptions":{
        "reportDir": "cypress/reports/mochawesome-report",
        "overwrite": true,
        "html": true,
        "json": false,
        "timestamp": "YYYYMMDD_HHmmss"
    },
  },
});


