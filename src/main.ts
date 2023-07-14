const logNumberToConsole = (event: MouseEvent) => {
  console.log(event.target.innerHTML);
}

const addNumberButtonEventListeners = () => {
  for (let i = 0; i < 10; i++) {
    const buttonElement = document.getElementById(`button-${i}`);

    if (buttonElement) {
      buttonElement.addEventListener('click', logNumberToConsole);
    } 
  }
}

addNumberButtonEventListeners();
