const display = document.getElementById("display");
const historyBox = document.getElementById("history");
function toggleTheme() {
    document.body.classList.toggle("light");
  }
function appendValue(value) {
    const last = display.value.slice(-1);
  
    const operators = ["+", "-", "*", "/"];
  
    if (
      operators.includes(last) &&
      operators.includes(value)
    ) {
      return;
    }
  
    display.value += value;
  }
function clearDisplay() {
  display.value = "";
  historyBox.innerHTML = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
      const expression = display.value;
      const result = Function("return " + expression)();
  
      display.value = result;
  
      historyBox.innerHTML += `
        <div>${expression} = ${result}</div>
      `;
  
    } catch {
      display.value = "Error";
    }
  }
  document.addEventListener("keydown", function(e) {

    if (e.key >= "0" && e.key <= "9") {
      appendValue(e.key);
    }
  
    if (["+", "-", "*", "/"].includes(e.key)) {
      appendValue(e.key);
    }
  
    if (e.key === "Enter") {
      calculate();
    }
  
    if (e.key === "Backspace") {
      deleteLast();
    }
  
    if (e.key === "Escape") {
      clearDisplay();
    }
  
  });