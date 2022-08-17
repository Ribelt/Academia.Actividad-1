let promedioE, promedioY, promedioM;
let textoProm, mejorProm;

getPromedio(1, 6, 5, 9.5);
getPromedio(2, 10, 5, 9.5);
getPromedio(3, 10, 6, 5);

function getPromedio(idEstudiante, nota1, nota2, nota3) {
    let notas = (nota1 + nota2 + nota3) / 3;
    let promedio;

    if (idEstudiante == 1) {
        promedioY = notas.toFixed(2);
        console.log("El promedio de Yessenia es: " + promedioY)
        promedio = promedioY
    } else {
        if (idEstudiante == 2) {
            promedioE = notas.toFixed(2);
            console.log("El promedio de Eduardo es: " + promedioE)
            promedio = promedioE
        }
        else {
            if (idEstudiante == 3) {
                promedioM = notas.toFixed(2);
                console.log("El promedio de Miguel es: " + promedioM)
                promedio = promedioM
            }
        }
    }

    if (promedio >= 7 && nota1 >= 6 && nota2 >= 6 && nota3 >= 6) {
        console.log("El alumno ha aprobado")
    } else {
        console.log("El alumno ha reprobado")
    }

    if (nota1 <= 5 || nota2 <= 5 || nota3 <= 5) {
        console.log("El alumno debe repetir materias")
    }
}

if (promedioY > promedioE) {
    mejorProm = promedioY
    textoProm = "Yessenia tiene el mejor promedio";
} else {
    mejorProm = promedioE
    textoProm = "Eduardo tiene el mejor promedio";
}

if (mejorProm > promedioM) {
    console.log(textoProm);
} else {
    textoProm = "Miguel tiene el mejor promedio";
    console.log(textoProm);
}



