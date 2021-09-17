export class GifService {

  async getAll() {
    return 'Get all gif';
  }

  async get(query: string) {
    return `Get gif ${query}`;
  }

}
