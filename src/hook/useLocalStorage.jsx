//source https://usehooks-ts.com/react-hook/use-local-storage

import { useEffect, useState, useCallback } from "react";
import { useEventCallback } from "./useEventCallback";
export default function useLocalStorage(key, initialValue) {
    const readValue = useCallback(() => {
        // Prevent build error "window is undefined" but keep keep working
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? parseJSON(item) : initialValue;
        } catch (error) {
            console.warn(`Error reading localStorage key “${key}”:`, error);
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState(readValue);

    const setValue = useEventCallback((value) => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === "undefined") {
            console.warn(
                `Tried setting localStorage key “${key}” even though environment is not a client`
            );
        }

        try {
            // Allow value to be a function so we have the same API as useState
            const newValue =
                value instanceof Function ? value(storedValue) : value;

            // Save to local storage
            window.localStorage.setItem(key, JSON.stringify(newValue));

            // Save state
            setStoredValue(newValue);

            // We dispatch a custom event so every useLocalStorage hook are notified
            window.dispatchEvent(new Event("local-storage"));
        } catch (error) {
            console.warn(`Error setting localStorage key “${key}”:`, error);
        }
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setStoredValue(readValue());
    }, []);

    const handleStorageChange = useCallback(
        (event) => {
            if (event?.key && event.key !== key) {
                return;
            }
            setStoredValue(readValue());
        },
        [key, readValue]
    );

    // this only works for other documents, not the current one
    useEventListener("storage", handleStorageChange);

    // this is a custom event, triggered in writeValueToLocalStorage
    // See: useLocalStorage()
    useEventListener("local-storage", handleStorageChange);

    return [storedValue, setValue];
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON(value) {
    try {
        return value === "undefined" ? undefined : JSON.parse(value ?? "");
    } catch {
        console.log("parsing error on", { value });
        return undefined;
    }
}
