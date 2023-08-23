export default function Wrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="grow bg-background">
      <div className="mx-auto my-8 box-border w-3/5 rounded-3xl bg-white p-10 shadow-xl">
        {children}
      </div>
    </div>
  );
}
