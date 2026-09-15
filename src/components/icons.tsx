type IconProps = React.SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };
}

export const DropletIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3s6 6.4 6 10.5a6 6 0 0 1-12 0C6 9.4 12 3 12 3Z" />
  </svg>
);

export const WrenchIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14.7 6.3a4 4 0 0 0 5 5L15 16l-3 3-3-3 3-3-4.7-4.7a4 4 0 0 0 5-5L9 6.5 12 9.5 9.5 12 6.5 9 4 6.5a4 4 0 0 1 5.3-3.8Z" />
  </svg>
);

export const LayersIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 17 9 5 9-5" opacity="0.5" />
  </svg>
);

export const CartIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 4h2l2 12h11l2-8H6" />
    <circle cx="9.5" cy="19.5" r="1.3" />
    <circle cx="17.5" cy="19.5" r="1.3" />
  </svg>
);

export const FileTextIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const ShieldIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3 5 6v6c0 4.4 3 8 7 9 4-1 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const TruckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17.5" cy="18" r="1.6" />
  </svg>
);

export const HeadsetIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 13a8 8 0 0 1 16 0" />
    <path d="M4 13v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2ZM20 13v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z" />
    <path d="M17 18v1a2 2 0 0 1-2 2h-3" />
  </svg>
);

export const FactoryIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 21V10l5 3V10l5 3V10l5 3V7h3v14H3Z" />
    <path d="M7 17h2M13 17h2" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const TrashIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 7h16M10 11v6M14 11v6" />
    <path d="M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
  </svg>
);

export const LockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

export const categoryIcons: Record<string, (props: IconProps) => React.ReactElement> = {
  droplet: DropletIcon,
  wrench: WrenchIcon,
  layers: LayersIcon,
};
