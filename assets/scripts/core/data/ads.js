export const adsMock = [
    {
        id: "AD-ML-001",
        store: "Mercado Libre",
        product: "Silla Ergonómica Pro",
        description: "Optimiza tu espacio de estudio con soporte lumbar avanzado. Ideal para sesiones largas.",
        image: "https://images.unsplash.com/photo-1505797149-43b00fe90494?q=80&w=500&auto=format&fit=crop",
        url: "https://www.mercadolibre.com"
    },
    {
        id: "AD-ML-002",
        store: "Mercado Libre",
        product: "Teclado Mecánico RGB",
        description: "Escribe más rápido y con mayor precisión en tus cursos de programación.",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500&auto=format&fit=crop",
        url: "https://www.mercadolibre.com"
    },
    {
        id: "AD-ML-003",
        store: "Samsung",
        product: "Monitor 27\" 4K Ultra",
        description: "No te pierdas ningún detalle de las lecciones con resolución ultra nítida.",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500&auto=format&fit=crop",
        url: "https://www.mercadolibre.com"
    },
    {
        id: "AD-ML-004",
        store: "Amazon",
        product: "Laptop Stand Aluminio",
        description: "Mejora tu postura y eleva tu productividad con este soporte premium.",
        image: "https://images.unsplash.com/photo-1527866959252-deab85ef7d1b?q=80&w=500&auto=format&fit=crop",
        url: "https://www.amazon.com"
    },
    {
        id: "AD-ML-005",
        store: "Amazon",
        product: "Audífonos Noise Cancelling",
        description: "Concéntrate al máximo en tus lecciones sin distracciones externas.",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500&auto=format&fit=crop",
        url: "https://www.amazon.com"
    }
];

export const getRandomAd = () => {
    const randomIndex = Math.floor(Math.random() * adsMock.length);
    return adsMock[randomIndex];
};