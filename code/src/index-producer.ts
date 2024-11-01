import {KafkaProducerService} from "./services/kafkaProducerService";
import {ShipmentLossEventModel} from "./models/shipmentLossEventModel";

const shipmentLossEvent = new ShipmentLossEventModel(
    "READY_FOR_DELIVERY_DHL",
    "2022-05-01T07:49:12.642Z",
    "0939898h476",
    [{positionItemId: "lhfanagjaodga", salesOrderId: "afiajaifajai"}],
    "432575hsjfhdsjg",
    {carrier: "DHL", trackingNumber: "003404340953589324"},
    "test.com"
)
new KafkaProducerService(shipmentLossEvent).runProducer().catch(e => console.log(e))