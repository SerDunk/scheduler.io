import { ReactNode } from "react";

export default function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`md:max-w-5xl mx-auto min-h-screen px-4 ${className}`}>
      {children}
    </div>
  );
}
