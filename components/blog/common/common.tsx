import Image from "next/image";
import Link from "next/link";

interface CommonHeaderProps {
  title: string;
  subtitle?: string;
  logo?: string;

  showSeeAll?: boolean;
  seeAllLink?: string;
  showArrow?: boolean;

  // Custom styles
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  seeAllClassName?: string;
  logoClassName?: string;
}

const CommonHeader = ({
  title,
  subtitle,
  logo,
  showSeeAll = false,
  seeAllLink = "#",
  showArrow = false,

  className = "",
  titleClassName = "",
  subtitleClassName = "",
  seeAllClassName = "",
  logoClassName = "",
}: CommonHeaderProps) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-3">
        {logo && (
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className={logoClassName}
          />
        )}

        <div>
          <h2 className={`text-3xl font-bold ${titleClassName}`}>
            {title}
          </h2>

          {subtitle && (
            <p className={`mt-1 text-gray-500 ${subtitleClassName}`}>
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {showSeeAll && (
        <Link
          href={seeAllLink}
          className={`flex items-center gap-2 ${seeAllClassName}`}
        >
          <span>See All</span>
          {showArrow && <span>→</span>}
        </Link>
      )}
    </div>
  );
};

export default CommonHeader;