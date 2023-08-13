window.addEventListener('scroll', function() {
    var headers = document.querySelectorAll('.category-header td');
    var viewportHeight = window.innerHeight;

    headers.forEach(function(header) {
        var rect = header.getBoundingClientRect();
        if (rect.top <= viewportHeight && rect.bottom >= 0) {
            header.style.position = 'sticky';
            header.style.top = (viewportHeight / 2 - header.offsetHeight / 2) + 'px';
        } else {
            header.style.position = 'static';
        }
    });
});
