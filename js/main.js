const typed = new Typed('.typed', {
	strings: [
		'<i class="typed">Así que la fe es por el oír, </i>',
		'<i class="typed">y el oír, por la palabra de Dios. </i>',
		'<i class="typed">Romanos 10:17. </i>',
        
		'<i class="typed">Jesús le respondió: Escrito está: </i>',
		'<i class="typed">“No solo de pan vive el hombre, </i>',
		'<i class="typed">sino de toda palabra que sale de la boca de Dios”. </i>',
		'<i class="typed">Mateo 4:4. </i>',
        
		'<i class="typed">Mira que estoy a la puerta y llamo. </i>',
		'<i class="typed">Si alguno oye mi voz y abre la puerta, </i>',
		'<i class="typed">entraré, y cenaré con él, y él conmigo.</i>',
		'<i class="typed">Apocalipsis 3:20. </i>',
        
		'<i class="typed">EL que oye mi palabra, </i>',
        '<i class="typed">y cree al que me envió, tiene vida eterna </i>',
        '<i class="typed">Juan 5:24. </i>',
		
		
		
	],

	 
	//stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 25, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
	


});


