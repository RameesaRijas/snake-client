let connection;
const setupInput = (conn) => { 
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
//to close on clt+c
const handleUserInput = function (key) {

  if (key === 'm') {
    connection.write("Say: mym");
  }
  // your code here
  if (key === 'w') {
    connection.write("Move: up")
  }
  if(key === 'a') {
    connection.write("Move: left");
  }
  if(key === 's') {
    connection.write("Move: down")
  }

  if(key === 'd') {
    connection.write("Move: right");
  }
  if (key === '\u0003') {
    console.log("Thank you for playing")
    process.exit();
  }
};

module.exports = { setupInput };