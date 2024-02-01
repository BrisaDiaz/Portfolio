import { useState, useContext, createContext, useRef } from "react";

type Value = string | number;
type TriggerRef = { current: null } | React.RefObject<HTMLButtonElement>;
const SelectContext = createContext<{
  isOpen: boolean;
  selectedValue: Value;
  toggleOptions: () => void;
  onSelect: (value: Value, label?: Value) => void;
  openOptions: () => void;
  closeOptions: () => void;
  displayedValue: Value;
  triggerRef: TriggerRef;
}>({
  isOpen: false,
  selectedValue: "",
  displayedValue: "",
  triggerRef: { current: null },
  onSelect: (value: Value, label?: Value) => {},
  toggleOptions: () => {},
  openOptions: () => {},
  closeOptions: () => {},
});
export const SelectProvider = function Provider({
  children,
  defaultValue = "",
  displayedValue = "",
}: React.HTMLAttributes<HTMLElement> & {
  defaultValue: Value;
  displayedValue: Value;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectValue] = useState<Value>(defaultValue);
  const [label, setLabel] = useState<Value>(displayedValue || defaultValue);
  const toggleOptions = () => {
    setIsOpen((value) => !value);
  };
  const openOptions = () => {
    setIsOpen(true);
  };
  const closeOptions = () => {
    setIsOpen(false);
  };
  const onSelect = (value: Value, label?: Value) => {
    setSelectValue(value);
    label && setLabel(label);
  };
  const triggerRef = useRef<HTMLButtonElement>(null);
  const value = {
    isOpen,
    selectedValue,
    toggleOptions,
    onSelect,
    openOptions,
    closeOptions,
    displayedValue: label,
    triggerRef,
  };
  return (
    <SelectContext.Provider value={value}>
      <>{children}</>
    </SelectContext.Provider>
  );
};
export const useSelect = () => {
  const value = useContext(SelectContext);
  return value;
};
