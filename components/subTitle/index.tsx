import { cn } from "@/utils";

const SubTitle = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <h6 className="text-primary">{text}</h6>
    </div>
  );
};

export default SubTitle;
