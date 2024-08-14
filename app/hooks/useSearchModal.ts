import { create } from 'zustand';

interface SearchModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSearchModal = create<SearchModalStore>((set) => ({
  isOpen: false,
  onOpen: () => {
    console.log('Opening search modal');
    set({ isOpen: true });
  },
  onClose: () => {
    console.log('Closing search modal');
    set({ isOpen: false });
  },
}));

export default useSearchModal;
