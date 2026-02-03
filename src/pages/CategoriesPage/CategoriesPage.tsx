import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";

export default function CategoriesPage() {
  const { category } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-[5rem] py-[2.5rem]">
        <h1 className="text-[1.5rem] font-semibold">
          Category: {category}
        </h1>
      </main>
    </div>
  );
}
