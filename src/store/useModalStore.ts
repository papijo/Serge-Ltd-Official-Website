import { create } from "zustand";

export interface PartnerData {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
}

interface ModalStore {
  isOpen: boolean;
  partner: PartnerData | null;
  openModal: (partner: PartnerData) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  partner: null,
  openModal: (partner) => set({ isOpen: true, partner }),
  closeModal: () => set({ isOpen: false, partner: null }),
}));
