// Contador de N�meros Pares e Impares

// Tem�tica: Bucles (repetitivas), condicionales, contadores.

// Descripci�n: Este ejercicio pide al usuario una cantidad de n�meros y luego le solicita que introduzca esa cantidad de n�meros. Al final, el programa cuenta y muestra cu�ntos de los n�meros introducidos fueron pares y cu�ntos fueron impares.

// Autor: Alejandro Zapata

Algoritmo Contador_pares_impares
	
	//	Declaraci�n de variables
	Definir cantidadNumeros, i, num, contadorPares, contadorImpares Como Entero
	contadorPares = 0 
	contadorImpares = 0
	
	// Solicitud de datos al usuario
	Escribir "Introduce la cantidad de n�meros a introducir: "
	Leer cantidadNumeros
	
	
	Para i = 1 Hasta cantidadNumeros Con Paso 1 Hacer
		// Solicitud de n�mero
		Escribir "Introduce un n�mero: "
		Leer num
		
		// Se calcula si el n�mero es par o impar	
		Si (num MOD 2 = 0) Entonces
			Escribir num, " es un n�mero par"
			contadorPares = contadorPares + 1
		SiNo		
			Escribir num, " es un n�mero impar"
			contadorImpares = contadorImpares + 1		
		FinSi
		
	FinPara	
	
	// Informar al usuario el resultado
	Escribir "Cantidad de n�meros pares: ", contadorPares
	Escribir "Cantidad de n�meros impares: ", contadorImpares
		
FinAlgoritmo
