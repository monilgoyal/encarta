import { useEffect, RefObject } from "react";

export const useScript = (
    url: string,
    ref: RefObject<HTMLFormElement>,
    id: string

) => {
    useEffect(() => {
        const script = document.createElement("script");

        script.src = url;
        script.async = true;
        script.setAttribute('data-payment_button_id', id)

        if (ref.current) {
            ref.current.appendChild(script);
        }
    }, [url, ref]);
};