import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    setLocalStorage(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    getLocalStorage(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    removeLocalStorage(key: string) {
        localStorage.removeItem(key);
    }
    removeTodasLocalStorage() {
        localStorage.clear();
    }
}