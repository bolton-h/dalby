document.addEventListener('DOMContentLoaded', function() {
    const tableClasses = ['enquiriesTable', 'pendingTable', 'liveTable', 'agreedTable', 'completedTable'];

    tableClasses.forEach(function(tableClass) {
        let tableElement = document.querySelector('.' + tableClass);
        if (tableElement) {
            tableElement.addEventListener('click', function() {
                let content = this.nextElementSibling;
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });
        }
    });
});
