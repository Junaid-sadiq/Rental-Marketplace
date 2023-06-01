//this container is going to be client side to prevent hydration issues
'use client';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
    max-w-[2520px]
    mx-auto
    xl:px-20
    md:px-10
    sm:px-2
    px-4
    dark:bg-zinc-900
     "
    >
      {children}
    </div>
  );
};

export default Container;
