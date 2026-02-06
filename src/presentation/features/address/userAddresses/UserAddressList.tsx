"use client";

import { AddressType } from "@/application/schemas/address.schema";
import { ModeEditOutlineOutlined, DeleteOutlined } from "@mui/icons-material";
import { useOrderContext } from "@/context/OrderContext";
import { primary } from "@/lib/theme/colors";

type UserAddressListProps = {
  addresses: AddressType[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
};

export default function UserAddressList({ addresses, onDelete, onEdit }: UserAddressListProps) {
  const { selectedAddress, setSelectedAddress } = useOrderContext();

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {addresses.map((address, index) => {
        const isSelected = selectedAddress?.value === address.value;

        return (
          <div
            key={index}
            onClick={() => setSelectedAddress(address)}
            className={`bg-gray-100 rounded-md p-4 text-xs text-gray-700 cursor-pointer transition border-2 
              ${isSelected ? "border-primary-500" : "border-gray-400"} 
              hover:border-primary-500`}
          >
            <div className="flex">
              <p className="text-gray-800">{address.value}</p>
              <div className="flex mr-auto gap-x-3">
                <ModeEditOutlineOutlined
                  sx={{ color: primary[800], cursor: "pointer", fontSize: { xs: 18, md: 19 } }}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting while editing
                    onEdit(index);
                  }}
                />
                <DeleteOutlined
                  sx={{ color: primary[800], cursor: "pointer", fontSize: { xs: 18, md: 19 } }}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting while deleting
                    onDelete(index);
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
