/**
 * Created by WG on 2015/10/21.
 * 各种信息的验证
 */

var mo =  mo ||{};

function getFullInfo()
{
    var liArr = $(".wholeCarCate li.act");
    var liLen = liArr.length;
    console.log("liLen:"+liLen);
    for(var i=0;i<liLen;i++){
        var item = $(liArr[i]).children();

        var c1 = $.trim($(item[0]).text());
        var c2 = item[1];

        console.log("======将存储大类:"+c1);
        saveBigCat(c1,function(id){
            (function(c2,c1){
                var list = $(c2).find("li");
                var listLen = list.length;
                console.log("===========已存储大类:"+c1+",其下的小类个数:"+listLen);

                for(var j=0;j<listLen;j++){
                    var listItem = $(list[j]);
                    var data = listItem.attr("data").split(',');
                    var secondText = $.trim(listItem.text());

                    var p = "_=1446184011254@listFlag=1@parentId="+data[0]+"@subCategoryId="+data[1]+"@currentPageNo=";
                    (function(i,secondText,p){
                        addSecondCat(id,secondText,p,function(){
                            console.log("===============已存储第["+(j+1)+"]小类:"+secondText);
                        });
                    })(i,secondText,p);
                }
            })(c2,c1);
        });
    }
}

function saveBigCat(name,fn){
    try {
        $.ajax({
            url: 'http://localhost/users/addBigCat',
            dataType: 'json',
            async: false,
            type: 'POST',
            data: 'name=' + name,
            success: function (json) {
                fn(json.id);
            },
            error: function (msg) {
                console.error(msg);
            }
        });
    }
    catch (ex) {
        console.log(ex);
    }
}

function addSecondCat(pid, name,params,fn) {
    try {
        $.ajax({
            url: 'http://localhost/users/addSecondCat',
            dataType: 'json',
            async: false,
            type: 'POST',
            data: 'id=' + pid + '&name=' + name+"&params="+params,
            success: function (json) {
                fn(json.id);
            },
            error: function (msg) {
                console.error(msg);
            }
        });
    }
    catch (ex) {
        console.log(ex);
    }
};


function initInfo(){
    //初始化信息,并设定执行线程
    try {
        $.ajax({
            url: 'http://localhost/users/getOtherInfo',
            dataType: 'json',
            async: false,
            type: 'POST',
            success: function (json) {
                var len = json.length;
                for(var i=0;i<len;i++){
                    var item = json[i];
                    (function(item){
                        for(var j=1;j<=item.cnt;j++){
                            runArr.push({id:item.id,params:(item.params + j)});
                        }
                    })(item);
                }
                //开启即时器并开始扑捉
                if(runArr.length>0){
                    console.log("一共记录:"+runArr.length+" 记录");
                    start();
                }else{
                    console.log("没有找到对应信息啊 ");
                    stop();
                }
            },
            error: function (msg) {
                stop();
                console.error(msg);
            }
        });
    }
    catch (ex) {
        console.log(ex);
    }
}
