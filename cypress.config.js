const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task',{
          writeLine(msg) {
            console.log(msg)
            return null
          },
          timeLapse(msg){
            process.stdout.write(msg)
            return null
          }
      }) 

    },
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 300000,
    video: false,
    requestTimeout: 60000,
    responseTimeout: 60000,
  },
});