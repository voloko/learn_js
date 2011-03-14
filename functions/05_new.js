h('new will create a new object using function as a constructor');
function Cat() {
    this.name = 'Kitty';
};
var c = new Cat();
print('c.name with new: ', c.name);

var d = Cat();
print('without new keyword: ', d);
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