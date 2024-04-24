function solve() {
  let input = {
    make: document.getElementById("make"),
    model: document.getElementById("model"),
    year: document.getElementById("year"),
    fuel: document.getElementById("fuel"),
    originalCost: document.getElementById("original-cost"),
    sellingPrice: document.getElementById("selling-price"),
  };
  let list = document.getElementById("table-body");
  let soldList = document.getElementById("cars-list");

  let publishBtn = document.getElementById("publish");
  publishBtn.addEventListener("click", publish);

  function publish(e) {
    e.preventDefault();

    let make = input.make.value;
    let model = input.model.value;
    let year = input.year.value;
    let fuel = input.fuel.value;
    let originalCost = Number(input.originalCost.value);
    let sellingPrice = Number(input.sellingPrice.value);

    if (
      make == "" ||
      model == "" ||
      year == "" ||
      fuel == "" ||
      originalCost == "" ||
      sellingPrice == "" ||
      originalCost >= sellingPrice ||
      originalCost < 0 ||
      sellingPrice < 0
    ) {
      return;
    }

    let tr = document.createElement("tr");
    tr.className = "row";
    tr.innerHTML = `
      <td>${make}</td>
      <td>${model}</td>
      <td>${year}</td>
      <td>${fuel}</td>
      <td>${originalCost}</td>
      <td>${sellingPrice}</td>
      <td>
      <button class="action-btn edit">Edit</button>
      <button class="action-btn sell">Sell</button>
      </td>
    `;
    list.appendChild(tr);
    input.model.value = "";
    input.year.value = "";
    input.fuel.value = "";
    input.originalCost.value = "";
    input.sellingPrice.value = "";

    let editBtn = list.querySelector(".edit");
    editBtn.addEventListener("click", edit);
    let sellBtn = list.querySelector(".sell");
    sellBtn.addEventListener("click", sell);

    function edit(e) {
      e.currentTarget.parentNode.parentNode.remove();

      input.model.value = make;
      input.year.value = year;
      input.fuel.value = fuel;
      input.originalCost.value = originalCost;
      input.sellingPrice.value = sellingPrice;
    }
    function sell(e) {
      e.currentTarget.parentNode.parentNode.remove();
      let li = document.createElement("li");
      let concat = make + " " + model;
      let profit = Number(sellingPrice) - Number(originalCost);
      li.className = "each-list";
      li.innerHTML = `
      <span>${concat}</span>
      <span>${year}</span>
      <span>${profit}</span>
      `;
      soldList.appendChild(li);

      let profitBox = document.getElementById("profit");
      profitBox.textContent = Math.round(
        Number(profitBox.textContent) + Number(profit)
      ).toFixed(2);
    }
  }
}
