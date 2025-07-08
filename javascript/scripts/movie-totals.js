function getMovieProfitTotal() {
    const table = document.getElementById('table');
    const rows = table.rows;
    let trackedTotal = 0;
    let totalSum;
    for(let i = 0; i < rows.length; i++) {
        let numericValue = rows[i].cells[1].innerText.replace(/[^0-9.]/g, "");
        let value = parseFloat(numericValue);
        if(!isNaN(value)) {
            trackedTotal += value;
        }
    }
    totalSum = `$${trackedTotal}M`;
    document.getElementById('total-sum').innerText = totalSum;
}

document.addEventListener('DOMContentLoaded', getMovieProfitTotal);