# InternTrack — Week 2 Frontend

## Project overview
InternTrack is a small internship progress portal. The Week 2 implementation focuses on the frontend: interns can move between a landing page, their dashboard and an individual task workspace.

The interface uses realistic sample data rather than a backend so the project can be demonstrated locally without accounts, a server or a database.

## Pages
- `index.html` — landing page and product introduction
- `dashboard.html` — weekly progress, tasks and mentor note
- `task.html` — task description, checklist and progress update

## Main interactions
- Navigation links connect all major views.
- “Focus on next task” scrolls to the next incomplete task.
- Dashboard filter switches between all and completed tasks.
- Task status can be changed and saved locally in the current page session.
- Task links use query parameters for a small amount of reusable UI.
- Form controls and interactive elements have keyboard focus states.

## Technology
- HTML5
- CSS3 with responsive media queries
- Vanilla JavaScript
- Google Fonts (DM Sans and Playfair Display)

No build tools or npm packages are required.

## How to run
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. For the best experience, use a simple local server such as VS Code Live Server. The project does not require a backend.

## Folder structure
```
interntrack-week2/
├── index.html
├── dashboard.html
├── task.html
├── README.md
├── css/
│   └── styles.css
└── js/
    └── app.js
```

## Design decisions
The visual design uses a restrained green/neutral palette to make the dashboard feel calm and work-focused. Cards, clear spacing and short labels make the most important information easy to scan. The landing page introduces the idea first, while the dashboard prioritises current work and deadlines.

The implementation deliberately uses plain HTML/CSS/JavaScript because the Week 2 task is primarily a frontend fundamentals exercise. This keeps the code easy to inspect and avoids unnecessary framework complexity.

## Accessibility and responsive considerations
- Semantic headings and landmarks are used throughout.
- Navigation has an accessible label.
- Buttons and controls are keyboard reachable.
- `:focus-visible` styling is included.
- Form labels are connected to their controls.
- Text uses relative sizing and the layout changes at tablet/mobile breakpoints.
- Colour is supported by labels/icons rather than being the only indicator of status.

## Testing checklist
- [x] Three connected views
- [x] Responsive desktop/mobile layouts
- [x] Working navigation
- [x] Interactive dashboard filter
- [x] Interactive task status update
- [x] Keyboard focus states
- [x] README and local setup instructions

## Future work
The next iteration could add authentication, a real REST API, a database, mentor/admin views, persistent submissions and real-time notifications.
