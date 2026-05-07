window.coursesMock = window.coursesMock || [];

// 1. WORD
window.coursesMock.push(
    {
    id: "CUWOBANIBA02",
    courseName: "Curso de Word Nivel Básico: Documentos Maestros Documentos Maestros Documentos Maestros",
    courseDesc: `
<div>
  <h1>
    ¡Bienvenido al Curso de
    <strong>Excel Nivel Básico: Cimientos de productividad</strong> de OmniTech
    Learning! 🚀
  </h1>

  <p>
    En esta serie de lecciones, aprenderás a dominar Microsoft Excel desde los
    fundamentos más sencillos hasta tener un flujo de trabajo profesional y
    eficiente. Este curso, titulado <em>"Cimientos de Productividad"</em>, está
    diseñado para quienes comienzan desde cero o desean reforzar sus bases
    técnicas con la versión más reciente de Excel.
  </p>

  <h3>¿Qué aprenderás en este nivel básico?</h3>

  <ul>
    <li>
      <strong>Entorno de trabajo</strong> y personalización de la interfaz.
    </li>
    <li>
      <strong>Gestión profesional</strong> de archivos y respaldo de datos
      (Autorecuperación).
    </li>
    <li>
      Introducción a <strong>fórmulas, funciones</strong> y automatización de
      tareas.
    </li>
    <li>Creación de <strong>reportes y visualización</strong> de datos.</li>
  </ul>

  <p>
    Este curso es el primer paso de nuestra ruta de aprendizaje que incluye
    niveles <strong>Intermedio y Avanzado</strong>.
  </p>
  <br />
  <p>
    Accede para guardar tu progreso en la nube y suscríbete en YouTube para no
    perderte ninguna lección.
  </p>
  <p>
    <em>¡Capacítate hoy para liderar mañana!</em><br />
    <em>- Omnitech Learning.</em>
  </p>
</div>

        `,
    duration: "12 horas",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop",
    category: "Programación",
    palette: "palette-blue",
    introVideo: "https://www.youtube.com/embed/ydvo8ST5l1A",

    modules: [
        //MÓDULO 01
        {
            moduleTitle: "Módulo 01: Introducción y Entorno de Trabajo",
            lessons: [

                //Lección 01
                {
                    lessonId: "L01",
                    title: "Lección 01: Fundamentos de Excel",
                    video: "https://www.youtube.com/embed/2h1r4DgO0dM",
                    descHTML: `
<div>
    <h2>Lección 01: Fundamentos de Excel</h2>

    <p>
        En esta lección introductoria del curso <strong>"Cimientos de Productividad"</strong>, se establecen las bases
        teóricas indispensables para el dominio de la herramienta de hojas de cálculo más relevante en el ámbito
        profesional contemporáneo. El contenido inicia con un análisis sobre la naturaleza de Microsoft Excel,
        explorando su evolución histórica desde sus orígenes hasta consolidarse como el estándar técnico para la
        organización y el procesamiento de datos a gran escala.
    </p>

    <p>
        Se examina la importancia de implementar un motor de cálculo digital orientado a la mitigación del error humano
        y a la optimización de procesos mediante la automatización. Asimismo, se desarrolla un recorrido por la
        arquitectura técnica del software, definiendo conceptos estructurales básicos como la jerarquía entre
        <strong>Libros, Hojas y Celdas</strong>, y la lógica de coordenadas cartesianas que fundamenta la interacción
        con la información.
    </p>

    <div>
        <h3>Objetivos de aprendizaje:</h3>
        <ul>
            <li><strong>Comprender</strong> el propósito funcional y el alcance operativo de Microsoft Excel.</li>
            <li><strong>Identificar</strong> la anatomía estructural del sistema: Columnas, Filas y Celdas.</li>
            <li><strong>Diferenciar</strong> la configuración técnica de los archivos (Libro frente a Hoja).</li>
            <li><strong>Analizar</strong> el flujo de procesamiento de datos: Entrada, Proceso y Salida.</li>
        </ul>
    </div>
</div>                  `,
                    resumenHTML: `
<div>
    <h2>Fundamentos y Lógica de Excel</h2>

    <h3>1. Definición y Propósito</h3>
    <p>
        Microsoft Excel es una <strong>hoja de cálculo</strong> desarrollada por Microsoft, diseñada para organizar y
        analizar datos de forma profesional. A diferencia de una libreta física o un documento de texto, su magia reside
        en la <strong>automatización</strong> mediante macros y el uso de fórmulas, permitiendo transformar números
        complejos en gráficos visuales fáciles de entender. 📊
    </p>

    <h3>2. Contexto Histórico y Evolución</h3>
    <p>
        Aunque hoy es el estándar mundial en oficinas, Excel tiene un origen curioso: se lanzó primero para <strong>Mac
            en 1985</strong> y posteriormente para Windows. En su inicio, compitió contra el entonces líder
        <strong>Lotus 123</strong>, ganando la batalla gracias a una interfaz mucho más amigable y visual que permitió
        su adopción masiva en los años 90. 🏛️
    </p>

    <h3>3. Lógica de Pensamiento y Coordenadas</h3>
    <p>
        Para dominar el programa, se debe entender que Excel piensa a través de un lienzo infinito dividido por
        coordenadas:
    </p>
    <ul>
        <li><strong>Columnas:</strong> Identificadas por letras.</li>
        <li><strong>Filas:</strong> Identificadas por números.</li>
        <li><strong>Celdas:</strong> El punto de cruce entre una fila y una columna, con una dirección única (v.g.,
            <strong>A1</strong> o <strong>C10</strong>).</li>
    </ul>



    <p>
        <strong>El poder de las referencias:</strong> En lugar de realizar cálculos estáticos (5+5), le indicamos al
        programa que opere con el contenido de las celdas. Esto resuelve el problema del error humano: si cambias un
        dato, todo el sistema se actualiza automáticamente sin tener que borrar y recalcular a mano.
    </p>

    <h3>4. Inteligencia de Datos y Patrones</h3>
    <p>
        Excel reconoce patrones de forma inteligente. Si se escribe "Lunes" y se arrastra el mouse, el programa completa
        los días de la semana automáticamente. Además, distingue de forma nativa la naturaleza de la información:
    </p>
    <ul>
        <li>💵 <strong>Dinero y Contabilidad.</strong></li>
        <li>📅 <strong>Fechas y Cronología.</strong></li>
        <li>🔟 <strong>Porcentajes y Estadísticas.</strong></li>
    </ul>

    <h3>5. Estructura Técnica y Capacidad Masiva</h3>
    <p>
        Un archivo de Excel se denomina técnicamente <strong>Libro</strong>, el cual puede contener múltiples
        <strong>Hojas</strong>. Cada hoja posee una capacidad diseñada para el manejo de grandes volúmenes de registros:
    </p>
    <ul>
        <li><strong>Filas:</strong> 1,048,576 líneas.</li>
        <li><strong>Columnas:</strong> 16,384 columnas.</li>
        <li><strong>Capacidad Total:</strong> Más de 17,000 millones de celdas disponibles. 🚀</li>
    </ul>



    <h3>6. El Flujo de Trabajo Profesional</h3>
    <p>
        El proceso de análisis en Excel siempre sigue tres etapas críticas para una correcta toma de decisiones:
    </p>
    <ol>
        <li><strong>Entrada:</strong> Introducción de los datos en la cuadrícula.</li>
        <li><strong>Proceso:</strong> Aplicación de fórmulas para procesar la información.</li>
        <li><strong>Salida:</strong> Obtención de reportes o gráficos como resultado final.</li>
    </ol>

    <div class="omni-note note-success">
        <span class="omni-note-icon">✅</span>
        <p class="omni-note-content">
            <strong>Nota:</strong> Excel no es solo una tabla de nombres; es un motor de cálculo y una herramienta de
            análisis que te ahorrará horas de trabajo manual, permitiéndote tomar decisiones basadas en datos reales y
            no en suposiciones.
        </p>
    </div>
                        `,
                    actividadesHTML: `
                    <div class="document-guide">
    
    <h1>Guía de Estándares Visuales OmniTech</h1>

    <p>
        Este es un ejemplo de párrafo estándar. Aquí puedes explicar conceptos generales. 
        Recuerda que puedes usar <strong>negritas con el color de acento</strong> y 
        <em>cursivas para énfasis sutiles</em>.
    </p>

    <div class="omni-note note-success">
        <span class="omni-note-icon">✅</span>
        <p class="omni-note-content">
            <strong>Sugerencia:</strong> Úsala para tips de productividad o "buenas prácticas".
        </p>
    </div>

    <div class="omni-note note-tip">
        <span class="omni-note-icon">💡</span>
        <p class="omni-note-content">
            <strong>Advertencia:</strong> Ideal para notas importantes que el alumno no debe olvidar.
        </p>
    </div>

    <div class="omni-note note-danger">
        <span class="omni-note-icon">🚫</span>
        <p class="omni-note-content">
            <strong>Peligro:</strong> Úsala para errores críticos o acciones irreversibles (como borrar datos).
        </p>
    </div>

    <h2>Proceso de Configuración</h2>
    <p>Sigue estos pasos para dominar la interfaz rápidamente:</p>
    
    <div class="flujo-academico">
        <div class="paso" data-paso="1">Haz clic en la pestaña <strong>Archivo</strong>.</div>
        <div class="paso" data-paso="2">Selecciona la opción <strong>Opciones</strong> al final del menú.</div>
        <div class="paso" data-paso="3">Ve a la sección de <strong>Personalizar Cinta</strong>.</div>
        <div class="paso" data-paso="4">Pulsa <kbd>Enter</kbd> para confirmar los cambios.</div>
    </div>

    <h2>Tabla de Atajos Rápidos</h2>
    <div class="tabla-wrapper">
        <table class="tabla-omnitech">
            <thead>
                <tr>
                    <th>Función</th>
                    <th>Comando Pro</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Guardar</td>
                    <td><kbd>Ctrl</kbd> + <kbd>G</kbd></td>
                    <td>Persistencia de datos</td>
                </tr>
                <tr>
                    <td>Imprimir</td>
                    <td><kbd>Ctrl</kbd> + <kbd>P</kbd></td>
                    <td>Vista de impresión</td>
                </tr>
                <tr>
                    <td>Cerrar</td>
                    <td><kbd>Alt</kbd> + <kbd>F4</kbd></td>
                    <td>Salir del programa</td>
                </tr>
            </tbody>
        </table>
    </div>

    <h3>Requisitos del Módulo</h3>
    <ul>
        <li>Tener instalado Microsoft Excel 2021 o superior.</li>
        <li>Haber completado la <strong>Lección 01</strong>.</li>
        <li>Ganas de aprender y mucha café. ☕</li>
    </ul>

</div>
                    `,

                    resMsg: "Descarga el material de apoyo para seguir la práctica de la clase.",
                    resources: [{ name: "Interfaz_Excel_Guia.pdf", url: "./assets/media/CUEXESNIBA01/L02_Guia.pdf" }],

                    quizMsg: "¡Ponte a prueba! Este primer bloque evalúa los conceptos teóricos sobre el ingreso de datos y el comportamiento de Excel.",
                    quiz: [
                        {
                            q: "Si un número se alinea automáticamente a la izquierda tras presionar Enter, ¿qué significa?",
                            a: [
                                "Que es un número negativo",
                                "Que Excel lo está interpretando como texto",
                                "Que la celda tiene un formato de moneda",
                                "Que el número es demasiado grande",
                            ],
                            c: 1,
                        },
                        {
                            q: "¿Cuál es el nombre técnico del cuadro verde en la esquina inferior derecha de la celda activa?",
                            a: [
                                "Punto de anclaje",
                                "Selector de rangos",
                                "Controlador de relleno",
                                "Nodo de expansión",
                            ],
                            c: 2,
                        },
                        {
                            q: "¿Qué sucede si haces doble clic en el controlador de relleno?",
                            a: [
                                "Se borra el contenido",
                                "Se abre el menú de formato",
                                "La serie se completa automáticamente hasta el final de la tabla adyacente",
                                "Se inserta una nueva fila",
                            ],
                            c: 2,
                        },
                        {
                            q: "¿Qué tecla permite cancelar un ingreso de datos mientras estás escribiendo, antes de confirmar?",
                            a: ["Enter", "Esc", "Suprimir", "Retroceso"],
                            c: 1,
                        },
                        {
                            q: "¿Cuál es el atajo de teclado para rellenar hacia abajo el contenido de la celda superior?",
                            a: ["Ctrl + C", "Ctrl + V", "Ctrl + J", "Ctrl + E"],
                            c: 2,
                        },
                        {
                            q: "Si un número se alinea automáticamente a la izquierda tras presionar Enter, ¿qué significa?",
                            a: [
                                "Que es un número negativo",
                                "Que Excel lo está interpretando como texto",
                                "Que la celda tiene un formato de moneda",
                                "Que el número es demasiado grande",
                            ],
                            c: 1,
                        },
                        {
                            q: "¿Cuál es el nombre técnico del cuadro verde en la esquina inferior derecha de la celda activa?",
                            a: [
                                "Punto de anclaje",
                                "Selector de rangos",
                                "Controlador de relleno",
                                "Nodo de expansión",
                            ],
                            c: 2,
                        },
                        {
                            q: "¿Qué sucede si haces doble clic en el controlador de relleno?",
                            a: [
                                "Se borra el contenido",
                                "Se abre el menú de formato",
                                "La serie se completa automáticamente hasta el final de la tabla adyacente",
                                "Se inserta una nueva fila",
                            ],
                            c: 2,
                        },
                        {
                            q: "¿Qué tecla permite cancelar un ingreso de datos mientras estás escribiendo, antes de confirmar?",
                            a: ["Enter", "Esc", "Suprimir", "Retroceso"],
                            c: 1,
                        },
                        {
                            q: "¿Cuál es el atajo de teclado para rellenar hacia abajo el contenido de la celda superior?",
                            a: ["Ctrl + C", "Ctrl + V", "Ctrl + J", "Ctrl + E"],
                            c: 2,
                        },
                    ]
                },

                //Lección 02
                {
                    lessonId: "L02",
                    title: "Lección 02: Interfaz de Usuario y Entorno de Trabajo",
                    video: "https://www.youtube.com/embed/8PF5ndqYEOU",
                    descHTML: `
    <div>
            <h2>Interfaz de Usuario (UI)</h2>
            <p>
                El dominio de la <strong>Cinta de Opciones</strong>, la Barra de Acceso Rápido y los elementos de navegación es crítico para alcanzar una eficiencia técnica superior. Se enfatizará la comprensión de la jerarquía visual del programa para optimizar el flujo de trabajo diario.
            </p>
            <h3>Objetivos de aprendizaje:</h3>
            <ul>
                <li><strong>Navegar</strong> por la pantalla de inicio y sección de plantillas.</li>
                <li><strong>Identificar</strong> funciones de la Cinta de Opciones.</li>
                <li><strong>Interpretar</strong> la información dinámica de la Barra de Estado.</li>
            </ul>
        </div>`,
                    resumenHTML: `
        <div>
            <h2>Anatomía del Entorno de Trabajo</h2>
            <p>Excel organiza sus herramientas de manera jerárquica para no interrumpir el flujo de análisis.</p>
            
            <h3>1. Acceso al Programa</h3>
            <div class="flujo-academico paleta-excel">
                <div class="paso" data-paso="1">Botón de <strong>Inicio</strong></div>
                <div class="paso" data-paso="2">Escribir "Excel"</div>
                <div class="paso" data-paso="3">Presionar <strong>Enter</strong></div>
            </div>

            <div class="omni-note note-tip">
                <p><strong>Tip:</strong> Usa <kbd>Win</kbd> + <kbd>R</kbd> y escribe <code>excel</code> para apertura instantánea.</p>
            </div>

            <h3>2. Cinta de Opciones (Ribbon)</h3>
            <p>Es el centro de mandos. Contiene pestañas y grupos con botones específicos.</p>

            <div class="omni-note note-success">
                <p><strong>Sugerencia:</strong> Haz doble clic en cualquier pestaña para contraer la cinta y ganar espacio visual.</p>
            </div>

            <div class="ficha-herramienta paleta-excel">
                <div class="ficha-cuerpo-derecho">
                    <h4 class="ficha-nombre">Navegación Maestra</h4>
                    <p class="ficha-descripcion">Regresa inmediatamente a la celda A1.</p>
                    <div class="ficha-atajo-footer"><kbd>Ctrl</kbd> + <kbd>Inicio</kbd></div>
                </div>
            </div>
        </div>`,
                    actividadHTML: "", // Campo nuevo: Se mantiene vacío para esta lección según tu lógica

                    resMsg: "Descarga el material de apoyo para seguir la práctica de la clase.",
                    resources: [{ name: "Interfaz_Excel_Guia.pdf", url: "./assets/media/CUEXESNIBA01/L02_Guia.pdf" }],

                    quizMsg: "Responde este breve cuestionario para validar tus conocimientos de la Lección.",
                    quiz: [
                        {
                            q: "¿Qué elemento visual nos permite identificar que una celda es la 'Celda Activa'?",
                            a: [
                                "Su borde se resalta de color verde",
                                "La celda cambia a color rojo",
                                "Se ocultan las filas adyacentes",
                                "Aparece una ventana emergente"
                            ],
                            c: 0
                        },
                        {
                            q: "¿En qué parte de la interfaz se muestran automáticamente el promedio y la suma de un rango seleccionado?",
                            a: [
                                "En la Cinta de Opciones",
                                "En la Barra de Estado",
                                "En el Cuadro de Nombres",
                                "En la Barra de Fórmulas"
                            ],
                            c: 1
                        },
                        {
                            q: "¿Cómo se denominan las etiquetas horizontales identificadas con números?",
                            a: ["Columnas", "Rangos", "Filas", "Celdas"],
                            c: 2
                        },
                        {
                            q: "¿Cuál es la función del Cuadro de Nombres?",
                            a: [
                                "Cambiar el color de la fuente",
                                "Guardar el archivo automáticamente",
                                "Mostrar la dirección de la celda seleccionada",
                                "Insertar gráficos estadísticos"
                            ],
                            c: 2
                        },
                        {
                            q: "¿Qué sucede al hacer doble clic en una de las pestañas de la Cinta de Opciones?",
                            a: [
                                "Se cierra el programa",
                                "Se guarda el libro automáticamente",
                                "La cinta de opciones se contrae u oculta",
                                "Se crea una hoja nueva"
                            ],
                            c: 2
                        },
                        {
                            q: "¿Qué elemento visual nos permite identificar que una celda es la 'Celda Activa'?",
                            a: [
                                "Su borde se resalta de color verde",
                                "La celda cambia a color rojo",
                                "Se ocultan las filas adyacentes",
                                "Aparece una ventana emergente"
                            ],
                            c: 0
                        },
                        {
                            q: "¿En qué parte de la interfaz se muestran automáticamente el promedio y la suma de un rango seleccionado?",
                            a: [
                                "En la Cinta de Opciones",
                                "En la Barra de Estado",
                                "En el Cuadro de Nombres",
                                "En la Barra de Fórmulas"
                            ],
                            c: 1
                        },
                        {
                            q: "¿Cómo se denominan las etiquetas horizontales identificadas con números?",
                            a: ["Columnas", "Rangos", "Filas", "Celdas"],
                            c: 2
                        },
                        {
                            q: "¿Cuál es la función del Cuadro de Nombres?",
                            a: [
                                "Cambiar el color de la fuente",
                                "Guardar el archivo automáticamente",
                                "Mostrar la dirección de la celda seleccionada",
                                "Insertar gráficos estadísticos"
                            ],
                            c: 2
                        },
                        {
                            q: "¿Qué sucede al hacer doble clic en una de las pestañas de la Cinta de Opciones?",
                            a: [
                                "Se cierra el programa",
                                "Se guarda el libro automáticamente",
                                "La cinta de opciones se contrae u oculta",
                                "Se crea una hoja nueva"
                            ],
                            c: 2
                        },
                    ]
                },
            ],
        },

    ],
}
);
