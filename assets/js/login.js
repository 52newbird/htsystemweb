$(function () {
  // 点击“去注册账号”的链接
  $('.creatUser').on('click', function () {
    $('#toLogin').hide()
    $('#toCreat').show()
  })

  // 点击“去登录”的链接
  $('.toGet').on('click', function () {
    $('#toLogin').show()
    $('#toCreat').hide()
  })

  //注册表单 注册
  $("#toCreat").on("submit", function (e) {
    e.preventDefault()
    // console.log(123);
    $.post("/api/reguser",
      {
        username: $("#toCreat [name=username]").val(),
        password: $("#toCreat [name=password]").val()
      }, function (res) {
        if (res.status !== 0) {
          return console.log(res.message);
        }
        //判断两次输入密码是否一致
        var password = $("#toCreat [name=password]").val()
        var repassword = $("#toCreat [name=repassword]").val()
        if (password !== repassword) {
          return setTimeout(function () {
            alert("密码不一致")
            password = ""
            repassword = ""
            e.preventDefault()
          }, 1000)
        }
        alert("恭喜您注册成功，请点击去登录")
      })
  })
  //登录表单 登录
  $("#toLogin").on("submit", function (e) {
    e.preventDefault()
    $.ajax({
      url: "/api/login",
      method: "post",
      //快速获取表单中的数据
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          return setTimeout(function () {
            alert("登录失败,用户名或密码错误")
          }, 1000)
        }
        console.log(res.token);

        localStorage.setItem("userToken", res.token)
        $('#login-success').removeClass('d-none');
        // e.preventDefault()
        setTimeout(function () {
          location.href = "../index.html"
        }, 1000);
      }
    })
  })
})