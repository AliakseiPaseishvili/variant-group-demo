import type { TaskWithId } from "~/types/backend";

export const LastWeek: TaskWithId[] = [
  {
    id: 'task-1',
    title: 'Review scope',
    description: 'Review #390',
    labels: [{ id: 'label-1', title: 'Due 4/11' }, { id: 'label-2', title: 'Design' }]
  },
  {
    id: 'task-2',
    title: 'Team retro',
  },
];

export const ThisWeek: TaskWithId[] = [
  {
    id: 'task-3',
    title: 'Usability test',
    description: 'Research questions with Carina.',
    labels: [{ id: 'label-3', title: 'Research' }]
  }
];

export const NextWeek: TaskWithId[] = [
  {
    id: 'task-4',
    title: 'Culture workshop',
    description: "Let's build a great team.",
    labels: [{ id: 'label-4', title: 'Due 24/11' }]
  }
];
