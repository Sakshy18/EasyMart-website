export default function BannerSkeleton() {
  return (
    <div className="flex gap-[16px]">
      <div className="w-[422px] h-[248px] rounded-[32px] bg-[var(--color-black-50)] animate-pulse" />
      <div className="w-[568px] h-[248px] rounded-[32px] bg-[var(--color-black-50)] animate-pulse" />
      <div className="w-[308px] h-[248px] rounded-[32px] bg-[var(--color-black-50)] animate-pulse" />
    </div>
  );
}
