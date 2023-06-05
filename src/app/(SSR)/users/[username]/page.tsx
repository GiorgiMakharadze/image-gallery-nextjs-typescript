import { notFound } from "next/navigation";
import { Metadata } from "next";
import { IUserPageProps } from "@/types/pageTypes";

async function getUser(username: string): Promise<IUserPageProps> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  if (response.status === 404) notFound();
  return await response.json();
}

export async function generateMetadata({
  params: { username },
}: IUserPageProps): Promise<Metadata> {
  const user = await getUser(username);

  return {
    title:
      ([user.first_name, user.last_name].filter(Boolean).join(" ") ||
        user.username) + " - NextJS Image Gallery",
  };
}

export default async function Page({ params: { username } }: IUserPageProps) {
  const user = await getUser(username);
  return (
    <div>
      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>First name: {user.last_name}</p>
      <a href={"https://unsplash.com/" + user.username}>Unsplash profile</a>
    </div>
  );
}
