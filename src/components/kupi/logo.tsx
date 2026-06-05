type LogoProps = {
  light?: boolean;
  className?: string;
};

export const Logo = ({ light = false, className = "" }: LogoProps) => (
  <a
    href="#top"
    className={`logo${light ? " light" : ""} ${className}`.trim()}
    aria-label="KuPi Beach Bar"
  >
    <span className="mark">Kupi</span>
    <span className="sub">beach&nbsp;bar</span>
  </a>
);
