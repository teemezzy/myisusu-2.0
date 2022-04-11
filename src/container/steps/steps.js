import {
  activate,
  activateimage,
  create,
  createimage,
  join,
  joinimage,
  start,
  startimage,
} from "../../assets";

export const steps = [
  {
    id: 1,
    number: "1.",
    firstImage: create,
    header: "Create Account",
    headerTwo:
      "Sign up with your email and phone number in less than a minute.",
    secondImage: createimage,
  },
  {
    id: 2,
    number: "2.",
    firstImage: activate,
    header: "Activate Account",
    headerTwo: "Get your account activated.",
    secondImage: activateimage,
  },
  {
    id: 3,
    number: "3.",
    firstImage: join,
    header: "Join A Cluster",
    headerTwo: "Join any cluster of your choice.",
    secondImage: joinimage,
  },
  {
    id: 4,
    number: "4.",
    firstImage: start,
    header: "Start Contributing",
    headerTwo: "Setup your preferences and start contributing immediately!",
    secondImage: startimage,
  },
];
