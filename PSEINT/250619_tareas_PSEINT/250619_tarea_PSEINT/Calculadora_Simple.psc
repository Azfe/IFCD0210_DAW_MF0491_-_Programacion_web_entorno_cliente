// Calculadora Simple

// Temática: Entrada/Salida de datos, operaciones aritméticas, condicionales.

// Descripción: Este ejercicio crea una calculadora básica que permite al usuario realizar sumas, restas, multiplicaciones o divisiones con dos números. El programa pedirá los dos números y luego le preguntará al usuario qué operación desea realizar.

// Autor: Alejandro Zapata

Algoritmo Calculadora_Simple
	
	// Declaración de variables
	Definir num1, num2, resultado Como Real
	Definir operacion Como Caracter
	
	// Solicitud de datos al usuario
	Escribir "Introduce el primer número:"
	Leer num1
	
	Escribir "Introduce el segundo número:"
	Leer num2
	
	Escribir "Elija una opción: "
	Escribir "S. Sumar"
	Escribir "R. Restar"
	Escribir "M. Multiplicar"
	Escribir "D. Dividir"
	Escribir "Introduce el caracter correspondiente al operador aritmético: "
	Leer operacion
	
	// Se calcula el resultado
	Segun operacion Hacer
		Caso "S":
			resultado = num1 + num2
			Escribir "Resultado suma: ", num1, " + ", num2, " = ", resultado
		Caso "R":
			resultado = num1 + num2
			Escribir "Resultado resta: ", num1, " - ", num2, " = ", resultado
		Caso "M":
			resultado = num1 * num2
			Escribir "Resultado multiplicación: ", num1, " * ", num2, " = ", resultado
		Caso "D":
			Si num2 <> 0 Entonces
				resultado = num1 / num2
				Escribir "Resultado división: ", num1, " / ", num2, " = ", resultado
			SiNo
				Escribir "No se puede dividir entre 0."
			FinSi
			
		De Otro Modo:
			// En el caso de introducir un caracter no válido, se muestra un error.
			Escribir "¡Error! Elige una opción válida."
	FinSegun
	
FinAlgoritmo
