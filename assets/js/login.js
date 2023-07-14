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
    $.post("http://127.0.0.1:3007/api/reguser", { username: $("#toCreat [name=username]").val(), password: $("#toCreat [name=password]").val() }, function (res) {
      if (res.status !== 0) {
        return console.log(res.message);
      }
      var password = $("#toCreat [name=password]").val()
      var repassword = $("#toCreat [name=repassword]").val()
      if (password !== repassword) {
        return setTimeout(function () {
          alert("密码不一致")
          password = ""
          e.preventDefault()
        }, 1000)
      }
      console.log(res);
      $('#login-success').removeClass('d-none');
      setTimeout(function () {
        $('#login-success').addClass('d-none');
      }, 1000);
    })
  })
  //登录表单 登录
  $("#toLogin").on("submit", function (e) {
    e.preventDefault()
    $.ajax({
      url: "http://127.0.0.1:3007/api/login",
      method: "post",
      //快速获取表单中的数据
      data: $(this).serialize(),
      success: function (res) {
        if (res.status !== 0) {
          return setTimeout(function () {
            alert("登录失败", res.message)
          }, 1000)
        }
        setTimeout(function () {
          $('#login-success').addClass('d-none');
        }, 1000);
        console.log(res.token);
        localStorage.setItem("userToken",JSON.stringify(res.token))
        e.preventDefault()
        window.location.href = "../index.html"
      }
    })
  })
})



//   // 监听注册表单的提交事件
//   $('#form_reg').on('submit', function(e) {
//     // 1. 阻止默认的提交行为
//     e.preventDefault()
//     // 2. 发起Ajax的POST请求
//     var data = {
//       username: $('#form_reg [name=username]').val(),
//       password: $('#form_reg [name=password]').val()
//     }
//     $.post('/api/reguser', data, function(res) {
//       if (res.status !== 0) {
//         return layer.msg(res.message)
//       }
//       layer.msg('注册成功，请登录！')
//       // 模拟人的点击行为
//       $('#link_login').click()
//     })
//   })

//   // 监听登录表单的提交事件
//   $('#form_login').submit(function(e) {
//     // 阻止默认提交行为
//     e.preventDefault()
//     $.ajax({
//       url: '/api/login',
//       method: 'POST',
//       // 快速获取表单中的数据
//       data: $(this).serialize(),
//       success: function(res) {
//         if (res.status !== 0) {
//           return layer.msg('登录失败！')
//         }
//         layer.msg('登录成功！')
//         // 将登录成功得到的 token 字符串，保存到 localStorage 中
//         localStorage.setItem('token', res.token)
//         // 跳转到后台主页
//         location.href = '/index.html'
//       }
//     })
//   })
// })
