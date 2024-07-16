import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import styles from "./TopicPage.module.css";

interface PageProps {
  params: {
    topic: string;
  };
  // searchParams: { [key: string]: string | string[] | undefined };
}

// export const revalidate = 0

export default async function Page({ params: { topic } }: PageProps) {
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${topic}&count=3&client_id=${process.env.ACCESSKEY}`,
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div>
      <h1>{topic}</h1>
      {images.map((image) => (
        <Image
          src={image.urls.raw}
          width={250}
          height={250}
          alt={image.description}
          key={image.urls.raw}
          className={styles.image}
        />
      ))}
    </div>
  );
}
