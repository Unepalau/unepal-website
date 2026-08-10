import Image from 'next/image';

type IconProps = {
  name: string;
  alt?: string;
  className?: string;
};

export default function Icon({ name, alt = '', className = '' }: IconProps) {
  return (
    <Image
      src={`/assets/app-icons/${name}.svg`}
      alt={alt}
      width={24}
      height={24}
      className={className}
      aria-hidden={alt ? undefined : true}
    />
  );
}
