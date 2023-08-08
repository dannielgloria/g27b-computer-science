<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Hora en Rusia y México con chistes</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        function obtenerHora() {
            var fecha = new Date();
            var horaRusia = fecha.toLocaleTimeString('ru-RU', {timeZone: 'Europe/Moscow'});
            var horaMexico = fecha.toLocaleTimeString('es-MX', {timeZone: 'America/Mexico_City'});

            $('#hora-rusia').text(horaRusia);
            $('#hora-mexico').text(horaMexico);

            var horaActual = fecha.getHours();
            var minutosActuales = fecha.getMinutes();

            if ((horaActual === 6 && minutosActuales === 0) || (horaActual === 18 && minutosActuales === 0)) {
                mostrarChiste();
            }
        }

        function mostrarChiste() {
            // Aquí puedes agregar una lista de chistes en ambos idiomas
            var chistesRusia = ["Chiste en ruso 1", "Chiste en ruso 2", "Chiste en ruso 3"];
            var chistesMexico = ["Chiste en español 1", "Chiste en español 2", "Chiste en español 3"];

            var chisteRusia = chistesRusia[Math.floor(Math.random() * chistesRusia.length)];
            var chisteMexico = chistesMexico[Math.floor(Math.random() * chistesMexico.length)];

            $('#chiste-rusia').text(chisteRusia);
            $('#chiste-mexico').text(chisteMexico);
        }

        $(document).ready(function() {
            obtenerHora();
            setInterval(obtenerHora, 1000); // Actualizar la hora cada segundo
        });
    </script>
</head>
<body>
    <h1>Hora en Rusia y México con chistes</h1>
    <h2>Hora en Rusia: <span id="hora-rusia"></span></h2>
    <h2>Hora en México: <span id="hora-mexico"></span></h2>
    <h3>Chiste en Rusia: <span id="chiste-rusia"></span></h3>
    <h3>Chiste en México: <span id="chiste-mexico"></span></h3>
</body>
</html>
