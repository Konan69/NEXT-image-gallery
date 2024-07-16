import { Alert } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Alert>
        This application is a Next.js image gallery that allows users to search
        for images based on specific queries. It utilizes client-side rendering
        to fetch data without exposing sensitive information, and server-side
        rendering for user and topic profile pages. The app also dynamically
        generates metadata for profile pages and caches static pages at build
        time for improved performance. Overall, the app provides a seamless and
        efficient way for users to explore and interact with images on Unsplash.
      </Alert>
    </div>
  );
}
