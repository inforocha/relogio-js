(function() {
	var obj = {
		init: function() {
			this.relogio = document.getElementById('relogio');
			this.btnParar = document.getElementById('parar');
			this.btnAtualizar = document.getElementById('atualizar');

			this.btnParar.addEventListener('click',this.limparClock.bind(this));
			this.btnAtualizar.addEventListener('click',this.clock.bind(this));
			this.clock();
		},
		limparClock: function() {
			clearTimeout(this.time);
		},
		clock: function() {
			var time = new Date();

			this.relogio.innerHTML = time.toLocaleTimeString();
			
			this.time = setTimeout(function() {
				obj.clock();
			},1000);
		}
	};

	obj.init();
})();

(function() {
	var clock = function() {
		var time = new Date();
		console.clear();
		console.log(`Relogio no console: %s`,time.toLocaleTimeString());
		
		setTimeout(function() {
			clock();
		},1000);
	}
	clock();
})();