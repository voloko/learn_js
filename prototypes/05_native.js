h('chaning native prototype');

Array.prototype.mult2 = function() {
    for (var i = 0; i < this.length; i++) {
        this[i] = this[i] * 2;
    }
};

var arr = [1, 2, 3];
print('I was: ', arr);
arr.mult2();
print('I become: ', arr);



h('this leads to side effects');
for (var i in arr) {
    print('Found in arr: ', i);
}
print('mult2? WTF?');



h('changing object prototype is usualy bad');
Object.prototype.keys = function() {
    var result = [];
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            result.push(i);
        }
    }
    return result;
};

var obj = {
    foo: 'bar',
    bar: 'foo'
};
print('keys of an object: ', obj.keys());
for (var i in obj) {
    print('Found in obj: ', i);
}
print('keys? WTF?');
