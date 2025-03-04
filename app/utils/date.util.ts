import {SUNRISE_API_ROUTE} from "@/app/constants/api-route";

export const getSunrise = async () => {
    const response = await fetch(SUNRISE_API_ROUTE);
    const data = await response.json();
    return data.results.sunrise;
}

export const formatSunriseTime = (sunrise: string) => {
    const date = new Date(sunrise);
    const options: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        timeZone: 'America/Denver', // MST timezone
        timeZoneName: 'short'
    };
    return date.toLocaleString('en-US', options);
};