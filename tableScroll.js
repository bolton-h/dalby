const tableContainers = document.querySelectorAll('.table-container');

tableContainers.forEach(container => {
    container.addEventListener('scroll', function() {
        tableContainers.forEach(innerContainer => {
            if (innerContainer !== container) {
                innerContainer.scrollTop = container.scrollTop;
            }
        });
    });
});
