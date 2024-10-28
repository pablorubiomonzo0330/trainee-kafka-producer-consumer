import { KafkaProducerService } from "../../src/services/kafkaProducerService";
import { ShipmentLossEventModel } from "../../src/models/shipmentLossEventModel";
import { KafkaConfig } from "../../src/appconfig/kafka-config"; // Adjust the import path as necessary

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
    it("should send a message to the broker", async () => {
        // Given
        const shipmentLossEvent = new ShipmentLossEventModel(
            "TEST_JEST",
            "2022-05-01T07:49:12.642Z",
            "093989849476",
            [{ positionItemId: "lhfanagjaodga", salesOrderId: "afiajaifajai" }],
            "432575hsjfhdsjg",
            { carrier: "DHL", trackingNumber: "003404340953589324" },
            "test.com"
        );

        const producerService = new KafkaProducerService(shipmentLossEvent);

        const producerConnect = jest.spyOn(producerService['producer'], 'connect');
        const producerSend = jest.spyOn(producerService['producer'], 'send')

        // When
        await producerService.runProducer();

        // Then
        expect(producerConnect).toHaveBeenCalled();
        expect(producerSend).toHaveBeenCalled();
    });
});