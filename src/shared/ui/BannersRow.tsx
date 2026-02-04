import banner1 from "../../assets/images/banner1.svg";
import banner2 from "../../assets/images/banner2.svg";
import banner3 from "../../assets/images/banner3.svg";

export default function BannersRow() {
  return (
    <div className="flex gap-[1rem] h-[15.5rem]">

      <div className="w-[26.375rem] rounded-[2rem] overflow-hidden">
        <img  src={banner1} className="w-full h-full object-cover"  loading="lazy"
  decoding="async" />
      </div>

      <div className="w-[35.5rem] rounded-[2rem] overflow-hidden">
        <img src={banner2} className="w-full h-full object-cover"  loading="lazy"
  decoding="async" />
      </div>

      <div className="w-[19.25rem] rounded-[2rem] overflow-hidden">
        <img src={banner3} className="w-full h-full object-cover"  loading="lazy"
  decoding="async" />
      </div>

    </div>
  );
}
