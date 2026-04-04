import Image, { type ImageProps } from "next/image";

type Props = Omit<ImageProps, "src"> & {
  src: string;
};

export function SalonImage({ src, alt, className, ...rest }: Props) {
  const remote = src.startsWith("http://") || src.startsWith("https://");

  if (remote) {
    return (
      <Image
        src={src}
        alt={alt}
        className={className}
        sizes={rest.sizes}
        {...rest}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      sizes={rest.sizes}
      {...rest}
    />
  );
}
