import { Summary } from "./Summary/Summary";
import { ShippingDetails } from "./ShippingDetails/ShippingDetails";
import { useGetParts } from "../../hooks/useGetParts";

export const Shipment = () => {
  const { data: parts } = useGetParts("fig-000029");

  return (
    <div>
      <ShippingDetails />
      <Summary parts={parts} />
    </div>
  );
};
