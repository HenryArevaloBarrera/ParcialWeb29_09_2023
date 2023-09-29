# ParcialWeb29_09_202
Henry Arevalo Barrera

Maquetar una página web responsive que permita tener un formulario para capturar los datos de un empleado, consultar 
un empleado por Id y una tabla para visualizar la lista de empleados. El diseño debe ser responsive de manera que se 
adapte al dispositivo de visualización
Detalle de las actividades:
- Crear un formulario para capturar los siguientes datos de un empleado
o Apellidos (Campo de Texto que solo recibe letras mayúsculas/minúsculas y espacios)
o Nombres (Campo de Texto que solo recibe letras mayúsculas/minúsculas y espacios)
o Departamento (Select que despliega el nombre de los departamentos a partir de la data dada)
o Municipio (Select dependiente que cambia el contenido con base en el cambio de departamento, 
visualiza los municipios del departamento seleccionado en el select de los departamentos)
o Fecha de Nacimiento (cuadro de texto de tipo date)
o Salario (Campo de texto que solo recibe números)
- El formulario tiene un botón para enviar los datos. Al pulsar el botón, se agregan los siguientes campos del 
formulario a una tabla (Id automático, una sola columna con apellidos y nombres, ciudad y edad), de igual 
manera se debe agregar el registro a un arreglo de objetos de empleados. Generar el Id en forma automática 
secuencial
- El campo de búsqueda solo permite valores numéricos ya que el Id es un autonúmerico para cada empleado. 
Al pulsar un botón para la búsqueda, si existe el registro en el arreglo, se visualizan todos sus datos en una 
ventana emergente, sino, visualizar mensaje de error (alert).
