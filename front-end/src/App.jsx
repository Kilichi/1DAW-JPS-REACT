import Header from './components/header/main'
import Projects from './components/projects'


import './App.css'

function App() {
  return (
      <div class="container">
        <Header />
        <Projects />

        <section class="projects-section">
            <h2 class="section-title"><i class="fas fa-code"></i> Lenguajes de Marca</h2>
            <div class="projects-grid">
                <a href="./Lenguajes de marca/ejercicio_13_P2/index.html" class="project-card">
                    <div class="project-name">Ejercicio 13 - Part 2</div>
                    <span class="project-type">HTML/CSS/JS</span>
                </a>
                <a href="./Lenguajes de marca/ejercicio_formulario/index.html" class="project-card">
                    <div class="project-name">Ejercicio Formulario</div>
                    <span class="project-type">Formularios</span>
                </a>
                <a href="./Lenguajes de marca/ejercicio_iframe/index.html" class="project-card">
                    <div class="project-name">Ejercicio iFrame</div>
                    <span class="project-type">Multimedia</span>
                </a>
                <a href="./Lenguajes de marca/ejercicio_tabla/index.html" class="project-card">
                    <div class="project-name">Ejercicio Tabla</div>
                    <span class="project-type">Tablas</span>
                </a>
                <a href="./Lenguajes de marca/P1/ejercicio_11/index.html" class="project-card">
                    <div class="project-name">Ejercicio 11 - P1</div>
                    <span class="project-type">Layout</span>
                </a>
                <a href="./Lenguajes de marca/P1/ejercicio_16/index.html" class="project-card">
                    <div class="project-name">Ejercicio 16 - P1</div>
                    <span class="project-type">Layout</span>
                </a>
                <a href="./Lenguajes de marca/P1/ejercicios_forms/index.html" class="project-card">
                    <div class="project-name">Ejercicios Forms</div>
                    <span class="project-type">Validación</span>
                </a>
                <a href="./Lenguajes de marca/plantilla/index.html" class="project-card">
                    <div class="project-name">Plantilla Base</div>
                    <span class="project-type">Template</span>
                </a>
            </div>
        </section>

        <section class="projects-section">
            <h2 class="section-title"><i class="fas fa-cogs"></i> Programación</h2>
            <div class="projects-grid">
                <a href="./Programacion/Java/pong_java" class="project-card">
                    <div class="project-name">Pong - Java</div>
                    <span class="project-type">JavaFX</span>
                </a>
                <a href="./Programacion/JS/Actividades/pong_html_css_js/index.html" class="project-card">
                    <div class="project-name">Pong - JavaScript</div>
                    <span class="project-type">Canvas</span>
                </a>
                <a href="./Programacion/Py/Actividades/pong_python" class="project-card">
                    <div class="project-name">Pong - Python</div>
                    <span class="project-type">Pygame</span>
                </a>
                <a href="./Programacion/JS/estructurasDeControl/index.html" class="project-card">
                    <div class="project-name">Estructuras de Control</div>
                    <span class="project-type">Fundamentos</span>
                </a>
            </div>
        </section>

        <section class="projects-section">
            <h2 class="section-title"><i class="fas fa-tools"></i> Entornos de Desarrollo</h2>
            <div class="projects-grid">
                <a href="./Entornos de desarollo/diagramas de flujo/" class="project-card">
                    <div class="project-name">Diagramas de Flujo</div>
                    <span class="project-type">Documentación</span>
                </a>
                <a href="./Entornos de desarollo/diagramas de flujo/ejercicio 6.png" class="project-card">
                    <div class="project-name">Ejercicio 6</div>
                    <span class="project-type">Diagrama</span>
                </a>
            </div>
        </section>

        <footer>
            <p>&copy; 2025 José Poveda Sabater | 1º DAW | Todos los derechos reservados</p>
        </footer>
    </div>
  )
}

export default App
