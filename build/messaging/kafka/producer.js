"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
const kafka_config_1 = require("../../appconfig/kafka-config");
const shipmentLossEventSchema_1 = require("../../shipmentLossEventSchema");
class Producer {
    constructor() {
        this.kafka = new kafka_config_1.KafkaConfig().getKafkaInstance();
        this.producer = this.kafka.producer();
        this.shipmentLossEvent = shipmentLossEventSchema_1.shipmentLossEventSchema;
    }
    runProducer() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.producer.connect();
            yield this.producer.send({
                topic: process.env.KAFKA_TOPIC_NAME_PRODUCER,
                messages: [
                    { value: JSON.stringify(shipmentLossEventSchema_1.shipmentLossEventSchema) }
                ]
            });
            yield this.producer.disconnect();
        });
    }
}
exports.Producer = Producer;
