async function loadMoviePage(movieId) {
    // API 1: Film detaylarını al
    const infoRequest = await fetch(`http://movie-service/api/info/${movieId}`);
    const movieData = await infoRequest.json();

    // API 2: Yayın bilgilerini al
    const streamRequest = await fetch(`http://stream-service/api/status/${movieId}`);
    const streamData = await streamRequest.json();

    // UI'da Birleştirme
    document.getElementById('content').innerHTML = `
        <h1>${movieData.title}</h1>
        <p>Tür: ${movieData.genre}</p>
        <p>Süre: ${streamData.duration} - Platform: ${streamData.platform}</p>
    `;
}
