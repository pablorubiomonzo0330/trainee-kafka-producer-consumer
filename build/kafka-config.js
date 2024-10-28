"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kafka = void 0;
const kafkajs_1 = require("kafkajs");
const yaml_1 = require("yaml");
const fs = __importStar(require("fs"));
// To set the configuration from Kafka through environment variables
// const kafkaConfig: KafkaConfig = { brokers: [`${process.env.KAFKA_HOST_NAME}${process.env.KAFKA_PORT}`] }
// Configuration of Kafka with YAML file
const yamlContent = fs.readFileSync("kafka-configuration.yml", "utf8");
const parsedYamlContent = (0, yaml_1.parse)(yamlContent);
const KAFKA_PORT = parsedYamlContent.kafka.bootstrap.servers;
const KAFKA_USERNAME = parsedYamlContent.kafka.username;
const KAFKA_PASSWORD = parsedYamlContent.kafka.password;
const kafkaConfig = {
    brokers: [KAFKA_PORT]
};
exports.kafka = new kafkajs_1.Kafka(kafkaConfig);
