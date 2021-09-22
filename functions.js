function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + " está andando"
	}
}
const maria = new Person("Maria")
const joao = new Person("João")
console.log(maria.walk())
console.log(joao.walk())
