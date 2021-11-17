const dai = require("./api/dai");
const address = "address";
const request = { query: { address: address } };

const response = {
  status: (state) => {
    return {
      send: log,
    };
  },
};

const log = (result) => {
  console.log(result);
};

dai(request, response);
