import { useEffect, type RefObject } from "react";

const useOutsideAlerter = (ref: RefObject<HTMLElement | null>, onOutsideClick?: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref!.current && !ref!.current.contains(event.target as Node)) {
        if (onOutsideClick) {
          onOutsideClick();
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onOutsideClick]);
}

export default useOutsideAlerter;