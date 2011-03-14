var dog = {
    bark: function() {
        return "I'm " + this.name;
    },
    setName: function(name) {
        this.name = name;
    },
    name: 'Bob'
};

h('this=dog in bark');
print('Dog barks: ' + dog.bark());

h('this=dog in setName');
dog.setName('Jack');
print('Dog barks: ' + dog.bark());
print('Dog\'s name is: ' + dog.name);



var cat = {
    name: 'Kitty',
    // bark is just a function, we can pass it arround
    meo: dog.bark
};
h('this=cat in meo (bark)');
print('Cat meos: ' + cat.meo());



h('it does not matter how long the path is', 'this=object before dot');
var cats = [cat];
print('First cat meos: ' + cats[0].meo());
var car = { driver: cat };
print('Car driver meos: ' + car.driver.meo());



h('change this using call and apply');
function sayHello(greetings, times) {
    for(var i = 0; i < times; i++) {
        greetings += ' ' + this.name;
    };
    return greetings;
}
print('Say hello on cat: ' + sayHello.call(cat, 'Hello', 2));
print('Say hello on dog: ' + sayHello.apply(dog, ['Hello', 3]));



h('use apply with native objects');
function arrayMax(array) {
    return Math.max.apply(Math, array);
}
print('arrayMax on array: ', arrayMax([1, 2, 3, 5]));
