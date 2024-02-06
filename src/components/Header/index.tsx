import { useCommerceContext } from "../../context/CommerceContext";
import { formatPrice } from "../../utils/formatPrice";
import { HeaderNode, SubTotal } from "./components";

function Header() {
  const { order } = useCommerceContext();

  const subTotal = formatPrice(order?.subTotal || 0);

  return (
    <HeaderNode>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <SubTotal>{subTotal}</SubTotal>
    </HeaderNode>
  );
}
export { Header }
export default Header
