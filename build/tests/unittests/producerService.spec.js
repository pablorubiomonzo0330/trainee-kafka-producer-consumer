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
const kafkaProducerService_1 = require("../../src/services/kafkaProducerService");
const shipmentLossEventModel_1 = require("../../src/models/shipmentLossEventModel");
jest.mock("../../src/appconfig/kafka-config", () => {
    return {
        KafkaConfig: jest.fn().mockImplementation(() => {
            return {
                getKafkaInstance: jest.fn().mockReturnValue({
                    producer: jest.fn().mockReturnValue({
                        connect: jest.fn().mockResolvedValue(undefined),
                        send: jest.fn().mockResolvedValue(undefined),
                        disconnect: jest.fn().mockResolvedValue(undefined),
                    }),
                }),
            };
        }),
    };
});
describe("ProducerService test suite", () => {
    it("should send a message to the broker", () => __awaiter(void 0, void 0, void 0, function* () {
        // Given
        const shipmentLossEvent = new shipmentLossEventModel_1.ShipmentLossEventModel("TEST_JEST", "2022-05-01T07:49:12.642Z", "093989849476", [{ positionItemId: "lhfanagjaodga", salesOrderId: "afiajaifajai" }], "432575hsjfhdsjg", { carrier: "DHL", trackingNumber: "003404340953589324" }, "test.com");
        const producerService = new kafkaProducerService_1.KafkaProducerService(shipmentLossEvent);
        const producerConnect = jest.spyOn(producerService['producer'], 'connect');
        const producerSend = jest.spyOn(producerService['producer'], 'send');
        // When
        yield producerService.runProducer();
        // Then
        expect(producerConnect).toHaveBeenCalled();
        expect(producerSend).toHaveBeenCalled();
    }));
});
