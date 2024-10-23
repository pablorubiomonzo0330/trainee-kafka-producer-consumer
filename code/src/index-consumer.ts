import {Consumer} from "./messaging/kafka/consumer";

new Consumer().runConsumer().catch(e => console.log(e))