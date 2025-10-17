import { useState } from 'react';
import CodeViewer from '../code/main';

const tuCodigo = `
function Perro(nombre, edad) {
    let perro = Object.create(ObjetoConstructor);
    perro.nombre = nombre;
    perro.edad = edad;
    return perro;
}

let ObjetoConstructor = {
    habla: function(){
        return "¡Soy un perro!"
    }
}

let firulais = Perro("Firulais", 9);
console.log(firulais);
`

const DATA = {
    "Programación": {
        URL: '#',
        CategoryIcon: 'fas fa-cogs',
        CategoryTittle: 'Programación',
        CategoryDescription: 'Java, JavaScript y Python',
        CategoryCount: '3 lenguajes'
    },
    "Bases de Datos": {
        URL: '#',
        CategoryIcon: 'fas fa-database',
        CategoryTittle: 'Bases de Datos',
        CategoryDescription: 'Proyectos con gestión de datos',
        CategoryCount: 'En desarrollo'
    },
    "Entornos de Desarrollo": {
        URL: '#',
        CategoryIcon: 'fas fa-tools',
        CategoryTittle: 'Entornos de Desarrollo',
        CategoryDescription: 'Herramientas y diagramas de flujo',
        CategoryCount: '2 recursos'
    }
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = async (projectKey) => {
        setSelectedProject(DATA[projectKey]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <>
            <section className="categories-grid">
                {Object.keys(DATA).map((projectKey) => (
                    <div 
                        key={projectKey}
                        className="category-card" 
                        onClick={() => handleCardClick(projectKey)}
                    >
                        <div className="category-icon">
                            <i className={DATA[projectKey].CategoryIcon}></i>
                        </div>
                        <div className="category-title">
                            {DATA[projectKey].CategoryTittle}
                        </div>
                        <p className="category-description">
                            {DATA[projectKey].CategoryDescription}
                        </p>
                        <span className="project-count">
                            {DATA[projectKey].CategoryCount}
                        </span>
                    </div>
                ))}
            </section>

            {isModalOpen && selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        
                        <div className="modal-header">
                            <i className={selectedProject.CategoryIcon}></i>
                            <h2>{selectedProject.CategoryTittle}</h2>
                        </div>
                        
                        <div className="modal-body">
                            <p>{selectedProject.CategoryDescription}</p>
                            <span className="modal-count">{selectedProject.CategoryCount}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


export default Projects