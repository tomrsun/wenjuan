$(function () {

    var searchUrl = window.location.href;
    var searchData = searchUrl.split("=");
    var searchText = decodeURI(searchData[1]);

    var strlist = {

        one: '',
        two: '',
        three: [],
        four: [],
        five: '',
        six: "",
        seven: '',
        eight: "",
        nine: [],
        ten: '',
        eleven: '',
        twlve: '',
        unitname: searchText,
    }


    $(".choose-box li").click(function (e) {

        let name = $(this).eq(0).attr('class').split('-')[0]

        if (name == 'three' || name == "four") {


            $(this).find(".radio-box").addClass("selected")

            var n = 0
            var str = $(this).find(".radio-box input").val()

            if (strlist[name].length == 0) {
                if (str.indexOf("其它") != -1) {

                    $("#" + name).removeClass("disapper");

                }
                strlist[name].push(str)
                n++
            } else {
                for (let i = 0; i < strlist[name].length; i++) {
                    if (str == strlist[name][i]) {
                        $(this).find(".radio-box").removeClass("selected")

                        if (str.indexOf("其它") != -1) {
                            $("#" + name).addClass("disapper");
                            $("#" + name + " .other").val("")
                        }

                        strlist[name].splice(i, 1)
                        n++
                    }
                }

            }

            if (n == 0) {
                if (str.indexOf("其它") != -1) {

                    $("#" + name).removeClass("disapper");

                }
                strlist[name].push(str)
            }


        } else if (name == "nine") {



            var n = 0
            var str = $(this).find(".radio-box input").val()

            if (strlist[name].length == 0) {
                if (str.indexOf("其它") != -1) {

                    $("#" + name).removeClass("disapper");

                }
                strlist[name].push(str)
                n++
                $(this).find(".radio-box").addClass("selected")
            } else if (strlist[name].length == 5) {

                n++
                for (let i = 0; i < strlist[name].length; i++) {
                    if (str == strlist[name][i]) {
                        $(this).find(".radio-box").removeClass("selected")

                        if (str.indexOf("其它") != -1) {
                            $("#" + name).addClass("disapper");
                            $("#" + name + " .other").val("")
                        }

                        strlist[name].splice(i, 1)
                        n++

                    }
                }
            } else {
                $(this).find(".radio-box").addClass("selected")
                for (let i = 0; i < strlist[name].length; i++) {
                    if (str == strlist[name][i]) {
                        $(this).find(".radio-box").removeClass("selected")
                        if (str.indexOf("其它") != -1) {
                            $("#" + name).addClass("disapper");
                            $("#" + name + " .other").val("")
                        }


                        strlist[name].splice(i, 1)
                        n++

                    }
                }

            }

            if (n == 0) {

                if (str.indexOf("其它") != -1) {

                    $("#" + name).removeClass("disapper");

                }
                strlist[name].push(str)
                $(this).find(".radio-box").addClass("selected")
            }

        } else {
            $(this).find(".radio-box").addClass("selected")

            $(this).siblings().find(".radio-box").removeClass("selected")

            strlist[name] = $(this).find(".radio-box input").val()
        }



    });

    function getstrval(name) {

        var str = $("#" + name + " .other").val()

        for (let i = 0; i < strlist[name].length; i++) {

            if (strlist[name][i].indexOf('其它') != -1) {
                if (str == "") {
                    alert("请填写其他原因")
                } else {
                    strlist[name][i] = 'Z.' + str
                }

            }

        }
    }

    $(".tijiao").click(function (e) {

        var arr = ["three", "four", "nine"]

        for (let i = 0; i < arr.length; i++) {
            getstrval(arr[i])
        }
        strlist.ten = $(".ten").find("input").val()
        // 验证电话格式是否正确
        var phone = $(".eleven").find("input").val()
        var fixphone1 = $(".quhao").val()
        var fixphone2 = $(".haoma").val()
        
        if (/^1[3456789]\d{9}$/.test(phone)) {
            strlist.eleven = phone
        } else {

            alert("手机号码有误，请重填");
            return false;
        }
        
        if (/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(fixphone1+fixphone2)) {
            strlist.twlve= fixphone1+fixphone2
        } else {

            alert("固定电话有误，请重填");
            return false;
        }


        var flag = 0
        var n = 0
        for (key in strlist) {

            if (strlist[key] == '' || strlist[key] == null) {

                $(".optionbox").eq(n).find("span").addClass("warning")
                flag++
            } else {
                $(".optionbox").eq(n).find("span").removeClass("warning")
            }
            n++

        }


        if (flag == 0) {
            // 发送给后端
            window.location.replace("./end.html")
          
        } else {
            alert("请选择所有必填项")
            n = 0
            flag = 0
        }

        console.log(strlist)
    })
})