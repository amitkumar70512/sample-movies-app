export const fetchSearchResults = async (query) => {
    if (query && query.length > 0) {
        const parsedQuery = query.replaceAll(' ', '+');
        const url = `https://api.themoviedb.org/3/search/movie?api_key=3e99401540a1842231b61f8caaca2b56&language=en-US&query=${parsedQuery}&page=1&include_adult=false`;
        const res = await fetch(url);
        const resJson = res.json();
        return resJson;
    } else {
        return [];
    }
};