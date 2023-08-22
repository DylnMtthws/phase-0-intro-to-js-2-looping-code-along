function writeCards(namesArray, eventName) {
    const thankYouMessages = [];
  
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  
  const names = ["Guadalupe", "Ollie", "Aki"];
  const event = "surprise";
  const messages = writeCards(names, event);
  console.log(messages);
  



  
function countDown(startingNumber) {
    let currentNumber = startingNumber;
    while (currentNumber >= 0) {
      console.log(currentNumber);
      currentNumber--;
    }
  }
  
  