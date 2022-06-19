import { weatherUpdate } from "./ethereum";

const consume = () => {
  weatherUpdate((error, result) => {
    console.log("NEW TEMPERATURE DATA EVENT ON SMART CONTRACT");
    console.log("BLOCK NUMBER: ");
    console.log("  " + result.blockNumber)
    console.log("TEMPERATURE DATA: ");
    console.log(result.args);
    console.log("\n");
  });
};

export default consume;
