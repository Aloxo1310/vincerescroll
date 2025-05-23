/**
 * Game Presentation and Animation System (GPAS) Articles
 * This utility provides animation data and content for the Vincere Games website
 */

export const gameInfo = {
  title: "Vincere Colors",
  subtitle: "A vibrant gaming experience",
  description: "Dive into a world where colors shape reality. Vincere Colors challenges players to navigate through a dynamic universe where every hue affects gameplay mechanics. Solve puzzles, defeat enemies, and unlock new abilities by mastering the spectrum.",
  releaseYear: "2025",
  platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
  developer: "Vincere Games",
  publisher: "Vincere Entertainment",
  genre: ["Action", "Adventure", "Puzzle"],
  rating: "T for Teen"
};

export const features = [
  {
    id: 1,
    title: "Color-Shifting Mechanics",
    description: "Change the world around you by shifting between color dimensions. Each color provides unique abilities and reveals hidden paths.",
    image: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    title: "Dynamic Environments",
    description: "Explore vast, ever-changing landscapes that transform based on your color choices. From neon-lit cities to surreal natural wonders.",
    image: "https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    title: "Strategic Combat",
    description: "Defeat enemies by exploiting their color weaknesses. Combine colors to create powerful attacks and defensive maneuvers.",
    image: "https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 4,
    title: "Immersive Soundtrack",
    description: "Experience a dynamic soundtrack that adapts to your chosen color spectrum, creating a unique auditory experience with each playthrough.",
    image: "https://images.pexels.com/photos/2261026/pexels-photo-2261026.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

export const teamMembers = [
  {
    id: 1,
    name: "Alexis",
    role: "Game Designer",
    bio: "Creative mind behind the unique color-shifting mechanics and world design of Vincere Colors.",
    image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 2,
    name: "Fran",
    role: "Lead Developer",
    bio: "Technical genius responsible for bringing the vibrant world of Vincere Colors to life through innovative programming.",
    image: "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id: 3,
    name: "Ian",
    role: "Art Director",
    bio: "Visionary artist whose distinctive aesthetic defines the unique visual style of Vincere Games.",
    image: "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg?auto=compress&cs=tinysrgb&w=1600"
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Vincere Colors redefines what a visual experience in gaming can be. It's not just a game—it's an artistic statement.",
    author: "GameSpot",
    rating: 9.5
  },
  {
    id: 2,
    quote: "The most innovative use of color mechanics I've seen in years. Every level feels like stepping into a new painting.",
    author: "IGN",
    rating: 9.2
  },
  {
    id: 3,
    quote: "A masterclass in game design that challenges players to see the world differently.",
    author: "Polygon",
    rating: 9.0
  }
];

export const animationSequences = {
  heroSection: [
    { element: ".logo", animation: "fadeIn", duration: 1.5, delay: 0.2 },
    { element: ".tagline", animation: "slideUp", duration: 1.2, delay: 0.8 }
  ],
  welcomeSection: [
    { element: ".welcome-title", animation: "revealText", duration: 1.8, delay: 0.3 },
    { element: ".welcome-subtitle", animation: "fadeIn", duration: 1.5, delay: 0.8 }
  ],
  featureSection: [
    { element: ".feature-card", animation: "fadeInStagger", duration: 0.8, delay: 0.2, stagger: 0.15 },
    { element: ".feature-image", animation: "scaleIn", duration: 1.2, delay: 0.3 }
  ],
  teamSection: [
    { element: ".team-title", animation: "slideFromLeft", duration: 1.0, delay: 0.2 },
    { element: ".team-member", animation: "fadeInStagger", duration: 0.8, delay: 0.4, stagger: 0.2 }
  ]
};

export default {
  gameInfo,
  features,
  teamMembers,
  testimonials,
  animationSequences
};