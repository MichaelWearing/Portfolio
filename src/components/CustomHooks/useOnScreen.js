import React, { useState } from "react";

export default function useOnScreen(options) {
  const ref = React.useRef();
  const [visible, setVisible] = useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    let current = ref.current;
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, options]);

  return [ref, visible];
}
