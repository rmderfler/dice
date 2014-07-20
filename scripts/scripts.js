
var die = {
	roll: function(){
		  var array = [1,2,3,4,5,6];
		  var face = array[Math.floor(Math.random()*array.length)];
		  console.log(face);
		  return face;

}
};
$(document).ready(function(){
	$("#roll").click(function(){
	var die1 = Object.create(die);
	var die2 = Object.create(die);
	var a = die1.roll();
	var b = die2.roll();

	$("span.die1").empty();
	 if (a === 1) {$("span.die1").append('<img src="http://etc.usf.edu/clipart/42100/42158/die_01_42158_sm.gif">');
	    $("span.a").text(1);
	} else if (a === 2) {$("span.die1").append('<img src="http://etc.usf.edu/clipart/42100/42159/die_02_42159_sm.gif">');
	    $("span.a").text(2);
	} else if (a === 3) {$("span.die1").append('<img src="http://etc.usf.edu/clipart/42100/42160/die_03_42160_sm.gif">');
		$("span.a").text(3);
	} else if (a === 4) {$("span.die1").append('<img src="http://etc.usf.edu/clipart/42100/42161/die_04_42161_sm.gif">');
		$("span.a").text(4);
	} else if (a === 5) {$("span.die1").append('<img src="http://etc.usf.edu/clipart/42100/42162/die_05_42162_sm.gif">');
		$("span.a").text(5);
	} else if (a === 6) {$("span.die1").append('<img src="http://etc.usf.edu/clipart/42100/42164/die_06_42164_sm.gif">');
		$("span.a").text(6);
};
	$("span.die2").empty();
	 if (b === 1) {$("span.die2").append('<img src="http://etc.usf.edu/clipart/42100/42158/die_01_42158_sm.gif">');
	    $("span.b").text(1);	
	} else if (b === 2) {$("span.die2").append('<img src="http://etc.usf.edu/clipart/42100/42159/die_02_42159_sm.gif">');
		$("span.b").text(2);
	} else if (b === 3) {$("span.die2").append('<img src="http://etc.usf.edu/clipart/42100/42160/die_03_42160_sm.gif">');
	    $("span.b").text(3);
	} else if (b === 4) {$("span.die2").append('<img src="http://etc.usf.edu/clipart/42100/42161/die_04_42161_sm.gif">');
		$("span.b").text(4);
	} else if (b === 5) {$("span.die2").append('<img src="http://etc.usf.edu/clipart/42100/42162/die_05_42162_sm.gif">');
		$("span.b").text(5);
	} else if (b === 6) {$("span.die2").append('<img src="http://etc.usf.edu/clipart/42100/42164/die_06_42164_sm.gif">');
		$("span.b").text(6);
};
})
})
