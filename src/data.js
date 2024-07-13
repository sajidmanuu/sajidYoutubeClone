export const API_KEY='AIzaSyDKI7HniJhz440sGWhnaSKkrItfm2LlbM4'


export const valueConverter = (value) => {
    if (value < 1000) {
        return value.toString();
    } else if (value >= 1000 && value < 1000000) {
        return (value / 1000).toFixed(1) + 'K';
    } else if (value >= 1000000 && value < 1000000000) {
        return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000000000 && value < 1000000000000) {
        return (value / 1000000000).toFixed(1) + 'B';
    } else if (value >= 1000000000000) {
        return (value / 1000000000000).toFixed(1) + 'T';
    }
    return value.toString(); // Fallback for any unexpected cases
}
