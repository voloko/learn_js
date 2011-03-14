h('define global and local variables');
x = 'bar';
print('global x: ', x);
print('also as window.x: ', window.x);


h('define global with var');
var y = 111;
print('global y: ', y);


h('use a function to scope variables');
function myFunc() {
    // local
    var z = 2;
    
    // global
    q = 3;
}
myFunc();

if (true) {
    var t = 4;
}

print('global q: ', q);
print('z is local to function: ', typeof z);
print('if does not affect scope: ', t);
