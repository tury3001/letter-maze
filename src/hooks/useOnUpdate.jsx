import { useEffect, useRef } from "react";

export const useOnUpdate = (callback, deps) => {
  const isFirst = useRef(true);
  useEffect(() => {
    if (!isFirst.current) {
      callback();
    }
  }, deps);

  useEffect(() => {
    isFirst.current = false;
  }, []);
};