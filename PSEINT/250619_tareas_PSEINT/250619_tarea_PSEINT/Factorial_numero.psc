// Factorial de un Número

// Temática: Bucles (repetitivas), funciones matemáticas, validación de entrada.

// Descripción: Este ejercicio calcula la factorial de un número entero no negativo introducido por el usuario. La factorial de un número n (¡denotado como n!) es el producto de todos los enteros positivos menores o iguales a n. ¡Por ejemplo, 5! = 5 * 4 * 3 * 2 * 1 =

// Autor: Alejandro Zapata

Algoritmo Factorial_numero
	
	// Declaración de variables
	Definir num, factorial, i Como Entero
	factorial = 1
		
	Repetir
		// Solicitud de datos al usuario
		Escribir "Introduce un número para conocer su factorial !n: "
		Leer num	
		
		// Se valida que el número introducido no sea negativo
		Si (num < 0) Entonces
			Escribir "Error. El número es negativo."
		FinSi
		
		// Se calcula el factorial
		Si (num = 0) Entonces
			Escribir "Si es 0, el factorial se establece en 1."  
			
		SiNo
			Para i = 1 Hasta num Con Paso 1 Hacer				
				factorial = factorial * i				
			FinPara			
		FinSi			
	Hasta Que num >= 0	
	
	// Se muestra el resultado al usuario
	Escribir "El factorial de ", num, " es: ", factorial 
	
FinAlgoritmo