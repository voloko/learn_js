h('c style');
function foo(x) {
    return 'bar';
}
print(foo());



h('recursion using c name')
function yell(n){ 
    return n > 0 ? yell(n-1) + "a" : "hiy"; 
}
print(yell(10));



h('as a variable');
var mult = function(a, b) {
    return a * b;
};
print(mult(1, 2));



h('use both');
var work = function myWork() {
    return typeof myWork;
}
print('typeof myWork within function: ', work());
print('typeof myWork outside funtion: ', typeof myWork);



h('use as a property');
var obj = {
    foo: function() {
        return 'bar';
    },
    
    mult: mult
};
print('Define function inline (foo): ', obj.foo());
print('Use previously defined function (mult): ', obj.mult(1, 2));
