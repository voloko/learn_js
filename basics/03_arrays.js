var arr = [];

print(arr.length);

arr = [1, 2, 3, 4, 'string'];
print(arr.length);
print(arr[0]);

arr[2] = 'foo';
print(arr[2]);

print(arr.concat([6, 7]) );
print(arr);

arr.push('new');
print(arr);
print(arr.pop());
print(arr);

arr.unshift('new');
print(arr);
print(arr.shift());
print(arr);

print(arr.slice(1, 3));

print('');
arr[20] = 10;
print(arr.length);

print('');
for (var i = 0; i < arr.length; i++) {
    print(i + ', ' + arr[i]);
}

print('');
var matrix = [
    [1, 2, 5], 
    [3, 4, 5],
    [3, 4, 5]
];
print(matrix[1][2]);

print('');
arr = new Array();
print(arr.length);
arr[1] = 2;
print(arr.length);


print('');
arr = new Array(100);
print(arr.length);


print('');
arr = [1, 2, 3, 4];
arr.forEach(function(value, pos) {
    print(pos + ', ' + value);
});

print('');
print(arr.map(function(value, pos) {
    return value * 2;
}));

print('');
print(arr.filter(function(value, pos) {
    return value > 2;
}));

print('');
arr = [6, 3, 5, 2];
print(arr.sort());
print(arr.sort(function(a, b) {
    // return b - a;
    if (b > a) {
        return 10;
    }
    if (b < a) {
        return -10;
    }
    return 0;
}));
