document.addEventListener('DOMContentLoaded', function() {
    
    let employeeId = 1;
    
    
    const addEmployeeForm = document.getElementById('addEmployeeForm');
    if (addEmployeeForm) {
        addEmployeeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            
            const empName = document.getElementById('empName').value.trim();
            const daysWorked = parseFloat(document.getElementById('daysWorked').value);
            const dailyRate = parseFloat(document.getElementById('dailyRate').value);
            let deductionAmount = parseFloat(document.getElementById('deductionAmount').value) || 0;
            
            
            const grossPay = daysWorked * dailyRate;
            
            
            const deduction = deductionAmount > 0 ? deductionAmount : grossPay * 0.1;
            const netPay = grossPay - deduction;
            
            
            const tbody = document.getElementById('employeeTableBody');
            const newRow = document.createElement('tr');
            
            
            newRow.innerHTML = `
                <td>${employeeId++}</td>
                <td>${empName}</td>
                <td>${daysWorked}</td>
                <td>₱${dailyRate.toFixed(2)}</td>
                <td>₱${grossPay.toFixed(2)}</td>
                <td>₱${deduction.toFixed(2)}</td>
                <td>₱${netPay.toFixed(2)}</td>
            `;
            
            
            const deleteCell = document.createElement('td');
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = function() {
                const empId = newRow.cells[0].textContent;
                
                
                msgEl.textContent = `Are you sure you want to delete employee with ID ${empId}?`;
                
                
                modalEl.dataset.rowId = newRow.rowIndex;
                
                
                msgEl.textContent = `Delete employee with ID ${empId}?`;
                
                
                bsModal.show();
                
                
                btnConfirm.onclick = function() {
                    
                    document.getElementById('modal2Msg').textContent = `Delete employee with ID ${empId}?`;
                    
                    
                    bsModal.hide();
                    bsModal2.show();
                };
                
                
                document.getElementById('modal2ConfirmBtn').onclick = function() {
                    if (newRow && newRow.parentNode) {
                        newRow.remove();
                        updateTotals();
                    }
                    bsModal2.hide();
                };
                
                
                btnCancel.onclick = function() {
                    bsModal.hide();
                };
            };
            deleteCell.appendChild(deleteBtn);
            newRow.appendChild(deleteCell);
            
            
            tbody.appendChild(newRow);
            
            
            updateTotals();
            
            
            addEmployeeForm.reset();
        });
    }
    
    
    function updateTotals() {
        const tbody = document.getElementById('employeeTableBody');
        const rows = tbody.getElementsByTagName('tr');
        let totalNet = 0;
        
        
        for (let row of rows) {
            const cells = row.getElementsByTagName('td');
            if (cells.length >= 7) { 
                totalNet += parseFloat(cells[6].textContent.replace('₱', ''));
            }
        }
        
        
        const totalNetElement = document.getElementById('totalNet');
        if (totalNetElement) {
            totalNetElement.textContent = `₱${totalNet.toFixed(2)}`;
        }
    }
    const modalEl = document.getElementById("confirmModal");
    const bsModal = new bootstrap.Modal(modalEl);
    const modalEl2 = document.getElementById("confirmModal2");
    const bsModal2 = new bootstrap.Modal(modalEl2);
    const msgEl = document.getElementById("modalMsg");
    const btnClear = document.getElementById("btnclear");
    const btnConfirm = document.getElementById("modalConfirmBtn");
    const btnCancel = document.getElementById("modalCancelBtn");
    const btnDelete = document.getElementById("btndelete");
    const empIdInput = document.getElementById("empid");
    const tbody = document.querySelector("table tbody");
    let pendingAction = null;

    btnClear.addEventListener("click", ()=> {
        msgEl.textContent = "Clear the list?";
        pendingAction = "clear";
        bsModal.show();
    });

    btnDelete.addEventListener("click", ()=> {
        const id = (empIdInput?.value || "").trim();
        if (id) {
            modalEl.dataset.targetId = id;
            msgEl.textContent = `Delete employee with ID ${id}?`;
            pendingAction = "delete";
        } else {
            delete modalEl.dataset.targetId;
            msgEl.textContent = "Delete the last employee?";
            pendingAction = "delete-any";
        }
        bsModal.show();
    });

    
    btnConfirm.addEventListener("click", ()=> {
        bsModal.hide();
        bsModal2.show();
    });

    
    document.getElementById("modal2ConfirmBtn").addEventListener("click", ()=> {
        if (pendingAction === "clear") {
            if (tbody) tbody.innerHTML = "";
        } else if (pendingAction === "delete") {
            const targetId = modalEl.dataset.targetId;
            if (tbody && targetId) {
                const rows = Array.from(tbody.rows);
                let removed = false;
                for (const row of rows) {
                    const firstCellText = row.cells[0]?.textContent?.trim();
                    if (firstCellText === targetId) {
                        row.remove();
                        removed = true;
                        break;
                    }
                }
            }
        } else if (pendingAction === "delete-any") {
            if (tbody && tbody.rows.length > 0) {
                tbody.lastElementChild.remove();
            } else {
                alert("There are no employees to delete.");
            }
        }
        pendingAction = null;
        bsModal2.hide();
    });

    btnCancel.addEventListener("click", ()=> {
        
        pendingAction = null;
    });
    
    document.getElementById("modal2CancelBtn").addEventListener("click", ()=> {
        pendingAction = null;
    });
});
