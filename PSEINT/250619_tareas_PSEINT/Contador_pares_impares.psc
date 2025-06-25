// Contador de Números Pares e Impares

// Temática: Bucles (repetitivas), condicionales, contadores.

// Descripción: Este ejercicio pide al usuario una cantidad de números y luego le solicita que introduzca esa cantidad de números. Al final, el programa cuenta y muestra cuántos de los números introducidos fueron pares y cuántos fueron impares.

// Autor: Alejandro Zapata

Algoritmo Contador_pares_impares
	
	//	Declaración de variables
	Definir cantidadNumeros, i, num, contadorPares, contadorImpares Como Entero
	contadorPares = 0 
	contadorImpares = 0
	
	// Solicitud de datos al usuario
	Escribir "Introduce la cantidad de números a introducir: "
	Leer cantidadNumeros
	
	
	Para i = 1 Hasta cantidadNumeros Con Paso 1 Hacer
		// Solicitud de número
		Escribir "Introduce un número: "
		Leer num
		
		// Se calcula si el número es par o impar	
		Si (num MOD 2 = 0) Entonces
			Escribir num, " es un número par"
			contadorPares = contadorPares + 1
		SiNo		
			Escribir num, " es un número impar"
			contadorImpares = contadorImpares + 1		
		FinSi
		
	FinPara	
	
	// Informar al usuario el resultado
	Escribir "Cantidad de números pares: ", contadorPares
	Escribir "Cantidad de números impares: ", contadorImpares
		
FinAlgoritmo
