import React from "react";
interface ContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}
const Container: React.FC<ContainerProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <div className="min-h-screen lg:px-44 px-4 pt-28 ">
      <div className="flex flex-col gap-4 items-start pb-20">
        <div className="text-primary font-semibold text-4xl space-x-1">
          /<span className="text-white">{title}</span>
        </div>
        <span className="text-white">{description}</span>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Container;
