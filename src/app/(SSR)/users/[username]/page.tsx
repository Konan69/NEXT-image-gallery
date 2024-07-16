import { UnsplashUser } from "@/models/unsplash-user";
import { cache } from "react";
import { notFound } from "next/navigation";
import { Alert } from "@/components/bootstrap";

interface PageProps {
  params: { username: string };
}
async function getUser(username: string): Promise<UnsplashUser> {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.ACCESSKEY}`,
  );
  if (response.status === 404) notFound();
  return response.json();
}

export async function generateMetadata({ params: { username } }: PageProps) {
  const user = await getUser(username);
  return {
    title:
      ([user.first_name, user.last_name].filter(Boolean).join(" ") ||
        user.username) + " profile",
  };
}

// const getUserCached = cache(getUser) use cache if not using native fetch func

export default async function Page({ params: { username } }: PageProps) {
  const user = await getUser(username);
  return (
    <div>
      <Alert>
        this profile page uses <strong>generateMetadata</strong> to set the page
        title dynamically from the api response{" "}
      </Alert>
      <h1>{user.username}</h1>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <a href={"https://unsplash.com/" + user.username}>Unsplash Profile</a>
    </div>
  );
}
