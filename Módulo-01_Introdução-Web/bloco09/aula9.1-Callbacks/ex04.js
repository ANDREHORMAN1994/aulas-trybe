// QUESITO 04

// Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature, que imprime a temperatura em Marte.

const messageDelay = (callback) => Math.floor(Math.random() * callback);
// console.log(messageDelay());

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return messageDelay(maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  let message = `Mars temperature is: ${getMarsTemperature()} degree Celsius`;
  setTimeout(() => console.log(message), 5000);
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
