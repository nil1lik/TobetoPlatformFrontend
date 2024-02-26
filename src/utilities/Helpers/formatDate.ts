export const formatDate = (birthdate: string): string => {
    const [year, month, day] = birthdate.split('-'); 
    return `${day}.${month}.${year}`; // Formatı dönüştür
};
