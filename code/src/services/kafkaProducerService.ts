
import { Kafka } from 'kafkajs';
import {KafkaConfig} from "../appconfig/kafka-config";
import {ShipmentLossEventModel} from "../models/shipmentLossEventModel";
export class KafkaProducerService {
    public producer
    private kafka: Kafka
    private shipmentLossEvent

    constructor(shipmentLossEvent: ShipmentLossEventModel){
        this.kafka = new KafkaConfig().getKafkaInstance()
        this.producer = this.kafka.producer()
        this.shipmentLossEvent = shipmentLossEvent
    }

    public async runProducer(){
        await this.producer.connect();
        await this.producer.send({
            topic: process.env.KAFKA_TOPIC_NAME_PRODUCER as string,
            messages: [
                { value: JSON.stringify(this.shipmentLossEvent) }
            ]
        })

        await this.producer.disconnect();
    }
}


