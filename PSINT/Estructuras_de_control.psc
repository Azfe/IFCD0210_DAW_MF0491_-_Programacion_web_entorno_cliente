Algoritmo Estructuras_de_control
	
	// Condicionales
	Escribir "Ingrese un n�mero del 1 al 10:"
	Leer num
	
	Si ( num > 0 y num < 10) Entonces
		Escribir "Correcto! ", num " es un n�mero entre 1 y 10"
	SiNo
		Escribir "Incorrecto! ", num " no es un n�mero entre 1 y 10"
	FinSi	
	
	// Switch
	Repetir
		Escribir "�?Aburrido? Elija una opci�n: "
		Escribir "1. Lectura"
		Escribir "2. Cine"
		Escribir "3. Juego"
		Escribir "4. Salir"
		Escribir "Ingrese un n�mero:"
		Leer opcionElegida
		
		Segun opcionElegida Hacer
			1:
				Mostrar "Lectura recomendada"
				Mostrar "* Principito"
			2: 
				Mostrar  "Ver Matrix"			
			3: 
				Mostrar "Juega CoD"
			4:
				Mostrar "Saliendo..."
			De Otro Modo:
				Escribir "Opci�n no v�lida"
		FinSegun
	Hasta Que opcionElegida = 4
	
	Escribir "Pulse cualquier tecla para continuar"
	Esperar Tecla
	
	// While
	n = 0
	Mientras (n <= 5) Hacer
		Escribir "Contador: ", n
		n = n + 1		
	FinMientras	
FinAlgoritmo
