export default function Phone({ height, width, className }: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 17.25v2.25a2.25 2.25 0 01-2.25 2.25 17.786 17.786 0 01-7.992-2.106 17.767 17.767 0 01-5.928-5.928A17.786 17.786 0 014.5 4.5 2.25 2.25 0 016.75 2.25h2.25a2.25 2.25 0 012.25 1.937c.082.572.25 1.122.5 1.625a2.25 2.25 0 01-.25 2.25L10.25 9.75a14.25 14.25 0 005.25 5.25l1.938-1.938a2.25 2.25 0 012.25-.25c.503.25 1.053.418 1.625.5a2.25 2.25 0 011.937 2.25z"
      />
    </svg>
  );
}
