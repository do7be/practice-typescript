var module1;
(function (module1) {
    var foo = (function () {
        function foo() {
        }
        return foo;
    }());
    module1.foo = foo;
})(module1 || (module1 = {}));
var foo = new module1.foo();
console.log(foo);
