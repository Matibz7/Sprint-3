 function evaluarQuiz() {
            // Lógica para evaluar el cuestionario
            let respuestasCorrectas = { p1: '3', p2: '4', p3:'4', p4:'3' }; 

            let totalPreguntas = Object.keys(respuestasCorrectas).length;
            let aciertos = 0;

            for (let i = 1; i <= totalPreguntas; i++) {
                let respuestaUsuario = document.querySelector('input[name="p' + i + '"]:checked');

                if (respuestaUsuario) {
                    if (respuestaUsuario.value === respuestasCorrectas['p' + i]) {
                        aciertos++;
                    }
                }
            }

            alert('Has obtenido ' + aciertos + ' de ' + totalPreguntas + ' preguntas correctas.');
        }
   