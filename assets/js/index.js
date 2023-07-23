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
function getUserInfo() {
  $.ajax({
    url: "/my/userinfo",
    method: "GET",
    success: function (res) {
      if (res.status !== 0) {
        return setTimeout(function () {
          alert("获取用户信息失败!")
        }, 1000)
      }
      console.log(res);
      //渲染用户数据
      getUserConfig(res.data)
    },
    complete:function(res){

    }
  })
}

//渲染用户信息
function getUserConfig(user){
  //设置用户昵称
  var name = user.nickname || user.username
  $(".xiugai").html(name)
  //渲染用户头像
  if(user.user_pic!==null){
    $("#imgg").attr("src",user.user_pic)
  }
}

//退出功能
$("#toIndex").on("click", function () {
  if (confirm("确定要退出登录吗？")) {
    // 1. 清空本地存储中的 token
    localStorage.removeItem('userToken')
    // 2. 重新跳转到登录页面
    location.href = '/login.html'
  }
});
