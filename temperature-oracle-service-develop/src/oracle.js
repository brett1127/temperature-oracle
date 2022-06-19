require("dotenv").config();

import request from "request-promise-native";

import { updateTemperature } from "./ethereum";

const options = { uri: process.env.WEATHER_URL, json: true };

const start = () => {
  request(options)
  .then(parseData)
  .then(updateTemperature)
  .then(restart)
  .catch(error);
};

//获取天气API的温度信息;
const parseData = (body) => {
  return new Promise((resolve, reject) => {
    let temperature;
    try {
      temperature = body.data[0].tem.toString();
    } catch(error) {
      reject(error);
      return;
    }
    resolve({ temperature });
  });
};

const restart = () => {
  wait(process.env.TIMEOUT).then(start);
};

const wait = (milliseconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), milliseconds));
};

const error = (error) => {
  console.error(error);
  restart();
};

export default start;
