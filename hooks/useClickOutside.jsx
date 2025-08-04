import { useEffect, useRef } from "react";

export function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    // Usa 'click' en lugar de 'mousedown'
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback]);

  return ref;
}

/**USO
 * 
const menuRef = useClickOutside(() => {
  setIsOpen(false)
})
Y que el ref se aplique al contenedor que debe ignorar los clics internos:
{isOpen && (
  <div ref={menuRef} className="...">
    ...
  </div>
)}

 */
