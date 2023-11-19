import { IProduct } from "@/types";
import { create } from "zustand";

interface IPerviewModalStore {
  isOpen: boolean;
  data?: IProduct;
  onOpen: (data: IProduct) => void;
  onClose: () => void;
}

const usePervieModal = create<IPerviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: IProduct) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default usePervieModal;
