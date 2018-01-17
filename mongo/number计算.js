var db=connect('company')
// db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
// db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})
// db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}})
// db.workmate.update({name:'xiaoWang',"interest":{$ne:'Game'}},{$push:{interest:'Game'}})
var newInterset=["Sing","Dance","Code"];
// db.workmate.update({name:"xiaoWang"},{$addToSet:{interest:{$each:newInterset}}})
// db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})
// db.workmate.update({name:'xiaoWang'}, {$unset : {"interest.2" : -1 }})

// db.workmate.update({},{$set:{interset:[]}},{multi:true})
///1111
db.workmate.update({sex:1},{$set:{money:1000}},false,true)
var resultMessage=db.runCommand({getLastError:1})
printjson(resultMessage);
print('[demo]log  print success');  //没有错误显示成功