class TokenService {
    getToken(): string | null {
        return localStorage.getItem("token");
    }

    getRefreshToken(): string | null {
        return localStorage.getItem("refreshToken");
    }

    setTokens(token: string, refreshToken: string): void {
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", refreshToken);
    }

    hasToken(): boolean {
        return this.getToken() !== null;
    }

    clearTokens(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
    }
}

export default new TokenService();
