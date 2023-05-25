import kafka from "./kafkaInit";

const consumer = kafka.consumer();

export const runConsumer = async () => {
  console.log("runConsumer");
  const messages = await consumer.consume({
    consumerGroupId: "group_1",
    instanceId: "instance_1",
    topics: ["blabla"],
    autoOffsetReset: "earliest",
  });
  const messageValues = messages.map((message) => message.value.toString());

  return messageValues;
};

runConsumer().catch((error) => {
  console.error("Error consuming messages", error);
});
