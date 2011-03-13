var obj = {
    x: 1,
    y: 2
};

print(obj.x);
print(obj.y);
print(obj.z);

obj.z = 3;
print(obj.z);

print(obj['x']);


var foo = {
    big_number: 2000
};

print(foo['big_' + 'number']);
var x = 'big_number';
print(foo[x]);


var container = {
    foo: [1, 2, 3, 4],
    
    getFoo: function() {
        return this.foo;
    }
};

var prop = 'foo';

print(container.getFoo());
print(container['get' + prop.charAt(0).toUpperCase() + prop.substring(1)]());

for(var i in obj) {
    print(i + ': ' + obj[i]);
}

print('x' in obj);
print('q' in obj);

print(obj.x !== undefined);
print(obj.q !== undefined);
