let Num1, Num2, Operator, Result;
function InputNum1() {
  Num1 = +prompt("Enter First Number: ");
}
function InputNum2() {
  Num2 = +prompt("Enter Second Number: ");
}
function Subtraction() {
  Result = Num1 - Num2;
}
function Addition() {
  Result = Num1 + Num2;
}
function Multiplication() {
  Result = Num1 * Num2;
}
function Division() {
  Result = Num1 / Num2;
}
function InputOpeartion() {
  Operator = prompt("Enter opearation: +,-,* or /");
}
function Output() {
  //   alert("Result ", Num1, "Operator ", Num2, "is", Result);
  alert("Result is: " + Result);
}
function Results() {
  switch (Operator) {
    case "-":
      Subtraction();
      Output();
      break;
    case "+":
      Addition();
      Output();
      break;
    case "*":
      Multiplication();
      Output();
      break;
    case "/":
      if (Num2 == 0) {
        alert("can't divide by zero");
        break;
      } else {
        Division();
        Output();
        break;
      }
    default:
      alert("Opeartion Not correct");
  }
}
InputNum1();
InputNum2();
InputOpeartion();
Results();
