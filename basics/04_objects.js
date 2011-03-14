h('accessing properties of an object');
var obj = {
    x: 1,
    y: 2
};

print('obj.x: ', obj.x);
print('obj.y: ', obj.y);
print('obj.z: ', obj.z);

obj.z = 3;
print('now we have obj.z: ', obj.z);
print('use [] to access property: ', obj['x']);




h('dynamically create proeperty names');
var foo = {
    big_number: 2000
};

print('access big_number: ', foo['big_' + 'number']);
var x = 'big_number';
print('access using variable as prop name: ', foo[x]);

var container = {
    foo: [1, 2, 3, 4],
    
    getFoo: function() {
        return this.foo;
    }
};

var prop = 'foo';

print('access getFoo directly: ', container.getFoo());
print('access getFoo using propname "foo": ', 
    container['get' + prop.charAt(0).toUpperCase() + prop.substring(1)]());



h('for in for objects');
for(var i in obj) {
    print('for in ', i + ': ' + obj[i]);
}



h('check if key in obj');
print('check if "x" in obj: ', 'x' in obj);
print('check if "q" in obj: ', 'q' in obj);
print('check if "x" in obj using !== undefined: ', obj.x !== undefined);
print('check if "q" in obj using !== undefined: ', obj.q !== undefined);



h('delete x, check again');
obj.x = undefined;
print('check if "x" in obj: ', 'x' in obj);
print('check if "x" in obj using !== undefined: ', obj.x !== undefined);
