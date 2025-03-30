import { useEffect, useRef } from "react";

export const RevealOnScroll = ({ children, animation = "fade-up" }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                ref.current.classList.add("visible");
            } else {
                ref.current.classList.remove("visible");
            }
        }, { threshold: 0.2 });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`reveal ${animation}`}>
            {children}
        </div>
    );
};
