console.log("hello javascript!!!!!!!!!!!!!! how are you?")
var a;
a="sita"
console.log(a)
console.log("sita")
var s;
s="sunitha"
console.log(s)
console.log("sunitha")
var n;
n="3+5"
console.log(n)
console.log(3+5)
let b=5+6
console.log(b)
let m=35-20
console.log(m)



var arr=["apple","banana","custordApple","dragonfruit",[1,2,3],["vamsi","ravi",{id:1,name:{
    movies:["devara","rrr","salaar","kgf","pushpa2","animal",[1,2,3]]
}}]];
console.log(arr[arr.length-1][2].name.arr[arr.length-1]);



var q=[1,2,3,"sita",true]
console.log( typeof q)

var c=["sita",12,true]
console.log(c[4])

var d=1;
var e="1";
console.log(d==e);

var x=1;
var z="1";
console.log(x===z);




console.log(undefined==undefined);
console.log(null==null);


var h=[1,2,3,,,,,,,"sita"]
console.log(h[9]);

var n={
    id:1,
    name:"sita",
    rollno:13,
    sita:[1,2,true,"sita"],
    movies:{
        name:aa,
        movie:pushpa2
    }
}

console.log(n.sita[n.sita.length-1]);

console.log(n.movies);


// 


var x = 0.3;
var y = 0.3;
x == y ?console.log("true") : console.log("false");



var x = 1+3;
var y = 1+3;
x == y ?console.log("true") : console.log("false");

var x = 0.1+0.2;
var y = 0.1+0.2;
x == y ?console.log("true") : console.log("false");

var a=[]==[];
a? console.log("true"):console.log("false");

var d={id:1}=={id:1};
d? console.log("true"):console.log("false");


var userinput=prompt("enter your age here")
    if(userinput>=18){
      console.log("eligible to vote"); 
    }else{
        console.log("not eligible to vote");
    }

var a=10;
var u=20;
console.log(a && u);

var c=20;
var d=30;
console.log(c<d&&c<d);
 
var x=7;
var y=10;
console.log(!x==y);

var f=undefined;
var g=undefined;
console.log(!f||g);

var q={
    id:1,
    name:"sita",
    place:"hyd"
}
console.log(q);
q.id=10;
console.log(q);

var f=undefined;
var g=undefined;
console.log(!f&&g);