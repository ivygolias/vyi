let display = document.getElementById('display');

  function appendNumber(num) {
    if (display.innerText === '0') {
      display.innerText = num;
    } else {
      display.innerText += num;
    }
  }

  function appendOperator(op) {
    const lastChar = display.innerText.slice(-1);
    if ('+-*/'.includes(lastChar)) return;
    display.innerText += op;
  }

  function clearDisplay() {
    display.innerText = '0';
  }

  function calculate() {
    try {
      if (display.innerText.includes('/0')) {
        display.innerText = 'Error';
        return;
      }
      display.innerText = eval(display.innerText);
    } catch {
      display.innerText = 'Error';
    }
  }
