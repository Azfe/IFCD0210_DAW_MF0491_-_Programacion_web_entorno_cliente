// Factorial de un N�mero

// Tem�tica: Bucles (repetitivas), funciones matem�ticas, validaci�n de entrada.

// Descripci�n: Este ejercicio calcula la factorial de un n�mero entero no negativo introducido por el usuario. La factorial de un n�mero n (�denotado como n!) es el producto de todos los enteros positivos menores o iguales a n. �Por ejemplo, 5! = 5 * 4 * 3 * 2 * 1 =

// Autor: Alejandro Zapata

Algoritmo Factorial_numero
	
	// Declaraci�n de variables
	Definir num, factorial, i Como Entero
	factorial = 1
	
	// Solicitud de datos al usuario
	Escribir "Introduce un n�mero: "
	Leer num	
		
	Repetir
		// Se valida que el n�mero introducido no sea negativo
		Si (num < 0) Entonces
			Escribir "Error. El n�mero es negativo."
		FinSi
		
		Si (num = 0) Entonces
			Escribir "El factorial es: ", fatorial
			
		SiNo
			Para i = 1 Hasta num Con Paso 1 Hacer				
				factorial = factorial * i				
			FinPara			
		FinSi			
	Hasta Que num >= 0	
	
	Escribir "El factorial de ", num, " es: ", factorial 
	
FinAlgoritmo