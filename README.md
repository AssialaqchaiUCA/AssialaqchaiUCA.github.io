# 💻 CV Interactif — LAQCHAI ASSIA

> Portfolio personnel au thème **Cyberpunk / Synthwave** développé avec HTML, CSS, jQuery et ReactJS.

---

## ✨ Aperçu

Un CV interactif avec des effets visuels avancés : particules animées, effet glitch, typewriter, barres de compétences animées, timeline accordéon et formulaire de contact.

---

## 🗂️ Structure du projet

```
cv-cyberpunk/
├── index.html          # Structure principale (HTML)
├── app.js              # Logique jQuery (animations, scroll, formulaire)
├── components.js       # Composants React (Skills, Projects, Contact)
├── style.css           # Styles des sections et mise en page
├── theme.css           # Variables CSS, reset, effets globaux
├── theme-toggle.js     # Gestion dark / light mode
├── theme-toggle.css    # Styles du bouton et du light mode
└── photo.jpg           # Photo de profil
```

---

## 🚀 Technologies utilisées

| Technologie | Usage |
|-------------|-------|
| **HTML5** | Structure sémantique |
| **CSS3** | Animations, variables, clip-path, grid |
| **jQuery 3.7** | Scroll, typewriter, accordéon, formulaire |
| **ReactJS 18** | Composants Skills, Projects, Contact |
| **Babel Standalone** | Transpilation JSX côté navigateur |
| **Font Awesome 6** | Icônes |
| **Google Fonts** | Press Start 2P · Share Tech Mono |

---

## ⚙️ Fonctionnalités

- 🌟 **Particules animées** — canvas JS, couleurs cyberpunk, scintillement
- ✍️ **Effet typewriter** — rotation de titres avec jQuery
- 🔠 **Effet glitch** — animation CSS sur le nom
- 📊 **Barres de compétences** — animées au scroll via jQuery
- 🗂️ **Filtre de compétences** — par catégorie (Frontend / Backend / Outils)
- 📅 **Timeline accordéon** — formation avec ouverture/fermeture animée
- 🃏 **Grille de projets** — cartes React avec badges de statut
- 📬 **Formulaire de contact** — validation côté client avec messages d'erreur
- 🌙 **Dark / Light mode** — persisté via `localStorage`
- 📱 **Responsive** — adapté mobile (breakpoints 900px et 600px)

---

## 🖥️ Lancement local

Aucune installation requise. Il suffit d'ouvrir `index.html` dans un navigateur.

> ⚠️ Pour éviter des erreurs CORS avec les fichiers `.js` chargés en `type="text/babel"`, utilise un serveur local :

```bash
# Option 1 — Extension VS Code
# Installe "Live Server" et clique sur "Go Live"

# Option 2 — Python
python -m http.server 5500
# puis ouvre http://localhost:5500
```

---

## 🎨 Thème & couleurs

Le thème est défini dans `theme.css` via des variables CSS globales :

```css
--cyan:     #7B42FF   /* Violet principal */
--magenta:  #ff00a0   /* Rose néon */
--gold:     #ffd700   /* Or pour les accents */
--bg-deep:  #0a0b0e   /* Fond sombre */
```

Le **light mode** redéfinit ces variables dans `theme-toggle.css` sous `.body.light-mode`.

---

## 📁 Données du portfolio

Les données sont centralisées dans `components.js` :

- `SKILLS_DATA` — catégories et niveaux de compétences
- `PROJECTS_DATA` — titre, description, tags, liens GitHub / démo

Pour mettre à jour le contenu, il suffit de modifier ces tableaux.

---

## 📌 Projets présentés

| Projet | Technologies | Statut |
|--------|-------------|--------|
| CV Interactif Cyberpunk | HTML, CSS, jQuery, React | 🔄 En cours |
| Jeu MARS RUNNER | C++, SFML | ✅ Terminé |
| Portail d'Orientation Académique | HTML, CSS, JavaScript | ✅ Terminé |

---

## 🔗 Liens

- **GitHub** : [github.com/Aieunoia](https://github.com/Aieunoia)
- **LinkedIn** : [linkedin.com/in/assia-laqchai-190630370](https://linkedin.com/in/assia-laqchai-190630370)
- **Email** : laqchaia@gmail.com

---

## 📄 Licence

Projet personnel — tous droits réservés © 2026 Assia Laqchai.