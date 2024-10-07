export const BadgeItem = ({ children }: { children: string }) => {
  return (
    <span className="text-xs px-2 py-1 rounded bg-projectForeground text-projectBright">
      {children}
    </span>
  );
};
