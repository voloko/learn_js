h('new will create a new object using function as a constructor');
function Cat() {
    this.name = 'Kitty';
};
var c = new Cat();
print('c.name with new: ', c.name);

var wrongCat = Cat();
print('without new keyword: ', wrongCat);
print('will also set name on window: ', name);



h('create functions in member constructor');
function Dog() {
    this.times = 0;
    
    this.bark = function() {
        this.times++;
        return 'bow wou';
    };
}
var dog = new Dog();
print('Dog barks: ', dog.bark());
print('Dog barked times: ', dog.times);



h('constructor function');
print('Dogs constructor is Dog: ', dog.constructor === Dog);
print('Dogs constructor: ', dog.constructor);



h('"static" methods');
Cat.best = function(catA, catB) {
    return catA.name > catB.name ? catA : catB;
};
var c1 = new Cat();
var c2 = new Cat();
c2.name = 'Mega Kitty';
print('Best cat is: ', Cat.best(c1, c2).name);