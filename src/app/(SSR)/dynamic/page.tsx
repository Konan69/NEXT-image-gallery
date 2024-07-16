import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";

export const metadata = {
  title: "Dynamic Fetching Load Images",
};

// export const revalidate = 0; tells nextjs how often to revalidate the page

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" + process.env.ACCESSKEY,
    {
      cache: "no-store",
      // next: { revalidate: 0 },
    }, //same revalidation effect
  );
  const image: UnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page <strong>fetches and doesn't cache data at build time </strong>
        We will see a new image after refreshing, after setting revalidation
        options
      </Alert>
      <Image
        src={image.urls.raw}
        alt={image.description}
        width={width}
        height={height}
        className="rounded shadow mw-100% h-100%"
      />
      by
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
