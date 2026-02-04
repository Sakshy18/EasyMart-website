import { useNavigate } from "react-router-dom";
import Icon from "./Icon";

interface Props {
  categoryId: string;
}

export default function ViewByCategoryButton({ categoryId }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/categories/${categoryId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="
  flex items-center justify-center
  gap-[0.5rem]
  rounded-full
  border border-[var(--color-primary-600)]
  text-[var(--color-black-800)]
  font-medium

  px-[0.75rem] py-[0.4rem] text-[0.75rem]
  md:px-[1.5rem] md:py-[0.7rem] md:text-[0.95rem]
"
    >
      View by category
      <Icon name="arrowRight" size={18} />
    </button>
  );
}
