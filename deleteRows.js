document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const row = this.closest('tr');
        row.remove();
        
        // TODO: Remove the corresponding data from the database
    });
});
