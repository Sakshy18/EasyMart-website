import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectCategories } from "../../features/categories/selectors";
import CategoryPill from "../CategoryPill/CategoryPill";

export default function CategoriesBar() {
const navigate = useNavigate();
  const categories = useSelector(selectCategories);
 const { categoryId } = useParams();


  return (
    <div
      className="
        flex gap-[12px]
        py-[12px] md:py-[24px]
        overflow-x-auto
        border-b border-white
      "
    >
      {categories.map((cat) => (
        <CategoryPill
          key={cat.id}
          id={cat.id}
          label={cat.name}
          icon={cat.icon}
           isActive={cat.id === categoryId}
           onClick={() => navigate(`/categories/${cat.id}`)}
        />
      ))}
    </div>
  );
}