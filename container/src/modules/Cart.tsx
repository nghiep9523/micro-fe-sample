import { useEffect, useRef } from "react";
import { mount } from "cart/Cart";

const HeaderModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default HeaderModule;
