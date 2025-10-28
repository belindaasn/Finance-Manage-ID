// FinanceManageID - JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update current date
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('id-ID', options);

    // Button click effects
    const buttons = document.querySelectorAll('.pixel-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'translate(4px, 4px)';
            setTimeout(() => {
                this.style.transform = 'translate(0, 0)';
            }, 100);
        });
    });

    // Save target functionality
    document.getElementById('save-target').addEventListener('click', function() {
        const period = document.getElementById('period-select').value;
        const targetType = document.getElementById('target-type').value;
        const amount = document.getElementById('target-amount').value;
        
        document.getElementById('current-period').textContent = period.toLowerCase();
        document.getElementById('target-display').textContent = formatCurrency(amount);
        
        alert(`Target disimpan!\nPeriode: ${period}\nJenis: ${targetType}\nJumlah: Rp ${formatCurrency(amount)}`);
    });

    // Add transaction functionality
    document.getElementById('add-transaction').addEventListener('click', function() {
        const desc = document.getElementById('transaction-desc').value;
        const amount = document.getElementById('transaction-amount').value;
        const type = document.querySelector('input[name="type"]:checked').value;
        
        if (!desc || !amount) {
            alert('Harap isi keterangan dan jumlah!');
            return;
        }

        const transactionHistory = document.getElementById('transaction-history');
        const newTransaction = document.createElement('div');
        newTransaction.className = `transaction-item ${type}`;
        newTransaction.innerHTML = `
            <strong>${desc}</strong> - Rp ${formatCurrency(amount)}
            <br><small>${new Date().toLocaleDateString('id-ID')}</small>
        `;
        
        transactionHistory.prepend(newTransaction);
        
        // Clear form
        document.getElementById('transaction-desc').value = '';
        document.getElementById('transaction-amount').value = '';
        
        alert(`Transaksi ${type} berhasil ditambahkan!`);
    });

    // Currency formatter
    function formatCurrency(amount) {
        return parseInt(amount).toLocaleString('id-ID');
    }
});
