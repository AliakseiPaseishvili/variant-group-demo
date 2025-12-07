import { TasksBoard } from "~/features/tasks-board";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Variant Group Demo task" },
    { name: "description", content: "This is demo task" },
  ];
}

export default function Home() {
  return <TasksBoard />;
}
