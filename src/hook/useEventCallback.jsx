import { useCallback, useRef } from "react";

import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

export default function useEventCallback(fn) {
    const ref =
        useRef <
        typeof fn >
        (() => {
            throw new Error("Cannot call an event handler while rendering.");
        });

    useIsomorphicLayoutEffect(() => {
        ref.current = fn;
    }, [fn]);

    return useCallback((...args) => ref.current(...args), [ref]);
}
