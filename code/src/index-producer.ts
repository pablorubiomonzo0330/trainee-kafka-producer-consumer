import {KafkaProducerService} from "./services/kafkaProducerService";

new KafkaProducerService().runProducer().catch(e => console.log(e))