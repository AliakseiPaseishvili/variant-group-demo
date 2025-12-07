import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Variant Group Demo task" },
    { name: "description", content: "This is demo task" },
  ];
}

export default function Home() {
  return <Welcome />;
}
