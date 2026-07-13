import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt?: string;
  priority?: boolean;
  className?: string;
};

export function PhoneMockup({
  src,
  alt = "Homi app screenshot",
  priority = false,
  className = "",
}: PhoneMockupProps) {
  return (
    <div
      className={`relative mx-auto w-[300px] sm:w-[340px] lg:w-[380px] aspect-[650/1330] ${className}`}
    >
      {/* Screenshot */}
      <div className="absolute left-[7.5%] top-[2.9%] w-[85%] h-[94.2%] overflow-hidden rounded-[34px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          priority={priority}
        />
      </div>

      {/* Phone Frame */}
      <Image
        src="/images/phone-frame.png"
        alt=""
        fill
        priority
        className="pointer-events-none select-none"
      />
    </div>
  );
}