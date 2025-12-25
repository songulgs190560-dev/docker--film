// Filmin süresini ve izlenebilirliğini döner
export const getStreamInfo = (movieId) => {
    return {
        id: movieId,
        duration: "2h 28min",
        platform: "Netflix",
        isAvailable: true
    };
};
