import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache = new Map<string, HttpResponse<any>>();
  private maxCacheSize = 100;

  set(key: string, response: HttpResponse<any>): void {
    if (this.cache.size >= this.maxCacheSize) {
      const firstKey = this.cache.keys().next().value ?? "";
      this.cache.delete(firstKey);
    }
    this.cache.set(key, response);
  }

  get(key: string): HttpResponse<any> | null {
    return this.cache.get(key) || null;
  }

  clear(): void {
    this.cache.clear();
  }
}
