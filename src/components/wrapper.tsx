export default function Wrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex justify-center bg-background py-8">
      <div className="w-3/5 rounded-3xl bg-white px-10 py-8 shadow-xl">
        {children}
      </div>
    </div>
  );
}
