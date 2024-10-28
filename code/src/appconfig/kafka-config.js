"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = void 0;
var kafkajs_1 = require("kafkajs");
var kafkaConfig = { brokers: ['localhost:9092'] };
exports.kafka = new kafkajs_1.Kafka(kafkaConfig);
