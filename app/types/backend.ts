export type Label = {
  id: string;
  title: string;
}

export type ProfilePic = {
  id: string;
  url: string;
};

export type TaskWithId = {
  id: string;
  title: string;
  description?: string;
  labels?: Label[];
  userImages?: ProfilePic[];
};
