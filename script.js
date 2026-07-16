let expenses = [];

const expensename = document.getElementById("expensename");
const expenseamount = document.getElementById("expenseamount");
const expenselist = document.getElementById("expenselist");
const total = document.getElementById("total");
const addbtn = document.getElementById("addbtn");

addbtn.addEventListener("click", addexpense);

function addexpense() {

    const name = expensename.value;
    const amount = Number(expenseamount.value);

    if (name === "" || amount <= 0) {
        alert("Please enter a valid expense");
        return;
    }

    expenses.push({
        name: name,
        amount: amount
    });

    expensename.value = "";
    expenseamount.value = "";

    displayexpense();
}

function displayexpense() {

    expenselist.innerHTML = "";

    let sum = 0;

    expenses.forEach(function (expense) {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${expense.name}</span>
            <span>Rs ${expense.amount}</span>
        `;

        expenselist.appendChild(li);

        sum += expense.amount;
    });

    total.textContent = sum;
}