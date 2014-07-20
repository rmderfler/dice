describe("die", function() {
	describe("roll", function (){
	it("returns a number below 7", function(){
	var firstDie = Object.create(die);
	firstDie.roll().should.be.below(7);
	});
	it("returns a number above 0", function(){
	var firstDie = Object.create(die);
	firstDie.roll().should.be.above(0);
	})
})
})