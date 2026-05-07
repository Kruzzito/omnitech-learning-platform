
window.coursesMock = window.coursesMock || [];

window.coursesMock.push(
    {
    id: "CUEXESNIBA01",
    courseName: "Excel Nivel Básico: Cimientos de productividad",
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
    duration: "15 horas",
    image: "./assets/banners/CUEXESNIBA01.jpg",
    category: "Ofimática",
    palette: "palette-emerald",
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
                    actividadesHTML: ``,

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
                    ],

                    quizMsg2: "¡Excelente! Ahora veamos qué tanto dominas la lógica procedimental de la actividad práctica que realizamos.",
                    quiz2: [
                        {
                            q: "En la actividad, para crear la serie de 50 en 50 (100, 150...), ¿qué paso fue fundamental?",
                            a: [
                                "Escribir 100 y arrastrar",
                                "Seleccionar ambas celdas (100 y 150) antes de arrastrar",
                                "Presionar la tecla Alt mientras arrastras",
                                "Hacer clic derecho en la celda",
                            ],
                            c: 1,
                        },
                        {
                            q: "Al rellenar la columna de fechas, ¿cómo logramos que Excel omitiera los fines de semana?",
                            a: [
                                "Borrando los sábados manualmente",
                                "Usando el atajo Ctrl + E",
                                "Seleccionando 'Rellenar días laborables' en el menú de opciones de autorrelleno",
                                "Cambiando el idioma del sistema",
                            ],
                            c: 2,
                        },
                        {
                            q: "¿Cómo debe verse el cursor para poder ejecutar el autorrelleno correctamente?",
                            a: [
                                "Como una cruz blanca gruesa",
                                "Como una flecha de cuatro puntas",
                                "Como una cruz negra delgada",
                                "Como una mano",
                            ],
                            c: 2,
                        },
                        {
                            q: "Si en la columna C del ejercicio obtuviste solo números 100 repetidos, ¿cuál fue el error?",
                            a: [
                                "No tenías internet",
                                "No seleccionaste el patrón inicial de dos celdas",
                                "La celda estaba bloqueada",
                                "Presionaste Esc por error",
                            ],
                            c: 1,
                        },
                        {
                            q: "En la columna D de la actividad, si el viernes es 13 y la siguiente celda es 16, ¿qué opción de relleno se aplicó?",
                            a: [
                                "Serie cronológica simple",
                                "Copiar celdas",
                                "Rellenar días laborables",
                                "Rellenar solo formatos",
                            ],
                            c: 2,
                        },
                    ],
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
                        }
                    ]
                },

                //Leccion 03
                {
                    lessonId: "L03", // Siguiendo la nomenclatura de la L01
                    title: "Lección 03: La Cinta de Opciones y Grupos",
                    video: "https://www.youtube.com/embed/bmM4Gm051a8",

                    descHTML: `
<div>
    <h2>Lección 03: La Cinta de Opciones y Grupos</h2>
    
    <p>
        La eficiencia operativa en Microsoft Excel depende directamente de la capacidad del usuario para organizar su entorno de trabajo. En esta unidad, se profundiza en la arquitectura de la <strong>Cinta de Opciones</strong> y la gestión de <strong>Grupos de Comandos</strong>, permitiendo una personalización avanzada que reduce los tiempos de ejecución en tareas repetitivas.
    </p>

    <p>
        Se analizan los procedimientos técnicos para la creación de estructuras personalizadas, tales como pestañas de usuario y grupos específicos de herramientas. Asimismo, se aborda la importancia de la <strong>interoperabilidad</strong> mediante la exportación de archivos de configuración, garantizando que el entorno de trabajo óptimo sea portable entre distintos dispositivos y estaciones de trabajo.
    </p>

    <div>
        <h3>Objetivos de aprendizaje:</h3>
        <ul>
            <li><strong>Configurar</strong> la Barra de Acceso Rápido mediante la adición de comandos frecuentes.</li>
            <li><strong>Diseñar</strong> pestañas y grupos personalizados dentro de la Cinta de Opciones.</li>
            <li><strong>Gestionar</strong> la portabilidad del entorno mediante la exportación e importación de perfiles.</li>
            <li><strong>Optimizar</strong> el espacio visual mediante el anclaje y repliegue de herramientas.</li>
        </ul>
    </div>
</div>
    `,
                    resumenHTML: `
<div>
    <h2>La Cinta de Opciones y Gestión de Grupos</h2>

    <p>La Cinta de Opciones es el centro neurálgico de Excel. Su diseño está pensado para que el usuario evolucione de un uso básico a una personalización avanzada que se adapte a sus necesidades específicas de trabajo.</p>

    <h3>1. Organización Lógica de Comandos</h3>
    <p>Cada pestaña en Excel responde a una etapa del flujo de trabajo. Es fundamental entender qué buscar en cada una para no perder tiempo navegando al azar:</p>
    
    <ul>
        <li><strong>Inicio:</strong> Contiene las herramientas de formato, portapapeles y edición básica.</li>
        <li><strong>Insertar:</strong> Se utiliza para añadir elementos externos como tablas dinámicas, ilustraciones y gráficos.</li>
        <li><strong>Fórmulas:</strong> Biblioteca completa de funciones lógicas, matemáticas y de búsqueda.</li>
        <li><strong>Datos:</strong> Herramientas para la limpieza, conexión y validación de información externa.</li>
    </ul>

    <div class="omni-note note-success">
        <span class="omni-note-icon">✅</span>
        <p class="omni-note-content"><strong>Sugerencia:</strong> Si sientes que la cinta ocupa mucho espacio visual, usa el atajo <kbd>Ctrl</kbd> + <kbd>F1</kbd> para contraerla o expandirla instantáneamente.</p>
    </div>

    <h3>2. Personalización de la Cinta</h3>
    <p>Excel permite crear un entorno de trabajo a medida, permitiendo crear pestañas propias con los comandos que usas con mayor frecuencia.</p>

    <p><strong>Flujo para crear una Pestaña Personalizada:</strong></p>
    <div class="flujo-academico paleta-excel">
        <div class="paso" data-paso="1">Clic derecho en la <strong>Cinta</strong></div>
        <div class="paso" data-paso="2">Personalizar la cinta de opciones</div>
        <div class="paso" data-paso="3">Clic en <strong>Nueva pestaña</strong></div>
        <div class="paso" data-paso="4">Cambiar nombre y Agregar comandos</div>
        <div class="paso" data-paso="5">CLIC EN ACEPTAR</div>
    </div>

    <h3>3. Grupos y Lanzadores de Diálogo</h3>
    <p>Dentro de cada pestaña, los comandos están organizados en <strong>Grupos</strong> (ej: Fuente, Alineación, Número). Algunos grupos tienen una pequeña flecha en la esquina inferior derecha llamada "Lanzador de cuadro de diálogo".</p>

    <div class="omni-note note-success">
        <span class="omni-note-icon">✅</span>
        <p class="omni-note-content"><strong>Sugerencia:</strong> Cuando no encuentres una opción avanzada de formato en la cinta, haz clic en el Lanzador de Diálogo del grupo; ahí encontrarás todas las opciones detalladas que no caben en el menú principal.</p>
    </div>

    <h3>4. Pestañas Contextuales</h3>
    <p>Existen pestañas "invisibles" que solo aparecen cuando seleccionas un objeto específico.</p>

    <p><strong>Flujo para activar herramientas de diseño:</strong></p>
    <div class="flujo-academico paleta-excel">
        <div class="paso" data-paso="1">Insertar objeto (Imagen o Tabla)</div>
        <div class="paso" data-paso="2">Hacer clic sobre el objeto</div>
        <div class="paso" data-paso="3">Ver <strong>Pestaña Contextual</strong> al final</div>
        <div class="paso" data-paso="4">Modificar estilo o propiedades</div>
    </div>

    <div class="ficha-herramienta paleta-excel">
        <div class="ficha-icon-box">⌨️</div>
        <div class="ficha-cuerpo-derecho">
            <h4 class="ficha-nombre">Navegación por Teclado</h4>
            <p class="ficha-descripcion">
                Activa las etiquetas de acceso rápido para usar cualquier comando de la cinta sin necesidad de tocar el mouse.
            </p>
            <div class="ficha-atajo-footer">
                <kbd>Alt</kbd>
            </div>
        </div>
    </div>
</div>
    `,
                    actividadesHTML: ``, // Espacio para futuras prácticas dirigidas

                    resMsg: "Descarga el material de apoyo para configurar tu entorno de trabajo igual al del instructor.",
                    resources: [{ name: "Guia_Personalizacion_Cinta.pdf", url: "./assets/media/CUEXESNIBA01/L03_Guia.pdf" }],

                    quizMsg: "Responde este breve cuestionario para validar tus conocimientos sobre la interfaz avanzada.",
                    quiz: [
                        {
                            q: "¿Qué permite hacer la opción 'Exportar' dentro de la ventana de personalización de la cinta de opciones?",
                            a: [
                                "Enviar un correo electrónico con el archivo abierto",
                                "Guardar un archivo de respaldo con nuestra configuración de la interfaz",
                                "Convertir el libro actual en un documento PDF",
                                "Cerrar la sesión de usuario de Microsoft Office"
                            ],
                            c: 1
                        },
                        {
                            q: "¿Cómo podemos ocultar temporalmente la Cinta de Opciones para ganar más espacio de trabajo?",
                            a: [
                                "Borrando todos los datos de la hoja",
                                "Haciendo doble clic sobre cualquiera de las pestañas",
                                "Desconectando el mouse de la computadora",
                                "Presionando la tecla Esc tres veces"
                            ],
                            c: 1
                        },
                        {
                            q: "¿En qué orden se organizan los elementos personalizados dentro de la Cinta de Opciones?",
                            a: [
                                "Comandos > Grupos > Pestañas",
                                "Pestañas > Grupos > Comandos",
                                "Grupos > Comandos > Pestañas",
                                "Archivos > Pestañas > Celdas"
                            ],
                            c: 1
                        },
                        {
                            q: "¿Qué sucede si seleccionamos la opción 'Restablecer' en la configuración de la Cinta de Opciones?",
                            a: [
                                "Se reinicia la computadora automáticamente",
                                "Se borran todas las fórmulas del libro",
                                "Excel vuelve a su configuración visual por defecto",
                                "Se actualiza el software a la última versión"
                            ],
                            c: 2
                        },
                        {
                            q: "Para encontrar un comando que no aparece en la lista de los más frecuentes, ¿qué opción debemos seleccionar?",
                            a: [
                                "Comandos populares",
                                "Solo pestañas principales",
                                "Todos los comandos",
                                "Comandos de macros"
                            ],
                            c: 2
                        }
                    ]
                },

                //Lección 04
                {
                    lessonId: "L04",
                    title: "Lección 04: El flujo de trabajo: Crear, Guardar y abrir archivos",
                    video: "https://www.youtube.com/embed/eZ7no0XZk4A",

                    descHTML: `
<div>
    <h2>Lección 04: El flujo de trabajo: Crear, Guardar y abrir archivos</h2>
    
    <p>
        La gestión documental eficiente es un pilar fundamental en la administración de datos. En esta unidad, se aborda el <strong>flujo operativo integral</strong> de Microsoft Excel, desde la instanciación de nuevos libros hasta los protocolos avanzados de almacenamiento y recuperación de información.
    </p>

    <p>
        Se enfatiza la importancia de los mecanismos de seguridad digital, específicamente la configuración de la <strong>Autorrecuperación</strong>, para mitigar el riesgo de pérdida de datos ante eventualidades técnicas. Asimismo, se exploran las diversas modalidades de exportación y colaboración en la nube, herramientas esenciales para el trabajo cooperativo en entornos profesionales modernos.
    </p>

    <div>
        <h3>Objetivos de aprendizaje:</h3>
        <ul>
            <li><strong>Ejecutar</strong> la creación y apertura de libros mediante comandos de teclado y menús contextuales.</li>
            <li><strong>Distinguir</strong> entre los procesos de persistencia de datos (Guardar) y duplicación (Guardar como).</li>
            <li><strong>Configurar</strong> intervalos de respaldo automático para garantizar la integridad de la información.</li>
            <li><strong>Exportar</strong> documentos en formatos de lectura universal como PDF y formatos estructurados (CSV).</li>
        </ul>
    </div>
</div>
    `,
                    resumenHTML: `
<div>
    <h2>Flujo de Gestión Documental y Seguridad</h2>

    <p>La correcta administración de archivos es la base de un trabajo profesional. En Excel, el flujo de gestión no solo implica almacenar datos, sino garantizar su integridad y accesibilidad a largo plazo.</p>

    <h3>1. Creación y Apertura de Libros</h3>
    <p>El flujo operativo comienza desde la pantalla de inicio, donde podemos optar por un lienzo en blanco o aprovechar la inteligencia colectiva mediante el uso de plantillas prediseñadas.</p>

    <div class="flujo-academico paleta-excel">
        <div class="paso" data-paso="1">Pestaña <strong>Archivo</strong></div>
        <div class="paso" data-paso="2">Opción <strong>Nuevo</strong></div>
        <div class="paso" data-paso="3">Elegir <strong>Libro en blanco</strong></div>
    </div>

    <div class="omni-note note-success">
        <span class="omni-note-icon">✅</span>
        <p class="omni-note-content"><strong>Sugerencia:</strong> Utiliza las plantillas de "Presupuesto" o "Calendario" para entender cómo los expertos estructuran sus hojas de cálculo antes de empezar una desde cero.</p>
    </div>

    <h3>2. Persistencia de Datos: Guardar vs. Guardar como</h3>
    <p>Es fundamental distinguir estos dos procesos para evitar la sobreescritura accidental de información crítica:</p>
    <ul>
        <li><strong>Guardar (Ctrl + G):</strong> Actualiza los cambios en el archivo actual.</li>
        <li><strong>Guardar como (F12):</strong> Crea una copia nueva del archivo. Es ideal para generar versiones (ej: "Reporte_Enero_V2").</li>
    </ul>

    <h3>3. Seguridad y Autorrecuperación</h3>
    <p>Para mitigar el riesgo de pérdida de datos, Excel permite parametrizar el tiempo de respaldo automático.</p>

    <p><strong>Flujo para configurar el respaldo automático:</strong></p>
    <div class="flujo-academico paleta-excel">
        <div class="paso" data-paso="1">Pestaña <strong>Archivo</strong></div>
        <div class="paso" data-paso="2">Clic en <strong>Opciones</strong></div>
        <div class="paso" data-paso="3">Sección <strong>Guardar</strong></div>
        <div class="paso" data-paso="4">Ajustar a <strong>1 minuto</strong></div>
        <div class="paso" data-paso="5">CLIC EN ACEPTAR</div>
    </div>

    <div class="omni-note note-warning">
        <span class="omni-note-icon">⚠️</span>
        <p class="omni-note-content">
        <strong>¡Cuidado!</strong> La autorrecuperación no sustituye al comando Guardar. Asegúrate de salvar tu progreso manualmente.
        </p>
    </div>

    <h3>4. Exportación y Salida de Datos</h3>
    <p>Cuando el informe está listo para ser compartido, el formato PDF es el estándar profesional por excelencia.</p>

    <div class="flujo-academico paleta-excel">
        <div class="paso" data-paso="1">Pestaña <strong>Archivo</strong></div>
        <div class="paso" data-paso="2">Clic en <strong>Exportar</strong></div>
        <div class="paso" data-paso="3">Crear documento <strong>PDF/XPS</strong></div>
        <div class="paso" data-paso="4">Publicar</div>
    </div>

    <div class="ficha-herramienta paleta-excel">
        <div class="ficha-icon-box">⌨️</div>
        <div class="ficha-cuerpo-derecho">
            <h4 class="ficha-nombre">Guardado Instantáneo</h4>
            <p class="ficha-descripcion">
                Adquiere el hábito de presionar este comando constantemente. Es la mejor defensa contra imprevistos.
            </p>
            <div class="ficha-atajo-footer">
                <kbd>Ctrl</kbd> <span class="atajo-plus">+</span> <kbd>G</kbd>
            </div>
        </div>
    </div>
</div>
    `,
                    actividadesHTML: ``,

                    resMsg: "Descarga el material de apoyo para seguir la práctica de la clase.",
                    resources: [{ name: "Guia_Gestion_Archivos.pdf", url: "./assets/media/CUEXESNIBA01/L04_Guia.pdf" }],

                    quizMsg: "Responde este breve cuestionario para validar tus conocimientos de la Lección.",
                    quiz: [
                        {
                            q: "¿Cuál es el método abreviado de teclado para invocar rápidamente la ventana de 'Guardar como'?",
                            a: ["Ctrl + S", "F12", "Alt + G", "Ctrl + P"],
                            c: 1
                        },
                        {
                            q: "¿Qué sucede si configuramos la Autorrecuperación en 1 minuto?",
                            a: [
                                "El programa se cierra cada minuto",
                                "Excel borra los datos antiguos automáticamente",
                                "Se crea un respaldo de seguridad del archivo con mayor frecuencia",
                                "El archivo se envía por correo cada minuto"
                            ],
                            c: 2
                        },
                        {
                            q: "¿Qué comando de teclado se utiliza para crear un nuevo libro de Excel desde cero?",
                            a: ["Ctrl + N", "Ctrl + A", "Ctrl + U", "Ctrl + L"],
                            c: 2
                        },
                        {
                            q: "¿Cuál es la principal utilidad de exportar un archivo como PDF?",
                            a: [
                                "Permitir que otros editen las fórmulas libremente",
                                "Asegurar que el documento se vea igual en cualquier dispositivo y no sea editable",
                                "Reducir el número de filas de la hoja",
                                "Hacer que el archivo sea compatible con versiones de Excel de 1985"
                            ],
                            c: 1
                        },
                        {
                            q: "¿Qué tipo de archivo se debe utilizar para guardar datos planos delimitados por comas para otros sistemas?",
                            a: [
                                "Plantilla de Excel (.xltx)",
                                "Libro binario (.xlsb)",
                                "CSV (delimitado por comas)",
                                "Documento de Word (.docx)"
                            ],
                            c: 2
                        }
                    ]
                }
            ],
        },

        //MÓDULO 02
        {
            moduleTitle: "Módulo 02: Primeros Pasos con los Datos",
            lessons: [

                //Leccion 05
                {
                    lessonId: "L05",
                    title: "Lección 05: Ingreso de Datos y Auto relleno",
                    video: "https://www.youtube.com/embed/ydvo8ST5l1A",

                    descHTML: `
<div>
    <h2>Lección 05: Ingreso de Datos y Auto relleno</h2>
    
    <p>
        Una vez configurado el entorno de trabajo, es fundamental dominar la unidad básica de interacción en Excel: la entrada de información. En esta unidad, se analiza el <strong>flujo técnico de captura de datos</strong>, distinguiendo entre valores constantes y variables, y cómo el software interpreta la naturaleza de cada ingreso.
    </p>

    <p>
        Se profundiza en el uso del <strong>Controlador de Relleno</strong>, una de las herramientas de productividad más potentes del programa. El estudiante aprenderá a utilizar algoritmos de predicción para completar secuencias lógicas, series numéricas y patrones cronológicos, reduciendo significativamente el tiempo de transcripción manual.
    </p>

    <div>
        <h3>Objetivos de aprendizaje:</h3>
        <ul>
            <li><strong>Ejecutar</strong> el ingreso correcto de diferentes tipos de datos (texto, números y fechas).</li>
            <li><strong>Dominar</strong> el uso del controlador de relleno para la automatización de series.</li>
            <li><strong>Identificar</strong> y aplicar las opciones de autorrelleno mediante el menú contextual.</li>
            <li><strong>Optimizar</strong> la creación de secuencias lógicas en la cuadrícula.</li>
        </ul>
    </div>
</div>
    `,
                    resumenHTML: `
<div>
    <h2>Gestión de Ingreso y Automatización de Series</h2>

    <p>El ingreso de datos es el proceso de alimentación del motor de cálculo de Excel. Hacerlo de manera eficiente garantiza que las fórmulas posteriores funcionen correctamente.</p>

    <h3>1. El Ciclo de Ingreso en la Celda Activa</h3>
    <div class="flujo-academico paleta-excel">
        <div class="paso" data-paso="1">Seleccionar celda (Borde verde)</div>
        <div class="paso" data-paso="2">Escribir el contenido directamente</div>
        <div class="paso" data-paso="3">Presionar <strong>Enter</strong> o <strong>Tab</strong></div>
    </div>

    <div class="omni-note note-tip">
        <span class="omni-note-icon">💡</span>
        <p class="omni-note-content"><strong>Tip:</strong> Presiona <code>Esc</code> para cancelar un ingreso antes de dar Enter y recuperar el valor original.</p>
    </div>

    <h3>2. Tipos de Datos y Alineación</h3>
    <ul>
        <li><strong>Texto:</strong> Se alinea a la <strong>izquierda</strong>.</li>
        <li><strong>Números y Fechas:</strong> Se alinean a la <strong>derecha</strong>.</li>
    </ul>

    <div class="omni-note note-warning">
        <span class="omni-note-icon">⚠️</span>
        <p class="omni-note-content">Si un número queda a la izquierda, Excel lo lee como texto. Revisa espacios extras o el separador decimal.</p>
    </div>

    <h3>3. El Controlador de Relleno</h3>
    <p>Es el cuadrado verde en la esquina inferior derecha. Permite:</p>
    <ul>
        <li><strong>Copiar:</strong> Repetir valores constantes.</li>
        <li><strong>Series:</strong> Completar meses, días o secuencias lógicas.</li>
    </ul>

    <div class="ficha-herramienta paleta-excel">
        <div class="ficha-icon-box">⌨️</div>
        <div class="ficha-cuerpo-derecho">
            <h4 class="ficha-nombre">Relleno hacia abajo veloz</h4>
            <p class="ficha-descripcion">Copia el contenido de la celda superior instantáneamente.</p>
            <div class="ficha-atajo-footer"><kbd>Ctrl</kbd> + <kbd>J</kbd></div>
        </div>
    </div>
</div>
    `,
                    actividadesHTML: `
<div id="lesson-activities-content" class="color-verde">
    <h2 class="actividad-titulo">Actividad Práctica: Series Inteligentes</h2>

    <div class="objetivo-container">
        <div class="objetivo-icon">🎯</div>
        <div class="objetivo-texto">
            <strong>Objetivo:</strong> Dominar la automatización mediante herramientas de predicción.
        </div>
    </div>

    <ul class="lista-instrucciones-omnitech">
        <li>En <strong>A1</strong>, escribe "Lunes" y rellena hasta el domingo.</li>
        <li>En <strong>B1</strong>, escribe "Enero" y usa <strong>doble clic</strong> en el controlador para llegar a Diciembre.</li>
        <li>En la columna <strong>C</strong>, crea una serie de 100 en 100 hasta 500.</li>
        <li>En la columna <strong>D</strong>, usa la fecha de hoy y rellena 10 días usando <strong>"Rellenar solo días laborables"</strong>.</li>
    </ul>

    <div class="tabla-wrapper">
        <table class="tabla-omnitech">
            <thead>
                <tr>
                    <th>Ref</th>
                    <th>Col A (Días)</th>
                    <th>Col B (Meses)</th>
                    <th>Col C (+50)</th>
                    <th>Col D (Laborables)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Fila 1</td><td>Lunes</td><td>Enero</td><td>100</td><td>10/02/2026</td></tr>
                <tr><td>Fila 5</td><td>Viernes</td><td>Mayo</td><td>300</td><td><strong>16/02/2026*</strong></td></tr>
            </tbody>
        </table>
    </div>

    <div class="omni-note note-success">
        <span class="omni-note-icon">✅</span>
        <p class="omni-note-content">Si en la Fila 5 la fecha saltó del viernes al lunes, ¡lo hiciste perfecto!</p>
    </div>
</div>
    `,

                    resMsg: "Descarga la guía de atajos de teclado para ingreso masivo de datos.",
                    resources: [
                        { name: "Texto", url: "./assets/media/text.docx" },
                        { name: "Calculo", url: "./assets/media/calc.xlsx" },
                        { name: "Imagen", url: "./assets/media/images.png" },
                        { name: "Pdfs", url: "./assets/media/pdfs.pdf" },
                        
                     ],

                    quizMsg: "Bloque 1: Conceptos teóricos y comportamiento de Excel.",
                    quiz: [
                        {
                            q: "Si un número se alinea automáticamente a la izquierda, ¿qué significa?",
                            a: ["Es negativo", "Interpretado como texto", "Tiene formato moneda", "Es muy grande"],
                            c: 1
                        },
                        {
                            q: "¿Nombre técnico del cuadro verde en la esquina inferior derecha?",
                            a: ["Punto anclaje", "Selector rangos", "Controlador de relleno", "Nodo expansión"],
                            c: 2
                        },
                        {
                            q: "¿Qué sucede al hacer doble clic en el controlador de relleno?",
                            a: ["Se borra todo", "Abre menú formato", "Completa la serie automáticamente", "Inserta fila"],
                            c: 2
                        },
                        {
                            q: "¿Tecla para cancelar un ingreso antes de confirmar?",
                            a: ["Enter", "Esc", "Suprimir", "Retroceso"],
                            c: 1
                        },
                        {
                            q: "¿Atajo para rellenar hacia abajo desde la celda superior?",
                            a: ["Ctrl + C", "Ctrl + V", "Ctrl + J", "Ctrl + E"],
                            c: 2
                        }
                    ],

                    quizMsg2: "Bloque 2: Lógica procedimental de la actividad práctica.",
                    quiz2: [
                        {
                            q: "Para crear la serie de 50 en 50, ¿qué paso fue fundamental?",
                            a: ["Escribir 100 y arrastrar", "Seleccionar ambas celdas (100 y 150) antes de arrastrar", "Usar Alt", "Clic derecho"],
                            c: 1
                        },
                        {
                            q: "Para omitir fines de semana en las fechas, ¿qué opción se usó?",
                            a: ["Borrar manual", "Ctrl + E", "Rellenar días laborables", "Cambiar idioma"],
                            c: 2
                        },
                        {
                            q: "¿Cómo debe verse el cursor para autorrelleno?",
                            a: ["Cruz blanca", "Flechas 4 puntas", "Cruz negra delgada", "Mano"],
                            c: 2
                        },
                        {
                            q: "Si en la columna C solo obtuviste '100' repetido, ¿cuál fue el error?",
                            a: ["Sin internet", "No seleccionaste el patrón de dos celdas", "Celda bloqueada", "Presionaste Esc"],
                            c: 1
                        },
                        {
                            q: "Si del viernes 13 salta al lunes 16, ¿qué opción se aplicó?",
                            a: ["Serie cronológica", "Copiar celdas", "Rellenar días laborables", "Solo formatos"],
                            c: 2
                        }
                    ]
                },

                //Lección 06
                {
                    lessonId: "L06",
                    title: "Lección 06: Creación y uso de Listas Personalizadas",
                    video: "https://www.youtube.com/embed/ydvo8ST5l1A",

                    descHTML: `
<div>
    <h2>Lección 06: Creación y uso de Listas Personalizadas</h2>
    
    <p>
        El potencial de automatización en Microsoft Excel no se limita a las secuencias predefinidas por el sistema. En esta unidad, aprenderás a programar el software para que reconozca y complete <strong>listas de datos personalizadas</strong>, adaptadas a las necesidades específicas de tu flujo de trabajo.
    </p>

    <p>
        Se analiza el procedimiento técnico para registrar secuencias propias —como departamentos, productos o sucursales— dentro de la configuración profunda del programa. Este conocimiento permite que el <strong>Controlador de Relleno</strong> actúe como una herramienta de inteligencia de negocio, eliminando la transcripción manual recurrente y garantizando la estandarización de la información.
    </p>

    <div>
        <h3>Objetivos de aprendizaje:</h3>
        <ul>
            <li><strong>Localizar</strong> el menú de Listas Personalizadas en la configuración avanzada de Excel.</li>
            <li><strong>Crear</strong> secuencias mediante entrada manual o importación desde rangos de celdas.</li>
            <li><strong>Gestionar</strong> (editar o eliminar) bibliotecas de listas existentes.</li>
            <li><strong>Implementar</strong> el autorrelleno corporativo para optimizar estructuras de reportes.</li>
        </ul>
    </div>
</div>
    `,
                    resumenHTML: `
<div>
    <h2>Listas Personalizadas e Inteligencia de Datos</h2>

    <p>Excel ya conoce los meses y los días, pero no conoce tus sucursales o productos. Las <strong>Listas Personalizadas</strong> permiten "entrenar" al software para que reconozca cualquier secuencia de texto que utilices de forma recurrente.</p>

    <h3>1. ¿Dónde se encuentran?</h3>
    <p>Esta función se ubica en las opciones avanzadas, ya que afecta el comportamiento global de Excel en tu computadora.</p>

    <div class="flujo-academico paleta-excel">
        <div class="paso" data-paso="1">Pestaña <strong>Archivo</strong> > <strong>Opciones</strong></div>
        <div class="paso" data-paso="2">Categoría <strong>Avanzadas</strong></div>
        <div class="paso" data-paso="3">Sección <strong>General</strong> (al fondo)</div>
        <div class="paso" data-paso="4">Modificar listas personalizadas</div>
    </div>

    <div class="ficha-herramienta paleta-excel">
        <div class="ficha-icon-box">⌨️</div>
        <div class="ficha-cuerpo-derecho">
            <h4 class="ficha-nombre">Acceso Rápido a Opciones</h4>
            <p class="ficha-descripcion">Abre directamente el panel de configuración global.</p>
            <div class="ficha-atajo-footer"><kbd>Alt</kbd> + <kbd>A</kbd> + <kbd>O</kbd></div>
        </div>
    </div>

    <h3>2. Métodos de creación</h3>
    <ul>
        <li><strong>Entrada Manual:</strong> Ideal para listas cortas y nuevas.</li>
        <li><strong>Importación:</strong> La forma más rápida si los datos ya están escritos en una hoja.</li>
    </ul>

    <div class="omni-note note-success">
        <span class="omni-note-icon">✅</span>
        <p class="omni-note-content"><strong>Sugerencia:</strong> Usa listas para definir órdenes de clasificación especiales (ej: Urgente, Normal, Bajo) que no sigan el orden alfabético.</p>
    </div>

    <div class="omni-note note-warning">
        <span class="omni-note-icon">⚠️</span>
        <p class="omni-note-content">Las listas se guardan en tu computadora local. Si compartes el archivo, otros no podrán usar tu lista personalizada para autorrelleno.</p>
    </div>
</div>
    `,
                    actividadesHTML: `
<div id="lesson-activities-content" class="color-verde">
    <h2 class="actividad-titulo">Actividad Práctica: Sincronización Corporativa</h2>

    <div class="objetivo-container">
        <div class="objetivo-icon">🎯</div>
        <div class="objetivo-texto">
            <strong>Objetivo:</strong> Sincronizar el motor de predicción de Excel con terminología específica.
        </div>
    </div>

    <ul class="lista-instrucciones-omnitech">
        <li>En <strong>A1:A5</strong> escribe: Dirección, Ventas, Marketing, Operaciones, Logística.</li>
        <li>Importa esta lista desde el menú <strong>Archivo > Opciones > Avanzadas</strong>.</li>
        <li>Crea manualmente una lista de Sucursales: Norte, Sur, Este, Oeste y haz clic en <strong>Agregar</strong>.</li>
        <li>Comprueba escribiendo "Ventas" y arrastrando hacia abajo.</li>
    </ul>

    <div class="tabla-wrapper">
        <table class="tabla-omnitech">
            <thead>
                <tr>
                    <th>Referencia</th>
                    <th>Col A (Departamentos)</th>
                    <th>Col B (Sucursales)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Fila 01</td><td>Dirección</td><td>Norte</td></tr>
                <tr><td>Fila 04</td><td>Operaciones</td><td>Oeste</td></tr>
                <tr><td>Fila 05</td><td>Logística</td><td><strong>Norte</strong> (Reinicia)</td></tr>
            </tbody>
        </table>
    </div>

    <div class="omni-note note-danger">
        <span class="omni-note-icon">🚫</span>
        <p class="omni-note-content"><strong>¡Verificación Crítica!</strong> Si no pulsas el botón "Agregar" o "Importar", la lista no se guardará aunque la hayas escrito.</p>
    </div>
</div>
    `,

                    resMsg: "Descarga el material de apoyo para esta lección.",
                    resources: [{ name: "Guia_Listas_Personalizadas.pdf", url: "./assets/media/CUEXESNIBA01/L06_Guia.pdf" }],

                    quizMsg: "Bloque 1: Conceptos teóricos y alcance de las Listas Personalizadas.",
                    quiz: [
                        {
                            q: "¿En qué categoría de las Opciones de Excel se encuentra el botón para Modificar listas personalizadas?",
                            a: ["Fórmulas", "Revisiones", "Avanzadas", "Complementos"],
                            c: 2
                        },
                        {
                            q: "¿Qué sucede con una lista personalizada si envías el archivo a otra persona?",
                            a: ["Se borra automáticamente", "Excel la reconoce en la otra PC", "El archivo no abre", "No se reconoce porque se guarda de forma local"],
                            c: 3
                        },
                        {
                            q: "¿Qué tipo de contenido NO puede almacenar una lista personalizada?",
                            a: ["Nombres de ciudades", "Formatos (colores y negritas)", "Nombres de productos", "Categorías de gastos"],
                            c: 1
                        },
                        {
                            q: "Si llegas al último elemento de tu lista personalizada al arrastrar, ¿qué hace Excel?",
                            a: ["Error", "Celda en blanco", "Vuelve a empezar desde el primero", "Detiene el arrastre"],
                            c: 2
                        },
                        {
                            q: "¿Cuál es la principal ventaja de 'Importar' una lista?",
                            a: ["Aplica colores", "Evita errores de dedo", "Se vuelve fórmula", "Ahorra disco duro"],
                            c: 1
                        }
                    ],

                    quizMsg2: "Bloque 2: Validación técnica de la actividad práctica.",
                    quiz2: [
                        {
                            q: "Al arrastrar 'Ventas', ¿cuál de estos debería aparecer después según tu lista?",
                            a: ["Dirección", "Marketing", "Recursos Humanos", "Finanzas"],
                            c: 1
                        },
                        {
                            q: "Si al arrastrar 'Norte' solo se repite 'Norte', ¿qué paso se omitió?",
                            a: ["Tecla Suprimir", "Clic en el botón 'Agregar'", "Cerrar Excel", "Cambiar color"],
                            c: 1
                        },
                        {
                            q: "¿Qué herramienta usaste para absorber los datos del rango A1:A5?",
                            a: ["Copiar y Pegar", "Botón 'Importar' con selector de rango", "Escribir manualmente", "Arrastrar al menú"],
                            c: 1
                        },
                        {
                            q: "¿Cuál es el último elemento de tu lista de sucursales antes de reiniciar?",
                            a: ["Norte", "Sur", "Este", "Oeste"],
                            c: 3
                        },
                        {
                            q: "¿Cuál fue el primer departamento que escribiste para iniciar tu lista?",
                            a: ["Logística", "Operaciones", "Ventas", "Dirección"],
                            c: 3
                        }
                    ]
                }
            ],
        },

        //MÓDULO FANTASMA
        {
            moduleTitle: "Módulo EN CONSTRUCCIÓN",
            lessons: [
                {
                    lessonId: "MODFAN",
                    title: "Lección en construccion 😎🤖🥳💻",
                    video: "https://www.youtube.com/embed/ydvo8ST5l1A",

                    descHTML: ``,
                    actividadHTML: ``,
                    resumenHTML: ``,

                    quizMsg: "",
                    quiz: [],

                    quizMsg2: "",
                    quiz2: [],
                },
            ],
        },
    ],
}
);
