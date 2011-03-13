var dog = {
    bark: function() {
        print(this.name);
    },
    setName: function(name) {
        this.name = name;
    },
    name: 'Bob'
};

dog.bark();
dog.setName('Jack');
dog.bark();
print(dog.name);

var cat = {
    name: 'Kitty',
    meo: dog.bark
};
cat.meo();

var cats = [cat];
cats[0].meo();

var car = {
    driver: cat
};
car.driver.meo();

print('');

function sayHello(greetings, times) {
    for(var i = 0; i < times; i++) {
        greetings += ' ' + this.name;
    };
    print(greetings);
}
sayHello.call(cat, 'Hello', 2);
sayHello.apply(cat, ['Hello', 3]);