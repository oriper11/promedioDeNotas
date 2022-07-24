let nombre = prompt ("Ingrese nombre completo del alumno")
if (nombre == ""){
  alert ("Es obligatorio completar este campo")

}else if (nombre == ""){
  alert ("No se puede completar este campo con números")
}
let dni = parseInt(prompt("Ingrese DNI del alumno"))
if (dni == ""){
  alert ("Es obligatorio completar este campo")
}
let materia = prompt("Ingrese asignatura correspondiente")
if (materia == ""){
  alert ("Es obligatorio completar este campo")
}
let nota1 = parseInt(prompt ("Ingrese nota de evaluación (1 al 10)"))
let nota2 = parseInt (prompt ("Ingrese nota de trabajos prácticos (1 al 10)"))
let nota3 = parseInt (prompt("Ingrese nota de trabajo en clase (1 al 10)"))
let nota4 = parseInt (prompt("Ingrese nota aptitudinal (1 al 10)"))
let promedio = (nota1 + nota2 + nota3 +nota4)/4

if(promedio < 3)
        alert('El alumno/a se encuentra DESAPROBADO, con una nota menor a 3.');
    else if (promedio < 6)
        alert('El alumno/a se encuentra EN PROCESO de aprender los contenidos, con una nota menor a 6.')
    else if(promedio < 7)
      alert('El alumno/a se encuentra APROBADO con una nota mayor a 7.');
    
         
    