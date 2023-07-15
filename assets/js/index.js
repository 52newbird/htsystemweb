$(function () {
  $(document).on("ready", function () {
    // 手动初始化 Popper.js
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl);
    });
  });

  //获取用户信息
  getUserInfo()
})

  //获取用户信息函数
  function getUserInfo(){
    $.ajax({
      url:"http://127.0.0.1:3007/my/userinfo",
      method:"get",
      headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsInVzZXJuYW1lIjoieGlhb3Jhbm5hIiwicGFzc3dvcmQiOiIiLCJuaWNrbmFtZSI6bnVsbCwiZW1haWwiOm51bGwsInVzZXJfcGljIjoiIiwiaWF0IjoxNjg5Mzg4NDc0LCJleHAiOjE2ODk0MjQ0NzR9.eI2tjOQTK_s4rhoA6JuUeVyfsgRyFacjPFkpPGUhQGE"
      },
      success:function(res){
        console.log(res);
        // localStorage.removeItem("userToken")
      }
    })
  }