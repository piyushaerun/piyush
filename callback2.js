function abc()
{
var x=10;
piyush(x,function(err,data)
{
if (err) return console.error( err);
console.log(data);

});
console.log("prog Ended");
}
function piyush(data,cb)
{
cb(null,data);
}
abc();