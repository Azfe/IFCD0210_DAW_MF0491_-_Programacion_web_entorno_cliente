// Funciones

// Sin par�metros
Funcion Saludar 
	Mostrar "Hola, bienvenido!"
FinFuncion

// Con par�metros
Funcion SaludarUsuario(nameUser)
	Mostrar "Hola, bienvenido! ", nameUser
FinFuncion

// Con retorno
Funcion resultado = Sumar ( n1, n2 )
	resultado = n1 + n2
Fin Funcion

Algoritmo Funciones
	
	// Sin par�metros
	Saludar()
	
	// Con par�metros
	SaludarUsuario("Juan")
	
	// Con retorno	
	Mostrar "Ingrese n�mero 1"
	leer numUno
	Mostrar "Ingrese n�mero 2"
	leer numDos
	
	Mostrar "Suma es: " , Sumar(numUno, numDos)
	
FinAlgoritmo
