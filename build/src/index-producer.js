"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkaProducerService_1 = require("./services/kafkaProducerService");
const shipmentLossEventModel_1 = require("./models/shipmentLossEventModel");
const shipmentLossEvent = new shipmentLossEventModel_1.ShipmentLossEventModel("READY_FOR_DELIVERY_DHL", "2022-05-01T07:49:12.642Z", "0939898h476", [{ positionItemId: "lhfanagjaodga", salesOrderId: "afiajaifajai" }], "432575hsjfhdsjg", { carrier: "DHL", trackingNumber: "003404340953589324" }, "test.com");
new kafkaProducerService_1.KafkaProducerService(shipmentLossEvent).runProducer().catch(e => console.log(e));
