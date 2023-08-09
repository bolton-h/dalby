document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropbtn');
    
    dropdowns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        var content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  