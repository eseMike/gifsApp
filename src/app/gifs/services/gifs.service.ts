import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey: string = 'dGMJW12nlHSz4603sy81BZFryoPshmUk';

  constructor() {}
  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this.tagsHistory.filter((oldTag) => oldTag !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  async searchTag(tag: string): Promise<void> {
    if (tag.length === 0) return;
    this.organizeHistory(tag);
    fetch(
      'https//api.giphy.com/v1/gifs/search?api_key=5FLslSKVfsZZQcmEjavdtpSGHGMz8enM&q=valorant&limit=10'
    )
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }
}
