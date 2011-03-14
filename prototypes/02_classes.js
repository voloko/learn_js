h('use instance of a class as prototype');

function Person() {}
Person.prototype.name = 'Brian';
Person.prototype.say = function() {
    return "I'm " + this.name;
}

function Ninja(name) {
    this.hacks = 0;
}
Ninja.prototype = new Person();
Ninja.prototype.hack = function() {
    this.hacks++;
};

var ninja = new Ninja();
print('Ninja says: ', ninja.say());
ninja.hack();
print('Ninja hacked: ', ninja.hacks);




h('check instanceof');
print('ninja instanceof Person: ', ninja instanceof Person);
print('ninja instanceof Ninja: ', ninja instanceof Ninja);
print('ninja.constructor: ', ninja.constructor);
print('ninja.constructor === Ninja: ', ninja.constructor === Ninja);




h("messing up with prototypes");
Person.prototype.name = 'Jordan';
print('Ninja says after changing name: ', ninja.say());
Ninja.prototype.constructor = Ninja;
print('ninja.constructor after fixing: ', ninja.constructor);
print('ninja.constructor === Ninja after fixing: ',
    ninja.constructor === Ninja);

Person.prototype = { name: 'Marcel' };
print('Ninja says after changing whole prototype: ', ninja.say());
print('Object has a direct link to it\'s proto: ', ninja.__proto__);


