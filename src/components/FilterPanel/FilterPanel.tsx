import { useState } from "react";
import ToggleSwitch from "../../shared/ui/ToggleSwitch";

export default function FilterPanel() {
  const [deals, setDeals] = useState(false);
  const [newArrivals, setNewArrivals] = useState(false);
  const [nearMe, setNearMe] = useState(false);

  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [madeIn, setMadeIn] = useState<string | null>(null);

  const handleReset = () => {
    setDeals(false);
    setNewArrivals(false);
    setNearMe(false);
    setPriceRange(null);
    setMadeIn(null);
  };

  return (
    <aside className="w-[274px] flex-shrink-0">
      <div className="flex justify-between items-center mb-[16px]">
        <p className="text-[16px] font-semibold">Filters</p>

        <button
          onClick={handleReset}
          className="text-[14px] font-semibold text-[var(--color-primary-600)]"
        >
          Reset
        </button>
      </div>

      <div
        className="
          bg-[var(--color-stroke-light-opacity32)]
          border border-[var(--color-stroke-light)]
          rounded-[20px]
          p-[24px]
          flex flex-col
          gap-[24px]
        "
      >
        <Section>
          <ToggleRow label="Deals">
            <ToggleSwitch checked={deals} onChange={setDeals} />
          </ToggleRow>

          <ToggleRow label="New Arrivals">
            <ToggleSwitch checked={newArrivals} onChange={setNewArrivals} />
          </ToggleRow>

          <ToggleRow label="Near Me">
            <ToggleSwitch checked={nearMe} onChange={setNearMe} />
          </ToggleRow>
        </Section>

        <Section title="Price">
          <RadioRow
            label="All"
            active={priceRange === null}
            onClick={() => setPriceRange(null)}
          />
          <RadioRow
            label="$4 - $12"
            active={priceRange === "4-12"}
            onClick={() => setPriceRange("4-12")}
          />
          <RadioRow
            label="$4 & Above"
            active={priceRange === "4plus"}
            onClick={() => setPriceRange("4plus")}
          />
        </Section>

        <Section title="Made in">
          <RadioRow
            label="All"
            active={madeIn === null}
            onClick={() => setMadeIn(null)}
          />
          <RadioRow
            label="United States"
            active={madeIn === "us"}
            onClick={() => setMadeIn("us")}
          />
          <RadioRow
            label="Europe"
            active={madeIn === "eu"}
            onClick={() => setMadeIn("eu")}
          />
        </Section>
      </div>
    </aside>
  );
}

function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[12px]">
      {title && <p className="text-[14px] font-semibold">{title}</p>}
      {children}
    </div>
  );
}

function ToggleRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[8px]">
      {children}
      <p className="text-[16px] font-semibold">{label}</p>
    </div>
  );
}

function RadioRow({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="flex items-center gap-[8px]">
      <div
        className={`
          w-[18px] h-[18px]
          rounded-full
          border
          flex items-center justify-center
          ${
            active
              ? "border-[var(--color-primary-500)]"
              : "border-[var(--color-black-100)]"
          }
        `}
      >
        {active && (
          <div className="w-[7px] h-[7px] rounded-full bg-[var(--color-primary-600)]" />
        )}
      </div>

      <p className="text-[16px] font-semibold">{label}</p>
    </button>
  );
}
