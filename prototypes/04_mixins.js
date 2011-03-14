h('mixins');

var AnimalLike = {
    walk: function() {
        return "I'm walking";
    },
    
    talk: function() {
        return "I'm " + this.name;
    }
};

var Dog = function() {
    this.name = 'Grommit';
};
for (var i in AnimalLike) {
    Dog.prototype[i] = AnimalLike[i];
}

var Cat = function() {
    this.name = 'Kitty';
};
for (var i in AnimalLike) {
    Cat.prototype[i] = AnimalLike[i];
}


var dog = new Dog();
var cat = new Cat();

print('dog can walk: ', dog.walk());
print('cat can walk: ', cat.walk());
print('dog can talk: ', dog.talk());
print('cat can talk: ', cat.talk());