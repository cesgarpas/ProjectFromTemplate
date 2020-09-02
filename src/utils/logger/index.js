"use strict";

const chalk = require("chalk");
const fs = require("fs");

const getISO = () => new Date().toISOString();

const writeLine = msg => {
  fs.appendFile("./log.log", msg + "\n", function(err) {
    if (err) {
      console.log("Logger failed to write line.");
    }
  });
};

const info = msg => {
  let resMsg = getISO() + ": info | " + msg;
  writeLine(resMsg);
  console.log(
    chalk.bold.hex("#5f87d7")(resMsg.split("|")[0]) + "|" + resMsg.split("|")[1]
  );
};

const error = msg => {
  let resMsg = getISO() + ": erro | " + msg;
  writeLine(resMsg);
  console.log(
    chalk.bold.hex("#800000")(resMsg.split("|")[0]) + "|" + resMsg.split("|")[1]
  );
};

const warn = msg => {
  let resMsg = getISO() + ": warn | " + msg;
  writeLine(resMsg);
  console.log(
    chalk.bold.hex("#d78700")(resMsg.split("|")[0]) + "|" + resMsg.split("|")[1]
  );
};

exports.info = info;
exports.error = error;
exports.warn = warn;
