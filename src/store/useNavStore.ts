import { create } from "zustand";

interface NavStore {
  menuOpen: boolean;
  activeCategory: string | null;
  hoveredCategory: string | null;
  setMenuOpen: (open: boolean) => void;
  toggleMenu: () => void;
  setActiveCategory: (cat: string | null) => void;
  setHoveredCategory: (cat: string | null) => void;
  closeAll: () => void;
}

export const useNavStore = create<NavStore>((set) => ({
  menuOpen: false,
  activeCategory: null,
  hoveredCategory: null,
  setMenuOpen: (open) => set({ menuOpen: open }),
  toggleMenu: () =>
    set((state) => ({
      menuOpen: !state.menuOpen,
      activeCategory: !state.menuOpen ? "Services" : null,
    })),
  setActiveCategory: (cat) => set({ activeCategory: cat }),
  setHoveredCategory: (cat) => set({ hoveredCategory: cat }),
  closeAll: () =>
    set({ menuOpen: false, activeCategory: null, hoveredCategory: null }),
}));
