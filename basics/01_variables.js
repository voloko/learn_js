// global
x = 'bar';

// also global
var y = 111;

function myFunc() {
    // local
    var z = 2;
    
    // global
    q = 3;
}

if (true) {
    var t = 4;
}

print(t);
