$(function(){
    $(document).on("ready",function() {
        // 手动初始化 Popper.js
        var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
          return new bootstrap.Popover(popoverTriggerEl);
        });
      });
})