h('casting string to number');
print("'2' / 2: ", '2' / 2);
print("'2.2' / 2: ", '2.2' / 2);
print("'2.2' * 2: ", '2.2' * 2);
print("'2.2' + 2: ", '2.2' + 4);
print("2 + '2.2': ", 4 + '2.2');
print("'asd' / 2: ", 'ads' / 2);
print("('asdfsdf' - 0) + 1 - 100: ", ('asdfsdf' - 0) + 1 - 100);


h('to string');
print('toString on array: ', [1, 2, 3].toString());
print('toString on number: ', (1).toString());
print("[1, 2, 3] + '': ", [1, 2, 3] + '');
print("([1, 2, 3] + '').length: ", ([1, 2, 3] + '').length);
print("undefined + '': ", undefined + '');
print("{ foo: 'bar' } + '': ", { foo: 'bar' } + '');


h('to boolean');
print("!!1: ", !!1);
print("!!NaN: ", !!NaN);


h('to integer');
print('Math.round(3.2): ', Math.round(3.2));
print('Math.round(3.9): ', Math.round(3.9));
print('Math.ceil(6.2):  ', Math.ceil(6.2));
print('Math.ceil(-6.2): ', Math.ceil(-6.2));
print('Math.floor(6.9): ', Math.floor(6.9));
print('Math.floor(-6.9): ', Math.floor(-6.9));
print('10.2 << 0:  ', 10.2 << 0);
print('-10.2 << 0: ', -10.2 << 0);
print('10.2 | 0:   ', 10.2 | 0);
print('-10.2 | 0:  ', -10.2 | 0);
