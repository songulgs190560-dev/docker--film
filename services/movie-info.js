// Film verilerini döner (Stateless: Sadece gelen ID'ye göre sonuç verir)
export const getMovieDetail = (id) => {
    const movies = {
        1: { title: "Inception", genre: "Sci-Fi", director: "Christopher Nolan" },
        2: { title: "Interstellar", genre: "Drama", director: "Christopher Nolan" }
    };
    return movies[id] || { error: "Film bulunamadı" };
};
