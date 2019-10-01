import React from 'react';

// Gino Jacob and Ballroom Dancer
import Gino from '../assets/images/Gino-Jacob.jpg';
import smooth from '../assets/images/smooth.jpg';

// MobSquad
import mobSquad from '../assets/images/MobSquad-Black.png';

// Jive
import JiveDJ from '../assets/images/Jive-dj.png';

// Memoree
import memoree from '../assets/images/Memoree.png';

// Pomodoro
import pomodoroHome from '../assets/images/Pomodoro-home.png';
import pomodoroSettings from '../assets/images/Pomodoro-settings.png';

// TestDocs
import testDocs from '../assets/images/testdocs-logo.png';

// Abstract series
import leaf from '../assets/images/leaf.png';
import roses from '../assets/images/roses.png';
import tree from '../assets/images/tree.png';

// NU Eats
import nuEats from '../assets/images/NUEats.png';

// Textures
import combinedTextures from '../assets/images/combinedTextures.jpg';
import lines from '../assets/images/lines.jpg';
import polygons from '../assets/images/polygons.jpg';
import roseCascade from '../assets/images/roseCascade.jpg';

// Typography
import aksidenz from '../assets/images/Aksidenz.jpg';
import bigCaslon from '../assets/images/BigCaslon.jpg';
import didot from '../assets/images/Didot.jpg';
import din from '../assets/images/DIN.jpg';
import logotypesSanSerifOne from '../assets/images/LogotypesSanSerifOne.jpg';
import logotypesSanSerifTwo from '../assets/images/LogotypesSanSerifTwo.jpg';
import logotypesSerifOne from '../assets/images/LogotypesSerifOne.jpg';
import logotypesSerifTwo from '../assets/images/LogotypesSerifTwo.jpg';

// Siena
import siena from '../assets/images/siena.jpg';

// Thanksgiving
import thanksgivingPie from '../assets/images/thanksgivingPie.jpg';

export const ginoJacob = {
  title: 'Gino V Jacob',
  subtitle: (
    <div>
      <div>Software Engineer at Pluralsight</div>
      <div>RoleIQ, Assessment Engine</div>
    </div>
  ),
  description: [
    'I’ve mocked up website designs, prototyped VR games, and learned to be an avid functional programmer beyond my professional web development career. I’m a self-taught developer and above all else, an unapologetically customer-centric designer.',
    'You’d find me ballroom dancing when I’m not solving people’s problems.',
  ],
  image: Gino,
};

export const developer = [
  {
    title: 'Chef',
    subtitle: 'A hub for all aspiring chefs',
    description: [
      'Chef is a version control system for your recipes. Write a recipe, publish it, collaborate with others on it, and learn to be a better chef.',
    ],
    link: 'https://github.com/gvjacob/chef',
    tags: ['React', 'NestJS', 'PostgreSQL', 'Typescript', 'Docker'],
  },
  {
    title: 'Jive',
    subtitle: 'Automated Spotify DJ',
    description: [
      'Automated DJ for choosing various ballroom songs from different dance styles when running an open floor. Built with React and the Spotify Web API.',
    ],
    link: 'https://jive.surge.sh/',
    tags: ['React', 'Spotify Web API'],
    images: [JiveDJ],
    shadow: true,
  },
  {
    title: 'MobSquad',
    subtitle: 'Your mobbing buddy',
    description: [
      'Managing mob sessions with your team can be a challenge. MobSquad is a native macOS application that helps mobbbers establish and enforce rotations, while staying unobtrusive.',
      'With MobSquad, developers can manage their place in the cycle, and decide on the cadence of their rotations.',
    ],
    images: [mobSquad],
    shadow: true,
    tags: ['Swift', 'XCode', 'MacOS'],
    link:
      'https://www.dropbox.com/sh/srwktc15r5k1q7v/AAAwS7q5YDUzFd6BwrF_dKwIa?dl=0',
  },
  {
    title: 'responsive-jsx',
    subtitle: 'Higher-order React components for responsive JSX',
    description: [
      'responsive-jsx is a published npm package for web responsive React applications.',
      'This package provides APIs to create responsive components, and set global configuration for consistent media thresholds.',
    ],
    link: 'https://www.npmjs.com/package/responsive-jsx',
    tags: ['React', 'npm'],
  },
  {
    title: 'python-contracts',
    subtitle: 'Contracts for Python Functions',
    description: [
      'python-contracts is a published PyPi package that validates the input or output of a Python function.',
      'Data flow among components can be hard to keep track or maintained, sometimes forcing us to write print statements everywhere trying to catch malformed data. This contracts library solves this by intercepting data that is piped into or out of a function and checking if they satisfy the specified requirements.',
    ],
    link: 'https://pypi.org/project/python-contracts/',
    tags: ['Python'],
  },
  {
    title: 'Memoree',
    subtitle: 'Memory retention game',
    description: [
      'Memoree is a memory retention game for pediatric therapy.',
      'It was developed in Unity for ReGameVR Laboratory and the FITBoard project, and submitted to 2017 Rehabilitation Engineering and Assistive Technology Society of North America (RESNA) Student Design Competition.',
    ],
    images: [memoree],
    link: 'https://www.dropbox.com/home/LinkedIn/ReGameVR%20Unity%20Games',
    tags: ['Unity', 'C#'],
  },
  {
    title: 'Pomodoro Timer',
    subtitle: "The study pal that doesn't slack",
    description: [
      'For those of you who are Pomodoro beginners, the Pomodoro Timer is the right tool to get your feet wet.',
      'Managing your pomodoro sessions is secondary work. Configurable to your needs and operating subtly behind the scenes, this site keeps track of your pomodoros so you can put all the focus on the work at hand, and provides analytics and insights to how you work.',
    ],
    images: [pomodoroHome, pomodoroSettings],
    link: 'https://github.com/gvjacob/pomodoro',
    tags: ['React', 'Flask', 'MongoDB'],
  },
  {
    title: 'TestDocs',
    subtitle: 'Javascript Tests as Documentation, Made Easy',
    description: [
      'Tests as documentation! This is a configurable VSCode extension that gives you a convenient lens to the tests of your Javascript symbols. Hovering over a symbol gives you a top down overview of its tests.',
    ],
    // images: [testDocs],
    link:
      'https://marketplace.visualstudio.com/items?itemName=gvjacob.testdocs',
    tags: ['Javascript', 'VSCode Extension'],
  },
];

export const designer = [
  {
    title: 'NU Eats',
    subtitle: 'Northeastern Eats, Explored Easy',
    description: [
      'NU Eats is a platform for Northeastern students to access real-time information about campus dining services. This project from my Design, Process, Context and Systems course sought to alleviate a campus-wide problem with student access to information on their dining services.',
      'Information includes locations, schedule, pick-up availability, menus and general real-time updates such as occupancy levels and menu changes.',
    ],
    images: [nuEats],
    link:
      'https://projects.invisionapp.com/prototype/NU-Eats-cjpail4xn00euaf010b6o39a5/play/ac717e46?origin=v7',
    tags: ['Invision Studio', 'Photoshop'],
  },
  {
    title: '24 Logotypes & Typefaces',
    subtitle: 'My Typeface Guide',
    description: [
      'This typography project explores 24 different typefaces, serif and san-serif, ranging from vanilla Helvetica and Aksidenz to royal Bembo and Didot.',
      'I wanted to see how the meticulously designed letters from the same typographic principles and precision of each typeface could interact with each other. Are their accents consistent? How rigid are they when broken down? Can they merge with each other while staying true to their character?',
    ],
    images: [
      aksidenz,
      bigCaslon,
      didot,
      din,
      logotypesSanSerifOne,
      logotypesSanSerifTwo,
      logotypesSerifOne,
      logotypesSerifTwo,
    ],
    shadow: true,
    tags: ['Illustrator', 'Photoshop', 'InDesign'],
  },
  {
    title: '20th Festival Di Siena',
    subtitle: 'Festival Internazionale Del Cinema',
    description: [
      'A reimagining of a film festival featuring the one and only Audrey Hepburn.',
      "I've always loved Cannes Film Festival's posters, and I wanted to recreate the same magic with a vintage look and somewhat noir feel.",
    ],
    images: [siena],
    tags: ['Photoshop', 'InDesign', 'Illustrator'],
    shadow: true,
  },
  {
    title: 'Abstract Series',
    subtitle: 'Abstracting Natural Shapes',
    description: [
      'What started out as Illustrator practice became designs for some of my own T-shirts.',
      'I took inspiration from different natural elements, translated them into simpler and more abstract shapes, imposed vibrant colors, and created contrast with more subdued backgrounds.',
    ],
    images: [leaf, roses, tree],
    shadow: true,
    tags: ['Illustrator'],
  },
  {
    title: 'Texture Series',
    subtitle: 'Textural Harmony',
    description: [
      'With the diversity of textures in the natural world, I wanted to capture the ways they could interact, complement, or even oppose each other in making a cohesive art piece.',
      'The textures that inspire this piece range from geodes and ceramics to bushes of roses.',
    ],
    images: [roseCascade, lines, polygons, combinedTextures],
    shadow: true,
  },
  {
    title: "America's Favorite Thanksgiving Pie",
    subtitle: 'Finding the Right Pie',
    description: [
      "As an Illustrator practice and project for my Data Visualization course, which was assigned around Thanksgiving, I decided to gather up some data about American's favorite pie during the season.",
      'Pie charts seemed fitting, so I rationed out portions of the pie according to the popularity of each type. I wanted this visualization to be simple yet appealing and reminiscent of retro visuals. Image tracing each colorful pie with high fidelity and imposing the pie chart on a neutral background gave this the right look and feel.',
    ],
    images: [thanksgivingPie],
    shadow: true,
    tags: ['Illustrator', 'InDesign'],
  },
];

export const ballroomDancer = {
  title: 'Ballroom Dancer',
  subtitle: 'East coast collegiate: Latin, Standard, Smooth',
  description: [
    "I ballroom dance with my longtime partner, Tiffany. Catch me in a tailsuit I can't afford or NSFW latin shirt at your closest east coast collegiate competition!",
  ],
  image: smooth,
};
