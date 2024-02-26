export const firstLoginCheck = (userId: string, navigate: any, isFirstNav: string, isNotFirstNav: string) => {
    const storedDataString = localStorage.getItem("firstLogin");
    let storedData = storedDataString ? JSON.parse(storedDataString) : null;

    if (storedData && storedData.isFirstLogin && storedData.user === userId) {
        navigate(isFirstNav);
        localStorage.removeItem("firstLogin");
    } else {
        navigate(isNotFirstNav);
    }
}