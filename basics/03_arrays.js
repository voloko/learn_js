h('define simple array');
var arr = [];
print('length: ', arr.length);



h('different types in one array');
arr = [1, 2, 3, 4, 'string', [6]];
print('length: ', arr.length);
print('read first element: ', arr[0]);
arr[2] = 'foo';
print('write third element: ', arr[2]);


h('array operations: concat');
print('concat with another array: ', arr.concat([6, 7]));
print('concat does not affect original array: ', arr);


h('array operations: push');
arr.push('new');
print('array modified after push: ', arr);
print('pop returns last element: ', arr.pop());
print('array modified after pop', arr);

h('array operations: unshift');
arr.unshift('new');
print('array modified after unshift: ', arr);
print('pop returns first element: ', arr.shift());
print('array modified after shift', arr);


h('array operations: slice');
print('slice part of the arrary: ', arr.slice(1, 3));
print('slice without args return a copy: ', arr.slice());
print("copy != original: ", arr.slice() != arr);


h('auto grow on addition');
arr[20] = 10;
print('length after setting 20-th element: ', arr.length);
for (var i = 0; i < arr.length; i++) {
    print('content at ', i < 10 ? ' ' : '', i + ' equals to ' + arr[i]);
}


h('matrixes');
var matrix = [
    [1, 2, 5], 
    [3, 4, 5],
    [3, 4, 5]
];
print('element at second row, last column: ', matrix[1][2]);


h('new Array');
arr = new Array();
print('same as []: ', arr.length);


h('new Array(n)');
arr = new Array(100);
print('creates an array with given length: ', arr.length);


h('array operations: forEach');
arr = [1, 2, 3, 4];
arr.forEach(function(value, pos) {
    print('forEach ', pos + ', ' + value);
});


h('array operations: map');
print('result of mapping * 2: ', arr.map(function(value, pos) {
    return value * 2;
}));


h('array operations: filter');
print('result of filtering > 2: ', arr.filter(function(value, pos) {
    return value > 2;
}));


h('array operations: sort');
arr = [6, 3, 5, 2];
print('sorting without callback: ', arr.sort());
print('sorting with callback: ', arr.sort(function(a, b) {
    return b - a;
}));


h('array operations: more operations at <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array">MDC</a>');
