h('boolean variables');
var x = true,
    z = false;
    
if (x) {
    print('x is truthy');
}

if (z) {
    print('z is truthy');
}

if (!z) {
    print('!z is truthy');
}



h('false in javascript');
// falsy
if (!false) {
    print('!false:');
}

if (!0) {
    print('!0');
}

if (!'') {
    print('!""');
}

if (!undefined) {
    print('!undefined');
}

if (!null) {
    print('!null');
}

if (!NaN) {
    print('!NaN');
}



h('true in javascript');
if ('0') {
    print('string: 0');
}

if ('false') {
    print('string: false');
}

if ('string') {
    print('string: "string"');
}

if (4) {
    print('non zerro variable: 4');
}

if (1/0) {
    print('Infinity: ', 1/0);
}

if ({}) {
    print('empty objects: ', {});
}

if ([]) {
    print('empty arrays: ', []);
}


h('comparing using ==');
print("0 == '0': ", 0 == '0');
print("0 == '0.0': ", 0 == '0.0');
print("0 == '': ", 0 == '');
print("0 == false: ", 0 == false);
print("0 == undefined: ", 0 == undefined);
print('false == undefined: ', false == undefined);
print("0 == null: ", 0 == null);


h('comparing using ===');
print("0 === '0': ", 0 === '0');
print("0 === '0': ", 0 === '0.0');
print("0 === '': ", 0 === '');
print("0 === false: ", 0 === false);
print("0 === undefined: ", 0 === undefined);
print('false === undefined: ', false === undefined);
print("0 === null: ", 0 === null);


h('boolean operations: || and &&');
print('&& returns first falsy variable: ', 1 && 0);
print('... or last if no falsy present: ', 1 && 2);
print('1 && 2 && 0 && 3: ', 1 && 2 && 0 && 3);
print('1 && 2 && 3 && {}: ', 1 && 2 && 3 && {});
print('|| returns first truthy variable: ', 1 || 2);
print('... or last if no truthy present: ', '' || false);
print('0 || 2 || 0 || 3: ', 0 || 2 || 0 || 3);
print('0 || "" || false || [2]: ', 0 || '' || false || [2]);



h('using || and && as control structures');
obj = {};
obj.y = obj.y || 10;
print('set default value for obj.y: ', obj.y);
obj.y && print('print only if obj.y is true: ', obj.y);
obj.z || print('print only if z if false: ', obj.z);
print('use as default in expressions: ',
    (obj.z || { foo: 'bar' }).foo);
