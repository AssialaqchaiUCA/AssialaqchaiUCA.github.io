const SKILLS_DATA = [
  {
    category: 'FRONT-END',          
    filter: 'frontend',             
    skills: [
      { name: 'HTML5 / CSS3',   level: 90 },
      { name: 'JavaScript ES6', level: 78 },
      { name: 'jQuery',         level: 72 },
      { name: 'ReactJS',        level: 65 },
      { name: 'Responsive Design', level: 90 },
    ]
  },
  {
    category: 'BACK-END',
    filter: 'backend',
    skills: [
      { name: 'Python',         level: 70 },
      { name: 'C / C++',        level: 85 },
      { name: 'SQL / MySQL',    level: 65 },
      { name: 'PHP (bases)',    level: 45 },
    ]
  },
  {
    category: 'OUTILS & MÉTHODES',
    filter: 'tools',
    skills: [
      { name: 'Git / GitHub',   level: 75 },
      { name: 'VS Code',        level: 95 },
      { name: 'Figma (bases)',  level: 55 },
      { name: 'Linux Terminal', level: 90 },
    ]
  },
  {
    category: 'SOFT SKILLS',
    filter: 'tools',   
    skills: [
      { name: 'Travail en équipe', level: 85 },
      { name: 'Communication',    level: 90 },
      { name: 'Autonomie',        level: 88 },
      { name: 'Veille technologique', level: 75 },
    ]
  }
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'CV Interactif Cyberpunk',
    description: 'Portfolio personnel développé en HTML/CSS, jQuery et ReactJS. Thème Synthwave avec effets de particules, glitch, timeline accordéon et formulaire de contact validé.',
    tags: ['HTML5', 'CSS3', 'jQuery', 'ReactJS'],
    category: 'web',
    status: 'EN_PROGRESS',
    github: 'https://github.com/votreusername/cv-cyberpunk',
    demo: '#'
  },
  {
    id: 2,
    title: 'Jeu MARS RUNNER',
    description: 'Implémentation classique de la programmation orientée objet pour un jeu de runner en C++ avec la bibliothèque SFML. Gestion des collisions, score haute performance et écran de game over, menu et rejouer.',
    tags: ['C++', 'SFML'],
    category: 'game',
    status: 'COMPLETED',
    github: 'https://github.com/votreusername/mars-runner',
    demo: null    
  },
  {
    id: 3,
    title: 'PORTAIL D\'ORIENTATION ACADEMIQUE',
    description: 'une plateforme web  dans le cadre d\'un projet académique visant à résoudre le problème d\'orientation il est présenté comme un outil d\'accompagnement numérique complet pour l\'orientation académique et professionnelle.',
    tags: ['HTML', 'CSS6', 'JAVASCRIPT'],
    category: 'Front-end',
    status: 'COMPLETED',
    github: 'https://github.com/Aieunoia/OrientCampus.git',
    demo: null
  }
];

function SkillBar({ name, level }) {
  return (
    <div className="skill-item">

      {/* En-tête */}
      <div className="skill-header">
        <span>{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>

      {/* Fond de la barre */}
      <div className="skill-bar-bg">
        {/*
          La barre de remplissage.
          - data-level : lu par jQuery pour savoir jusqu'où animer
          - width 0%   : point de départ, jQuery le modifie ensuite
        */}
        <div
          className="skill-bar-fill"
          data-level={level}
          style={{ width: '0%' }}
        />
      </div>

    </div>
  );
}


function SkillCategory({ category, filter, skills }) {
  return (

    <div className="skill-category neon-card" data-category={filter}>

      {/* Titre de la catégorie  */}
      <div className="skill-cat-title">[ {category} ]</div>

      {/* Liste des barres de la catégorie */}
      {skills.map((skill, index) => (
        <SkillBar
          key={index}
          name={skill.name}
          level={skill.level}
        />
      ))}

    </div>
  );
}

function SkillsSection() {
  return (
    <div className="skills-grid">
      {SKILLS_DATA.map((cat, index) => (
        <SkillCategory
          key={index}
          category={cat.category}
          filter={cat.filter}
          skills={cat.skills}
        />
      ))}
    </div>
  );
}

function ProjectCard({ project }) {

  const statusClass = project.status === 'COMPLETED' ? 'badge-cyan' : 'badge-gold';
  const statusLabel = project.status === 'COMPLETED' ? '✓ TERMINÉ' : '⟳ EN COURS';

  return (
    <div className="project-card">

      {/* En-tête  */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>

        {/* Tags technos */}
        <div>
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">{tag}</span>
          ))}
        </div>

        {/* Badge de statut */}
        <span className={`badge ${statusClass}`} style={{ fontSize: '0.55rem', whiteSpace: 'nowrap' }}>
          {statusLabel}
        </span>

      </div>

      {/* Titre du projet */}
      <h3 className="project-title">// {project.title}</h3>

      {/* Description */}
      <p className="project-desc">{project.description}</p>

      {/* Liens : GitHub et/ou Démo */}
      <div className="project-links">

        {/* Lien GitHub  */}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <i className="fab fa-github" style={{ marginRight: '6px' }}></i>
            CODE
          </a>
        )}

        {/* Lien Démo */}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link mag"
          >
            <i className="fa fa-external-link-alt" style={{ marginRight: '6px' }}></i>
            DÉMO
          </a>
        )}

      </div>

    </div>
  );
}

function ProjectsGrid() {
  return (
    <div className="projects-grid">
      {PROJECTS_DATA.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

function ContactForm() {
  return (
    <div className="contact-grid">

      {/* COLONNE GAUCHE   */}
      <div className="contact-info">

        {/* Titre de la colonne */}
        <div style={{ marginBottom: '1rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '0.15em' }}>
            // TRANSMISSION_CHANNEL
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: '1.7', marginTop: '0.5rem' }}>
            
          </p>
        </div>

        {/* Item email */}
        <div className="contact-info-item">
          <i className="fa fa-envelope"></i>
          <a href="mailto:laqchaia@gmail.com" target="_blank" rel="noopener noreferrer">
            laqchaia@gmail.com
          </a>
        </div>

        {/* Item LinkedIn */}
        <div className="contact-info-item">
          <i className="fab fa-linkedin"></i>
          <a href="https://linkedin.com/in/assia-laqchai-190630370" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/assia-laqchai-190630370
          </a>
        </div>

        {/* Item GitHub */}
        <div className="contact-info-item">
          <i className="fab fa-github"></i>
          <a href="https://github.com/Aieunoia" target="_blank" rel="noopener noreferrer">
            github.com/Aieunoia
          </a>
        </div>

        {/* Localisation */}
        <div className="contact-info-item">
          <i className="fa fa-map-marker-alt"></i>
          <span>Marrakech, Maroc</span>
        </div>

        {/* Indicateur de disponibilité */}
        <div style={{ marginTop: '1rem', padding: '0.75rem 1rem', border: '1px solid rgba(0,243,255,0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="status-dot"></span>
            <span style={{ fontSize: '0.7rem', color: 'var(--cyan)', letterSpacing: '0.1em' }}>
              DISPONIBLE POUR STAGE / ALTERNANCE
            </span>
          </div>
        </div>

      </div>

      <div>

    
        <form id="contact-form" className="contact-form" noValidate>

          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
            &gt; INIT_TRANSMISSION...
          </div>

          {/* Champ NOM */}
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">
              [ NOM_COMPLET ] *
            </label>
            <input
              type="text"
              id="contact-name"         
              className="form-input"
              placeholder="NOM ET PRENOM"
              autoComplete="name"
            />
            {/* Message d'erreur  */}
            <span id="err-name" className="form-error">
              ⚠ ERREUR : Ce champ est requis.
            </span>
          </div>

          {/* Champ EMAIL */}
          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">
              [ ADRESSE_EMAIL ] *
            </label>
            <input
              type="email"
              id="contact-email"         
              className="form-input"
              placeholder="Ex: nom@exemple.com"
              autoComplete="email"
            />
            <span id="err-email" className="form-error">
              ⚠ ERREUR : Adresse email invalide.
            </span>
          </div>

          {/* Champ MESSAGE */}
          <div className="form-group">
            <label className="form-label" htmlFor="contact-message">
              [ MESSAGE ] *
            </label>
            <textarea
              id="contact-message"      
              className="form-textarea"
              rows="5"
              placeholder="Votre message (minimum 10 caractères)..."
            />
            <span id="err-message" className="form-error">
              ⚠ ERREUR : Message trop court (minimum 10 caractères).
            </span>
          </div>

          
          <button type="submit" className="btn-cyber btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
            <i className="fa fa-paper-plane" style={{ marginRight: '8px' }}></i>
            <span>ENVOYER LA TRANSMISSION</span>
          </button>

        </form>

        <div className="form-success">
          <i className="fa fa-check-circle" style={{ marginRight: '8px' }}></i>
          MESSAGE TRANSMIS AVEC SUCCÈS — RÉPONSE SOUS 48H
        </div>

      </div>

    </div>
  );
}

function mountReact(elementId, Component) {
  const container = document.getElementById(elementId);
  if (!container) {
    console.warn(`[React] Élément #${elementId} introuvable dans le DOM.`);
    return;
  }
  const root = ReactDOM.createRoot(container);
  root.render(<Component />);
}

mountReact('react-skills', SkillsSection);

mountReact('react-projects', ProjectsGrid);

mountReact('react-contact', ContactForm);
