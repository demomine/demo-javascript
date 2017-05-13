function demo_alert() {
	alert("demo");
}

/**循环属性**/
function loop_properties() {
	var o = {
		name:"lance",
		age:20
	}
	for ( var p in  o ) {
		console.log(p + ": " + o[p] + "\n");		
	}
}
/**嵌套函数   只允许出现在顶级语句中**/
function internal_function(a,b) {
	function squart(x) {
		return x*x;
	}
	alert( squart(a)+squart(b) );
}

/**函数调用的四种方式
 * 1.	作为函数
 * 2.	作为方法
 * 3.	作为构造函数
 * 4.	通过 call() 和  apply()
 **/
// 函数调用表达式
//printprops({x:1});
//通常情况函数的返回值就是调用表达式的值,如果函数没有返回值则为undefined

var o={};
o.m = demo_alert;

function method_invoke() {
	o.m();
}


var m = {
	name:"lance",
	age:12,
	run: function () {
		alert( this.name+this.age);
    }
};

function method_invoke2() {
    m.run();
    m.age = 333;
    m.run();
}

function method_invoke3() {
    m["run"]();
    m.age = 333;
    m["run"]();
    alert(m["name"]);
}

//链式调用
var n = {
	a1: function () {
        alert("a1");
        return this;
    },
    a2: function () {
        alert("a2");
        return this;
    },
    a3: function () {
        alert("a3");
        return this;
    }

};

function method_invoke4() {
    n.a1().a2().a3();
}

//this不继承

var t = {
    o: function () {
		var self = this;
        alert(this === t);
        f();
        function f() {
            alert(this === t);
            alert(self === t);
        }
    }
};

function method_invoke5() {
    t.o();
}


/**
 * 函数的实参和形参
 * 1.	可选形参
 * 2.	可变长实参列表
 * 3.	对象属性作为实参
 * 4.	实参类型
 * 5.	作为值得函数
 * 6.	自定义函数属性
 */




// 可选形参,可选形参必须放在最后
function getPropertyName(o,/* optional */ a) {
    a = a || [];//注意这种写法
    for (var property in o) a.push(property);
    return a;
}

function func_method1() {
    var o = {
        age:22
    };
    var a = getPropertyName(o);
    alert(a);
    getPropertyName(o, a);
    alert(a);
}

//可变长实参列表 可变长实参列表 参数个数不能为0,修改agruments[0]会同时修改对应的值
function max(a1 /* ... */) {
	for(var num =0 ;num < arguments.length ; num++) {
        alert(arguments[num]);
    }
}


function func_method2() {
    max(1, 3, 5);
    max(1);
}

//实参类型,特别是数组  做个判断和兼容

//作为值的函数,函数可以作为对象 传递给其他对象或者对象的属性

var k={}

function object_function(x) {
    return x*x;
}

function method_invoke6() {
    k = object_function;//不加括号
    alert(k(5));
}

//为函数添加属性
property_function.count = 0;

function property_function() {
    return property_function.count++;
}

function method_invoke7() {
    alert(property_function);//注意不输入括号的结果
    alert(property_function());
    alert(property_function());
}

//全局变量:不在任何函数中声明的变量在整个js程序中都是可见的


//函数作为命名空间,防止污染全局变量

var extend =(function() {

})

//函数属性 方法和构造函数
function args_function(a1, a2, a3){
    alert(arguments.length);
    alert(arguments.callee.length)
}

function method_invoke8() {
    args_function(1, 2);
    args_function(1, 2,3);
}

//call()  apply()
var a ={}
a.f=args_function;


function method_invoke9() {
    args_function.call(a,1,2)
    args_function.apply(a,[1,2,3])
}

//bind
var b ={}
function method_invoke10() {
    //b.args_function(1,2);
    var bb = args_function.bind(b);
    bb(1,2,3);
}


function bind_function(y,z) {
    return this.x+y+z;
}


var oo = {x: 1};

var mm = bind_function.bind(oo,2);


function method_invoke11() {
   alert(mm(5));
}

//Function构造函数 允许动态创建函数

var ff = new Function("a","b","return a+b");


function method_invoke12() {
    alert(ff(3,5));
}