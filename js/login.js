$(function () {

    let count = 0
    $(".name").bind("input propertychange", function (event) {


        var val = $(".name").val()

        var arrlist = ['aaa11111']


        if (val.length >= 4) {
            if(val == '有限责任公司' || val == '无限责任公司' || val == '股份公司'){
                
                $('.choosebox').addClass('disappear');
            }else{
                count++
                // 这里发送请求到后端请求到数据复赋值给arrlist
                if (count == 1) {
    
                    $('.choosebox').html('')
    
                    for (let i = 0; i < arrlist.length; i++) {
                        let str = '<li>' + arrlist[i] + '</li>'
                        $(str).appendTo('.choosebox').on('click', function () {
                            let bewstr = $(this).eq(0).text()
                         
                            $(".name").val(bewstr)
                            count = 0
                            $('.choosebox').addClass('disappear');
                        });
                    }
    
    
                    $('.choosebox').removeClass('disappear');
    
                } else {
                    count = 2
                }
            }
           

        } else {
            count = 0
            $('.choosebox').addClass('disappear');
        }

    });

    $('.btn').on('click', function () {
        let nowval = $(".name").val()
        
        if (nowval.length <= 4 && nowval.length > 0) {
            alert('单位名称输入不正确')
        } else if (nowval != '' && nowval != null) {
            // 如果单位不为空就向后端发送请求，查询是否存在该单位
            $(".name").val("")
            window.location.href = "./index.html?unitname=" + nowval;

        } else {
            alert('请输入名称')
        }

    })



})