
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteBtn(tr){
  let deleteBtn = document.createElement('td');
  deleteBtn.innerText = "X";

  tr.append(deleteBtn); 

  deleteBtn.addEventListener('click', deleteBtnClick)
}

function deleteBtnClick(evt){
    evt.target.parentElement.remove();
    evt.target.parentElement.remove();
    let getId = evt.target.parentElement.getAttribute("id")
    delete allServers[getId]
    delete allPayments[getId]
    updateServerTable();
    updateSummary();
}