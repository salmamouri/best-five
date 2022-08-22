const ol = document.querySelector("ol");
const allBtn = document.querySelectorAll(".player");
const totalBtn = allBtn.length;
let totalPlayer = 1;
for (let i = 0; i < totalBtn; i++) {
  allBtn[i].addEventListener("click", function (event) {
    console.log(totalPlayer);

    // console.log(event.target.parentNode.children[0].innerText);
    allBtn[i].disabled = true;
    totalPlayer = totalPlayer + 1;
    if (totalPlayer > 6) {
      alert("You Cannot Select More Than 5");
    } else {
      const content = event.target.parentNode.children[0].innerText;
      const liElement = document.createElement("li");
      liElement.classList.add("player");
      liElement.innerText = content;
      ol.appendChild(liElement);
    }
  });
}

document.getElementById("calculate-btn").addEventListener("click", function () {
  const selectedPlayer = ol.childElementCount;
  const perPlayerCost = document.getElementById("per-player-cost").value;
  let totalPlayerCost = selectedPlayer * perPlayerCost;

  let totalPlayerExpense = document.getElementById("player-expense");

  totalPlayerExpense.value = totalPlayerCost;
  console.log(typeof totalPlayerCost);
});

function totalCost(firstV, secondV, thirdV) {
  return firstV + secondV + thirdV;
}

document.getElementById("total-btn").addEventListener("click", function () {
  let managerCostString = document.getElementById("manager-cost").value;

  let managerCost = parseFloat(managerCostString);

  let coachCostString = document.getElementById("coach-cost").value;

  let coachCost = parseFloat(coachCostString);

  let totalPlayerExpenseString =
    document.getElementById("player-expense").value;

  let totalPlayerExpense = parseFloat(totalPlayerExpenseString);
  console.log(typeof managerCost, typeof coachCost, typeof totalPlayerExpense);
  if (
    typeof managerCost !== "number" &&
    typeof coachCost !== "number" &&
    typeof totalPlayerExpense !== "number"
  ) {
    alert("Please Enter Valid Number");
  } else {
    const total = totalCost(managerCost, coachCost, totalPlayerExpense);

    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = total;
  }
});
