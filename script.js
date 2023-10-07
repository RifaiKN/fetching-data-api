const axios = require('axios');

// Fungsi untuk mengambil data dari API menggunakan Axios
function fetchDataFromAPI() {
    axios.get('https://testingalpro.alwaysdata.net/api/getcoffee.php')
        .then(response => {
            const data = response.data;
            const tableHeader = document.getElementById('table-header');

            // Buat kolom-kolom tabel berdasarkan nama kolom dari data pertama
            const firstData = data[0];
            for (const key in firstData) {
                if (firstData.hasOwnProperty(key)) {
                    const th = document.createElement('th');
                    th.textContent = key;
                    tableHeader.appendChild(th);
                }
            }

            const table = document.getElementById('data-table');
            const tbody = table.getElementsByTagName('tbody')[0];

            // Loop melalui setiap objek dalam data dan buat baris tabel
            data.forEach(item => {
                const row = tbody.insertRow();
                for (const key in item) {
                    if (item.hasOwnProperty(key)) {
                        const cell = row.insertCell();
                        cell.innerHTML = item[key];
                    }
                }
            });
        })
        .catch(error => {
            console.error(error);
        });
}

// Panggil fungsi untuk mengambil data saat halaman dimuat
fetchDataFromAPI();
