// Basic JavaScript for your budget tracker
document.addEventListener('DOMContentLoaded', function() {
    // Add transaction functionality
    const addButton = document.querySelector('.add-button');
    
    addButton.addEventListener('click', function() {
        const keterangan = document.getElementById('keterangan').value;
        const jumlah = document.getElementById('jumlah').value;
        const tipe = document.getElementById('tipe').value;
        
        if (keterangan && jumlah) {
            alert(`Transaksi ditambahkan!\n${keterangan}: Rp ${jumlah} (${tipe})`);
            // Here you would normally add to the transaction list
            document.getElementById('keterangan').value = '';
            document.getElementById('jumlah').value = '';
        } else {
            alert('Harap isi semua field!');
        }
    });
    
    // Set budget functionality
    const setButton = document.querySelector('.set-button');
    
    setButton.addEventListener('click', function() {
        const periode = document.getElementById('periode').value;
        const tipeTarget = document.getElementById('tipeTarget').value;
        const jumlahTarget = document.getElementById('jumlahTarget').value;
        
        if (jumlahTarget) {
            alert(`Target diatur!\nPeriode: ${periode}\nTipe: ${tipeTarget}\nJumlah: Rp ${jumlahTarget}`);
        } else {
            alert('Harap masukkan jumlah target!');
        }
    });
});
