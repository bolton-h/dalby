document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('click', function(event) {
        // If the clicked element is an input, stop further processing
        if (event.target.tagName === 'INPUT') {
            event.stopPropagation();
            return;
        }

        // Revert any other editing rows back to regular state
        const currentEditingRow = document.querySelector('tr.editing');
        if (currentEditingRow) {
            saveChanges(currentEditingRow);
        }

        const row = this.parentElement;
        row.classList.add('editing');  // Add a class for styling
        
        // Convert each cell in the row to an input field
        row.querySelectorAll('td').forEach(td => {
            const input = document.createElement('input');
            input.value = td.textContent;
            td.textContent = ''; // Clear the cell content
            td.appendChild(input);
        
            // Adjust the width of the input to match its content
            input.style.width = `${input.scrollWidth}px`;

            // Stop propagation when input is clicked
            input.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    });
});

// Listen for the Enter key or a click outside the row to save changes
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const editingRow = document.querySelector('tr.editing');
        if (editingRow) {
            saveChanges(editingRow);
        }
    }
});
document.addEventListener('click', function(event) {
    if (!event.target.closest('tr.editing')) {
        const editingRow = document.querySelector('tr.editing');
        if (editingRow) {
            saveChanges(editingRow);
        }
    }
});

function saveChanges(row) {
    row.querySelectorAll('td').forEach(td => {
        const input = td.querySelector('input');
        if (input) {
            td.textContent = input.value;
            input.remove();
        }
    });
    row.classList.remove('editing');
    
    // TODO: Save the changes to the database
}
