// 创建对象 构造+原型

function Supper(name, age, job) {
	this.name=name;
	this.age=age;
	thsi.job=job;


	var sayHello=function() {
		console.log("hello")
	}
}

Supper.prototype = {
	constructor:Person,
	sayName:function(){
		console.log(this.name);
	}
};

var objSub=new Supper("wanglin",24,"front-end");

objSub.sayName();
objSub.sayHello();

//继承 寄生组合

function SuperType(name) {
	this.name=name;
	this.color=["red","blue","green"];
}
SuperType.prototype.sayName=function(){
	console.log(this.name);
};

function SubType(name,age){
	//继承属性
	SuperType.call(this,name);
	this.age=age;
}


function inheritPrototype(subType,superType) {
	// var prototype=object(superType.prototype);//创建对象

	var prototype=Object.create(superType.prototype);

	//下面两行完成原型链的链接
	prototype.constructor=subType;
	subType.prototype= prototyp;
}


inheritPrototype(SubType,Supper);

SubType.prototype.sayAge=function(){
	console.log(this.age);
}