var startTime = (new Date()).getTime();
var  db = connect('log');
var tempArray = []              //声明一个数组
for(let i=0;i<1000;i++){        //循环向数组中放入值
    tempArray.push({num:i});
}
db.test2.insert(tempArray)       //批量一次插入

var runTime = (new Date()).getTime()-startTime;
print ('This run this is:'+runTime+'ms');