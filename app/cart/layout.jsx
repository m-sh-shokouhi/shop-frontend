import { Stepper } from "@/components/index.js";
import SiteLayout from "../(shopping)/layout.jsx";
export default function CartLayout({ children }) {
  return (
    <SiteLayout>
      <Stepper />
      {children}
    </SiteLayout>
  );
}
