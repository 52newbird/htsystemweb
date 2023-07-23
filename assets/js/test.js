$(function(){
    $('.dropdown-menu .dropdown-item').on('click', function(e) {
        e.stopPropagation();
      });
      
      $('.dropdown-toggle').on('click', function(e) {
        var $submenu = $(this).next('.dropdown-menu');
        if ($submenu.is(':visible')) {
          $submenu.hide();
        } else {
          $submenu.show();
        }
      });
})