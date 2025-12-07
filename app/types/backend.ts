export type Label = {
  id: string;
  title: string;
}

export type TaskWithId = {
  id: string;
  title: string;
  description?: string;
  labels?: Label[];
  userIds?: string[];
};
