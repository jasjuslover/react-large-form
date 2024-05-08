import { useEffect, useRef } from "react";

export const SellPrice = ({ id }: SellPriceProps) => {
  const spanRef = useRef<any>(null);

  useEffect(() => {
    const inputEl: any = document.getElementById(`count-${id}`);

    if (inputEl) {
      spanRef.current.innerHTML =
        +inputEl.value.replaceAll(",", "") * (10 / 100);
      inputEl.addEventListener("keyup", (e: any) => {
        const sellPrice = +e.target.value.replaceAll(",", "");
        spanRef.current.innerHTML = sellPrice * (10 / 100);
      });
    }

    return () => {
      inputEl?.removeEventListener("keyup", () => { });
    };
  }, []);

  return (
    <>
      <span ref={spanRef} />
    </>
  );
};
