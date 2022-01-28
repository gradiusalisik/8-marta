import { useState, useEffect } from 'react';

export const useMedia = (query) => {
    const queryAdapted = `(max-width: ${query}px)`;
    const [matches, setMatches] = useState(window.matchMedia(queryAdapted).matches);

    useEffect(() => {
        const media = window.matchMedia(queryAdapted);

        const listener = () => setMatches(media.matches);

        media.addEventListener('change', listener);

        return () => media.removeEventListener('change', listener);
    }, [queryAdapted]);

    return matches;
};
