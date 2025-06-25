// Funciones

// Sin parámetros
Funcion Saludar 
	Mostrar "Hola, bienvenido!"
FinFuncion

// Con parámetros
Funcion SaludarUsuario(nameUser)
	Mostrar "Hola, bienvenido! ", nameUser
FinFuncion

// Con retorno
Funcion resultado = Sumar ( n1, n2 )
	resultado = n1 + n2
Fin Funcion

Algoritmo Funciones
	
	// Sin parámetros
	Saludar()
	
	// Con parámetros
	SaludarUsuario("Juan")
	
	// Con retorno	
	Mostrar "Ingrese número 1"
	leer numUno
	Mostrar "Ingrese número 2"
	leer numDos
	
	Mostrar "Suma es: " , Sumar(numUno, numDos)
	
FinAlgoritmo
