import Image from "next/image";
import Link from "next/link";
import { Alert } from "@/components/bootstrap";
import { IUnsplashImage } from "@/types/unsplash-image";

export const metadata = {
  title: "Dynamic Fetching - NextJS Image galley",
};

export const revalidate = 0;

export default async function Page() {
  const response = await fetch(
    "https://api.unsplash.com/photos/random?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: IUnsplashImage = await response.json();

  const width = Math.min(500, image.width);
  const height = (width / image.width) * image.height;

  return (
    <div className="d-flex flex-column align-items-center">
      <Alert>
        This page <strong>fetches and caches data on each request</strong>. The
        Unsplash API always returns a new image, so you will see a different
        image every time you refresh the page.
      </Alert>
      <Image
        src={image.urls.raw}
        width={width}
        height={height}
        alt={image.description}
        className="rounded shadow mw-100 h-100"
      />
      by{" "}
      <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
    </div>
  );
}
