document.getElementById("buttonSubmit").addEventListener("click", function() {
    const urlInput = document.getElementById("urlInput").value;
    const hasilFetchdata = document.getElementById("hasilFetchdata");

    const xhr = new XMLHttpRequest();

    xhr.open("GET", urlInput, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const table = document.createElement("table");
            table.className = "table table-dark table-bordered table-striped";

            // Membuat header tabel
            const tableHead = document.createElement("thead");
            const tableHeaderRow = document.createElement("tr");
            for (const key in data[0]) {
                const th = document.createElement("th");
                th.textContent = key;
                tableHeaderRow.appendChild(th);
            }
            tableHead.appendChild(tableHeaderRow);

            // Membuat baris data
            const tableBody = document.createElement("tbody");
            data.forEach(function (item) {
                const row = document.createElement("tr");
                for (const key in item) {
                    const cell = document.createElement("td");
                    cell.textContent = item[key];
                    row.appendChild(cell);
                }
                tableBody.appendChild(row);
            });

            table.appendChild(tableHead);
            table.appendChild(tableBody);
            hasilFetchdata.innerHTML = "";
            hasilFetchdata.appendChild(table);
        } else {
            console.error("Error:", xhr.statusText);
            hasilFetchdata.innerHTML = "Terjadi kesalahan saat mengambil data.";
        }
    };

    // Mengirim permintaan ke server
    xhr.send();
});
