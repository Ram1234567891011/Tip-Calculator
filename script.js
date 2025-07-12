function updateTipLabel() {
  const tipValue = document.getElementById("tip").value;
  document.getElementById("tip-label").innerText = tipValue + "%";
}

function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);

  if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
    document.getElementById("result").innerHTML = "Please enter valid values.";
    return;
  }

  const tipAmount = bill * (tipPercent / 100);
  const total = bill + tipAmount;
  const perPerson = total / people;

  document.getElementById("result").innerHTML = `
    Tip: ₱${tipAmount.toFixed(2)} <br>
    Total: ₱${total.toFixed(2)} <br>
    Per Person: ₱${perPerson.toFixed(2)}
  `;
}
