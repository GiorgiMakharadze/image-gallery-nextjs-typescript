export interface IPageProps {
  params: { topic: string };
}

export interface IUserPageProps {
  username: string;
  first_name: string;
  last_name: string;
  params: { username: string };
}
