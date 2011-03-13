print('2' / 2);
print('2.2' / 2);
print('2.2' * 2);
print('2.2' + 2);
print(2 + '2.2');

// to string
print('');
print([1, 2, 3].toString());
print((1).toString());
print([1, 2, 3] + '');
print(([1, 2, 3] + '').length);
print(undefined + '');
print({ foo: 'bar' } + '');

// to number
print('');
print('2.2' * 1);
print('2.2' - 0);
print('adfsf' - 0);
print(('asdfsdf' - 0) + 1 - 100);
print(100 / 0);
print(-100 / 0);
print(100 / 0 * 100);
print(-100 / 0 * 100);

// to boolean
print('');
print(!!1);
print(!!NaN);

// to integer
print('');
print(Math.round(3.2));
print(Math.round(3.9));
print(Math.ceil(6.2));
print(Math.floor(6.9));
print(10.2 << 0);
print(10.2 | 0);
