import Image from 'next/image';

type AppScreenProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function AppScreen({ src, alt, className = '', priority = false }: AppScreenProps) {
  return (
    <div className={`app-screen ${className}`}>
      <div className="app-screen__speaker" aria-hidden="true" />
      <div className="app-screen__viewport">
        <Image
          src={src}
          alt={alt}
          width={720}
          height={1600}
          sizes="(max-width: 640px) 78vw, 420px"
          className="h-auto w-full"
          priority={priority}
        />
      </div>
    </div>
  );
}
