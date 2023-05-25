import { Kafka } from "@upstash/kafka";

const kafka = new Kafka({
  url: import.meta.env.VITE_UPSTASH_KAFKA_REST_URL,
  username: import.meta.env.VITE_UPSTASH_KAFKA_REST_USERNAME,
  password: import.meta.env.VITE_UPSTASH_KAFKA_REST_PASSWORD,
});

export default kafka;
