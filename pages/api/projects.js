const projects = [
  {
    id: 1,
    name: "Harmony",
    description:
      "Harmony is a messaging and collaboration tool similar to discord or slack.",
    github: "https://github.com/kadeesterline/harmony",
    // deployed: "",
    // demo: "",
    stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL", "AWS S3"],
    images: [
      "/project-images/harmony-photos/home-screen.png",
      "/project-images/harmony-photos/room-view.png",
    ],
  },
  {
    id: 2,
    name: "Hard Park",
    description:
      "Hard Park is a social media platform built with a focus on cars.",
    github: "https://github.com/kadeesterline/hard-park-front-end",
    // deployed: "",
    // demo: "",
    stack: ["React", "Bootstrap", "Sinatra", "ActiveRecord", "SQLite"],
    images: [
      "/project-images/hardpark-photos/home-page.png",
      "/project-images/hardpark-photos/the-lot.png",
    ],
  },
  {
    id: 3,
    name: "KanBan",
    description: "KanBan is a project management tool similar to trello.",
    github: "https://github.com/kadeesterline/kanban-project",
    deployed: "https://kanbanflatiron.herokuapp.com/",
    // demo: "",
    stack: ["React", "Tailwind", "Ruby on Rails", "PostgreSQL"],
    images: [
      "/project-images/kanban-photos/board-view.png",
      "/project-images/kanban-photos/home-view.png",
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(projects);
}
