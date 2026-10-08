import Image from "next/image";

type BackgroundImageProps = {
  src: string;
  sizes?: string;
  preload?: boolean;
  className?: string;
};

// Parent must be `relative isolate` so the image sits behind in-flow content.
export default function BackgroundImage({
  src,
  sizes = "100vw",
  preload = false,
  className = "object-cover object-center",
}: BackgroundImageProps) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      fill
      sizes={sizes}
      preload={preload}
      className={`pointer-events-none -z-10 select-none ${className}`}
    />
  );
}
