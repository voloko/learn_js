function Cat() {
    this.name = 'Kitty';
};

c = Cat();
print(c);

var c = new Cat();
print(c.name);

// calling without new adds 'name' to window
print(name);


function Dog() {
    this.times = 0;
    
    this.bark = function() {
        this.times++;
        print('bou wou');
    };
}

var dog = new Dog();
dog.bark();
print(dog.times);