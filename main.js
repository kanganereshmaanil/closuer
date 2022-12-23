function counter(){
    var counter = 0;
    function IncreaseCounter(){
        return counter +=1;
    };
return IncreaseCounter;
}
var counter = counter()
alert(counter());
alert(counter());
alert(counter());
alert(counter());


let count = 0;
(function(){
    if (count === 0){
        let count =1;
        console.log(count);
    }
    console.log(count);
})();


for (var i=0;i<3;i++){
    setTimeout(function log(){
    console.log(i);
    } ,1000);
}


// var length = prompt("Enter a whole number for the length of your rectangle.");
//         var width = prompt("Enter a whole number for the width of your rectangle.");
//         function area(length, width) {
//             return length * width;
//         }
//         function perimeter(length, width) {
//             return 2*( length + width);
//         }
        
//         document.writeln('The area of your rectangle is ' + area(length, width));         
//         document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));
var a = 12;
(function(){
    alert(a);
})();

var a =10;
var x =(function(){
    var a = 12;
    return function(){
        alert(a);
    };
})();
x();

var globalVar = "xyz";
(function outerFunc(outerArg){
    var outerVar = 'a';
    (function innerFunc(innerArg){
        var innerVar ='b';
        console.log(
            "outerArg = "+ outerArg + "\n" +
            "inneArg = "+ innerArg + "\n" +
            "outerVar = "+ outerVar + "\n" +
            "innerVar = "+ innerVar+ "\n" +
            "globalvar = "+ globalVar);
    })(456);
})(123);