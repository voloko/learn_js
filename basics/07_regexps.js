var r = /bar/;
print('foo loves bar'.match(r));
print('red reed road'.match(/r..d/g));
print('red ReEd roaD'.match(/r..d/gi));
print('red reed road'.match(/r[a-z]d/g));
print('rd red reed road'.match(/r[a-z][a-z]?d/g));
print('rd red reeeeeed road'.match(/r[a-z]*d/g));
print('rd red reeeeeed road'.match(/r[a-z]+d/g));

print('roaaaad'.match(/r([a-z]+)d/));
print('02:05'.match(/([0-9]+):([0-9]+)/)[1]);
print('02:05'.match(/(\d+):(\d+)/)[1]);
print('123 roaaaad 123123'.match(/\w+/));
print('|' + 'roaaaad 123123'.match(/\s+/) + '|');

print('');
print('foo loves bar'.replace(r, 'foo'));
print('bar loves bar'.replace(/bar/g, 'foo'));
print('foo loves bar'.replace(/[a-z]{3}/g, function(match) {
    return 'super ' + match;
}));

print('');
print('foo loves bar'.split(/\s/));

print('');
r = new RegExp('bar', 'gi');
print('bar loves bar'.match(r));
