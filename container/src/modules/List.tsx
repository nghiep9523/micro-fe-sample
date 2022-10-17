import { useEffect, useRef } from "react";
import { mount } from "list/List";

const ListModule = () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default ListModule;
