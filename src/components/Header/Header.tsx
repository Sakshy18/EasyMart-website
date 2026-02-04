import Icon from "../..//shared/ui/Icon";
import Search from "../../shared/ui/Search";
import CartButton from "../../shared/ui/CartButton";
import LoginButton from "../..//shared/ui/LoginButton";
import Logo from "../../assets/images/Logo.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearSearch } from "../../features/search/searchSlice";

export default function Header() {
  const dispatch = useDispatch();
const navigate = useNavigate();

  //   const cartCount = useSelector((state: any) => state.cart.totalItems);
  // const cartCount = useSelector(
  //   (state: any) => state.cart?.totalItems ?? 0
  // );
  const cartCount = 0;
  return (
    <header className="w-full bg-white border-b border-[var(--color-stroke-light)]">
      <div className="hidden lg:flex h-[5.25rem] px-[5rem] items-center justify-between">
        <div className="flex items-center gap-[2rem]">
          <div className="text-[1.25rem] font-semibold text-[var(--color-primary-600)]">
  <img
  src={Logo}
  alt="EasyMart"
  className="cursor-pointer"
  onClick={() => {
    dispatch(clearSearch());
    navigate("/");
  }}
/>
         
          </div>

          <div className="flex items-center gap-[0.5rem]">
            <Icon name="location" size={24} />
            <span className="text-[0.875rem] font-medium text-[var(--text-muted)]">
              10115 New York
            </span>
          </div>
        </div>

        <Search placeholder="Search by" />

        <div className="flex items-center gap-[1.25rem]">
          <CartButton count={cartCount} />
          <LoginButton />
        </div>
      </div>

      <div className="flex lg:hidden h-[4.5rem] px-[1rem] items-center justify-between">
        <Icon name="arrowRight" size={20} />

        <Search placeholder="Search by product name" size="mobile" />

        <CartButton count={cartCount} />
      </div>
    </header>
  );
}
