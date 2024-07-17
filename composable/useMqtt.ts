import { ref, onUnmounted } from "vue";
import mqtt from "mqtt";

export const useMqtt = () => {
  const messages = ref<string[]>([]);

  const client = mqtt.connect("wss://your_mqtt_broker_url");

  client.on("connect", () => {
    client.subscribe("your/topic"); // 구독할 토픽 설정
  });

  client.on("message", (topic, message) => {
    messages.value.push(message.toString());
  });

  onUnmounted(() => {
    client.end(); // 컴포넌트 언마운트 시 연결 종료
  });

  return { messages };
};
