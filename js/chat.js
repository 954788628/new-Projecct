$(function(){
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui()

    $('#btnSend').on('click', function() {
        var text = $('#ipt').val().trim();
        if(text.length <= 0) {
            return $('#ipt').val('');
        }

        $('.talk_list').append(' <li class="right_word"><img src="./img/person02.png" alt=""><span>'+ text +'</span></li>')
        $('#ipt').val('')
        resetui()

        getMsg(text);
    })

    $('#ipt').on('keyup', function(e) {
        if(e.keyCode === 13) {
            $('#btnSend').click();
        }
    })
  })
  
  function getMsg(text) {
    $.ajax({
        method: 'POST',
        url: 'http://www.liulongbin.top:3006/api/robot',
        data: {
            spoken: text
        },
        success: function(res) {
            if(res.message === 'success') {
                var msg = res.data.info.text;
                $('.talk_list').append(' <li class="left_word"><img src="./img/person01.png" alt=""><span>'+ msg +'</span></li>')
                resetui()

            }
        }
    })
  }