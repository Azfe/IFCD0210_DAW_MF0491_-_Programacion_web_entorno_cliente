// Calculadora Simple

// Tem�tica: Entrada/Salida de datos, operaciones aritm�ticas, condicionales.

// Descripci�n: Este ejercicio crea una calculadora b�sica que permite al usuario realizar sumas, restas, multiplicaciones o divisiones con dos n�meros. El programa pedir� los dos n�meros y luego le preguntar� al usuario qu� operaci�n desea realizar.

// Autor: Alejandro Zapata

Algoritmo Calculadora_Simple
	
	// Declaraci�n de variables
	Definir num1, num2, resultado Como Real
	Definir operacion Como Caracter
	
	// Solicitud de datos al usuario
	Escribir "Introduce el primer n�mero:"
	Leer num1
	
	Escribir "Introduce el segundo n�mero:"
	Leer num2
	
	Escribir "Elija una opci�n: "
	Escribir "S. Sumar"
	Escribir "R. Restar"
	Escribir "M. Multiplicar"
	Escribir "D. Dividir"
	Escribir "Introduce el caracter correspondiente al operador aritm�tico: "
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
			Escribir "Resultado multiplicaci�n: ", num1, " * ", num2, " = ", resultado
		Caso "D":
			Si num2 <> 0 Entonces
				resultado = num1 / num2
				Escribir "Resultado divisi�n: ", num1, " / ", num2, " = ", resultado
			SiNo
				Escribir "No se puede dividir entre 0."
			FinSi
			
		De Otro Modo:
			// En el caso de introducir un caracter no v�lido, se muestra un error.
			Escribir "�Error! Elige una opci�n v�lida."
	FinSegun
	
FinAlgoritmo
