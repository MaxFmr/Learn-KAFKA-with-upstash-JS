import kafka from "./kafkaInit";
const p = kafka.producer();

// Objects will get serialized using "JSON.stringify"
const message = { hello: "world" };

export const sendMassage = async () => {
  const res = await p.produce("blabla", message);
  console.log(res);
};
