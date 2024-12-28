import TypingEffect from "@/components/home/TypingEffect";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col gap-4 px-48 pt-72">
        <div className="flex-1 flex flex-col justify-center items-start px-48">
          <TypingEffect fullText="Welcome to my blog" />
        </div>
      </div>
    </div>
  );
}
