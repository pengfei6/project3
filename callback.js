function read(callback) {
    var a=1;
    setTimeout(function () {
        console.log('读好了');
        callback();
    },3000);
    return a;
}
function write() {
    console.log('写好了');
}
var result=read(write);
console.log(result);