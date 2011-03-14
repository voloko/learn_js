h('object as a prototype');
var proto = {
    name: 'Colin',
    say: function() {
        return "I'm " + this.name;
    }
};
var Person = function() {};
Person.prototype = proto;

var p1 = new Person();
var p2 = new Person();
print('p1 says: ', p1.say());
print('p2 says: ', p2.say());




h('object properties vs prototype properties');
p1.name = 'Brian';
print('p1 is now: ', p1.say());
print('p2 is still: ', p2.say());

delete p1.name;
print('p1 after deleting name: ', p1.say());




h('changing prototype');
proto.name = 'Hellen';
proto.sayLoud = function() {
    return this.say().toUpperCase();
};
print('p1 after prototype change: ', p1.say());
print('p2 after prototype change: ', p2.say());
print('new function on prototype p1: ', p1.sayLoud());
