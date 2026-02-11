import { useState, useEffect } from "react";

export interface Weather {
    city: string;
    country: string;
    temp: string;
    icon: string;
    conditionText: string;
}

interface Return {
    weather: Weather | null;
    loading: boolean;
    error: string | null;
    fetchByCity: (city: string) => void;
}

const API = `https://api.weatherapi.com/v1/current.json?key=${
    import.meta.env.VITE_API_KEY
}&q=`;

export default function useWeather(): Return {
    const [ciudad, setCiudad] = useState<string>("");
    const [clima, setClima] = useState<Weather | null>(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState<string | null>(null);

  /* ---------- efectos ---------- */
    useEffect(() => {
        if (!ciudad) return;   // no ciudad -> no llamada

        const fetchData = async () => {     // <- función asíncrona interior
            setCargando(true);
            setError(null);

            try {
                const respuesta = await fetch(API + encodeURIComponent(ciudad));
                const datos = await respuesta.json();

                if (datos.error) throw new Error(datos.error.message);

                setClima({
                    city: datos.location.name,
                    country: datos.location.country,
                    temp: datos.current.temp_c,
                    icon: datos.current.condition.icon,
                    conditionText: datos.current.condition.text,
                });
            } catch (err: any) {
                setError(err.message);
                setClima(null);
            } finally {
                setCargando(false);
            }
        };

        fetchData();    // con esto se ejecuta la función

    }, [ciudad]); // ← se re-ejecuta al cambiar la ciudad

    const fetchByCity = (c: string) => setCiudad(c.trim());

    return {
        weather: clima,
        loading: cargando,
        error,
        fetchByCity
    };
}