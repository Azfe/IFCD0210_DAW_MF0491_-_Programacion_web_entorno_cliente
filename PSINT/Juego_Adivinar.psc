Algoritmo Juego_Adivinar	
	// Juego_Adivinar
	numAzar = Aleatorio(1, 10)	
	Mostrar numAzar
	
	vidas = 3
	
	Escribir "Adivina el número entre el 1 y el 10"
	Escribir "Ingrese número: "
	Leer numUser
	
	Mientras (numAzar <> numUser y vidas > 1) Hacer
		
		Si (numAzar > numUser)
			Mostrar "Muy bajo"
		SiNo
			Mostrar "Muy alto"
			
		FinSi
		
		vidas = vidas - 1
		Mostrar "Intentos restantes: ", vidas
		Mostrar "Ingrese otro número: "
		Leer numUser
		
	FinMientras
	
	Si (numAzar == numUser)
		Mostrar "!Felicitaciones, has adivinado el número!"
	SiNo
		Mostrar "Se te acabaron las vidas :("
	FinSi
	
	
FinAlgoritmo
