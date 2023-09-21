export default function PostWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-background py-4">
      <div className="flex flex-col w-1/2 gap-1">
        {children}
      </div>
    </div>
  );
}
