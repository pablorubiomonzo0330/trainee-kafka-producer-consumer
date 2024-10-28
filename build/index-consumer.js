"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consumer_1 = require("./messaging/kafka/consumer");
new consumer_1.Consumer().runConsumer().catch(e => console.log(e));
