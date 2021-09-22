const { connect } = require("./client");
const { setupInput } = require("./input")

console.log("Connecting ...");
const connectionReturn = connect();
setupInput(connectionReturn);