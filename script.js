let opciones = prompt(
	"Que funcion quieres? \n1. Verificar un numero si es par \n2. Verificar si un numero es primo \n3. Encontrar otro numero primo \n4. Realizar un cuadrado"
);

switch (opciones) {
	case "1":
		// Codigo para saber si un numero es par o impar

		let cod = parseInt(prompt("Ingresa un número para verificar si es par:"));
		function esPar(cod) {
			if (cod % 2 === 0) return "El numero " + cod + " es par";
			else return "El numero " + cod + " es impar";
		}
		console.log(esPar(cod));

		// Fin de codigo

		break;

	case "2":
		// Codigo para saber si un numero es primo o no es primo

		let valor = parseInt(
			prompt("Ingresa el número para saber si primo o no es primo")
		);
		function primo(valor) {
			let Primo = true;
			for (let i = 2; i < valor; i++) {
				if (valor % i == 0) {
					Primo = false;
					break;
				}
			}
			if (Primo) return "El número " + valor + " es primo";
			else return "El número " + valor + " no es primo";
		}

		console.log(primo(valor));

		// FIn de codigo
		break;

	case "3":
		// Codigo para tener el numero primo siguiente dado por el usuario

		let num = parseInt(
			prompt(
				"Ingrese el número, para verifcar si es primo, si no lo es, te mostrare el numero primo mas cercano "
			)
		);
		function encontrarSiguientePrimo(num) {
			let siguientePrimo = 0;
			let esPrimo = true;

			for (let i = 2; i < num; i++) {
				if (num % i == 0) {
					esPrimo = false;
					break;
				}
			}

			if (esPrimo) {
				return `El número ${num} es primo`;
			} else {
				for (let i = num + 1; ; i++) {
					esPrimo = true;

					for (let j = 2; j < i; j++) {
						if (i % j == 0) {
							esPrimo = false;
							break;
						}
					}

					if (esPrimo) {
						siguientePrimo = i;
						break;
					}
				}

				return `${num} no es primo y el siguiente primo es ${siguientePrimo}`;
			}
		}

		console.log(encontrarSiguientePrimo(num));

		// Fin de codigo
		break;

	case "4":
		// Codigo para imprimir el cuadrado

		let x = parseInt(prompt("Ingrese el tamaño del cuadrado a dibujar"));
		function dibujarCuadrado(x) {
			let cuadrado = "";
			for (let i = 0; i < x; i++) {
				for (let j = 0; j < x; j++)
					cuadrado +=
						i === 0 || i === x - 1 || j === 0 || j === x - 1
							? "* "
							: "  ";
				cuadrado += "\n";
			}
			return cuadrado;
		}

		console.log(dibujarCuadrado(x));

		// Fin de codigo
		break;

	default:
		console.log("Opcion invalida");

		break;
}
