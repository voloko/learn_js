var x = true,
    z = false;
    
if (x) {
    print('x');
}

if (z) print('z');

if (!z) print('!z');

print('');
print('false:');


// falsy
if (false) {
    print(false);
}

if (0) {
    print(0);
}

if ('') {
    print('string: ');
}

if (undefined) {
    print(undefined);
}

if (null) {
    print(null);
}

if (NaN) {
    print(NaN);
}

print('');
print('true:');

if ('0') {
    print('string: 0');
}

if ('false') {
    print('string: false');
}

if ('string') {
    print('string');
}

if (4) {
    print(4);
}

print('');
print('==');

if (0 == '0') {
    print("0 == '0'");
}

if (0 == false) {
    print("0 == false");
}

if (0 == undefined) {
    print("0 == undefined");
}

if (false == undefined) {
    print("false == undefined");
}

if (0 == null) {
    print("0 == null");
}

if (0 === '0') {
    print("0 === '0'");
}

if (0 === 0) {
    print("0 === 0");
}

print('');
var obj = {
    x: false
};

if (!obj.x) {
    print('no x');
}

if (obj.x === undefined) {
    print('surely no x');
}

if (!('x' in obj)) {
    print('x not in obj');
}


print('');
print('||  &&');
print(1 && 2);
print(1 && 2 && 0 && 3);

print(1 || 2);
print(0 || 2 || 0 || 3);

print('');
obj.y = obj.y || 10;
print(obj.y);
obj.y && print(obj.y);
obj.z || print('no z');

print('');
print(
    (obj.subobj || { foo: 'bar' }).foo
);
