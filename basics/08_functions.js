function foo(x) {
    return 'bar';
}

print(foo());

var x = foo;
print(x);
print(x());
print(x.length);

// recursion
print('');
function yell(n){ 
    return n > 0 ? yell(n-1) + "a" : "hiy"; 
}
print(yell(10));


print('');
var mult = function(a, b) {
    return a * b;
};
print(mult(1, 2));

print('');
var work = function myWork(n) {
    print(typeof myWork);
}
work(0);
print(typeof myWork);


print('');
var obj = {
    foo: function() {
        return 'bar';
    },
    
    mult: mult
};
print(obj.mult(1, 2));
print(obj.foo());
