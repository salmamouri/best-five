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
});

document.getElementById("total-btn").addEventListener("click", function () {
  let managerCost = document.getElementById("manager-cost").value;
  //let managerCost = parseFloat(managerCostString);
  let coachCost = document.getElementById("coach-cost").value;
  let totalPlayerExpense = Number(
    document.getElementById("player-expense").value
  );
  console.log(typeof managerCost);
  console.log(coachCost);
  console.log(typeof totalPlayerExpense);
  const totalString =
    parseFloat(managerCost) +
    parseFloat(coachCost) +
    parseFloat(totalPlayerExpense);
  const total = parseFloat(totalString);
  const totalAmount = document.getElementById("total-amount");
  totalAmount.innerText = total;
});
