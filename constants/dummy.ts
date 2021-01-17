import { User } from "../store/types";

export const DUMMY_USER: User = {
  username: "santosmarco",
  name: "Marco Santos",
  displayName: "Marco",
  profilePic: "../assets/user/thumbnail.jpg",
  level: 2,
  points: 4200,
  rankPosition: 360,
  pet: {
    type: "archer",
    name: "Freddy",
    level: 2,
    stats: {
      hp: Math.random(),
      hunger: Math.random(),
      thirst: Math.random(),
      attack: Math.random(),
      defense: Math.random(),
      magic: Math.random(),
    },
  },
  ongoingCourses: [
    {
      id: "1",
      name: "Design",
      progress: 0.13,
      color: "white",
      backgroundColor: "red",
      icon: "paint-roller",
    },
    {
      id: "2",
      name: "Lógica",
      progress: 0.9,
      color: "white",
      backgroundColor: "blue",
      icon: "brain",
    },
  ],
  missions: [
    { description: "Assistir à Aula #15 do curso de Design" },
    {
      description:
        'Responder ao questionário "Fundamentos de Lógica da Programação" do curso de Lógica',
    },
  ],
};

export const DUMMY_TECH_COURSES = [
  {
    id: "3",
    name: "Web",
    color: "white",
    backgroundColor: "purple",
    icon: "code",
  },
  {
    id: "4",
    name: "Python",
    color: "white",
    backgroundColor: "green",
    icon: "python",
  },
];

export const DUMMY_BUSINESS_COURSES = [
  {
    id: "5",
    name: "Vendas",
    color: "white",
    backgroundColor: "orange",
    icon: "shopping-basket",
  },
  {
    id: "6",
    name: "RH",
    color: "white",
    backgroundColor: "violet",
    icon: "user-friends",
  },
];
