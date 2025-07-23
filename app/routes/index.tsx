import type { Route } from "./+types";
import Portfolio from "~/src/pages";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kawã Correia | Porfiolio" },
    { name: "description", content: "Conheça os meus projetos desenvolvidos com as mais diferentes tecnologias" },
  ];
}

export default function Home() {
  return <Portfolio />;
}
