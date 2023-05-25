import "./style.css";
import { sendMassage } from "./producer.js";
import { runConsumer } from "./consumer";

let messageToDisplay = "";

document.querySelector("#app").innerHTML = `
  <div>

      <button id="message" type="button">Message</button>
      <p id="messageDisplay" >${messageToDisplay}</p>
    </div>
  
  </div>
`;

document.querySelector("#message").addEventListener("click", () => {
  console.log("click");
  sendMassage();
  runConsumer().then((message) => {
    console.log(message, "message");
    messageToDisplay = message;
    document.querySelector("#messageDisplay").textContent = messageToDisplay;
  });
});
