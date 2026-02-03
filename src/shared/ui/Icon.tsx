import {
  Buy,
  Search,
  Location,
  TwoUsers,
  Filter,
  Category,
  ArrowRight,
  ArrowLeft,
} from "react-iconly";

const ICONS = {
  cart: Buy,
  search: Search,
  location: Location,
  user: TwoUsers,
  filter: Filter,
  category: Category,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,

};

type IconName = keyof typeof ICONS;

interface Props {
  name: IconName;
  size?: number;
  color?: string;
}

export default function Icon({
  name,
  size = 20,
  color = "currentColor",
}: Props) {
  const Component = ICONS[name];
  return <Component set="light" size={size} primaryColor={color} />;
}
