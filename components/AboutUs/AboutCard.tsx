interface AboutCardProps {
  label: string;
  text: string;
}

export default function AboutCard({ label, text }: AboutCardProps) {
  return (
    <div
      className="
        px-11 py-9 rounded-xl 
        dark:bg-card-gradient  border-card
        border border-[#2B2B2B]
        flex flex-col gap-2
        items-center text-center
        mx-auto shadow-2xl
      "
    >
      <p className="text-orange-400 text-4xl font-semibold">{label}</p>
      <p className="text-base font-semibold">{text}</p>
    </div>
  );
}
