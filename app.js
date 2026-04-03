
const transactions = [];


function addTransaction() {
  const productCode = document.getElementById("productCode").value;
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(
    document.getElementById("productPrice").value
  );
  const quantity = parseInt(document.getElementById("quantity").value);

  const total = productPrice * quantity;

  
  transactions.push({
    code: productCode,
    name: productName,
    price: productPrice,
    qty: quantity,
    total: total,
  });

  
  updateTable();

  
  calculateTotalPayment();
}


function updateTable() {
  const tableBody = document.getElementById("transactionBody");

  tableBody.innerHTML = "";

  
  transactions.forEach((transaction) => {
    const row = tableBody.insertRow();
    row.insertCell().textContent = transaction.code;
    row.insertCell().textContent = transaction.name;
    row.insertCell().textContent = transaction.price;
    row.insertCell().textContent = transaction.qty;
    row.insertCell().textContent = transaction.total;
  });
}


function calculateTotalPayment() {
  const totalPaymentElement = document.getElementById("totalPayment");
  const totalPayment = transactions.reduce(
    (total, transaction) => total + transaction.total,
    0
  );


  const userPayment = parseFloat(
    prompt(`Total Pembayaran: ${totalPayment}\nMasukkan jumlah pembayaran:`)
  );

  if (isNaN(userPayment)) {
    alert("Input tidak valid. Harap masukkan angka.");
    return;
  }

  const change = userPayment - totalPayment;
  alert(`Pembayaran berhasil!\nKembalian: ${change}`);
  totalPaymentElement.textContent = `Total Pembayaran: ${totalPayment}`;
}
