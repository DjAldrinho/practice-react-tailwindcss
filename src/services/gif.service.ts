export class GifService {

  private apiKey: string = 'WQQOhQiUul4anrMO5phrf9VvUG7ZWWts';
  private baseUrl: string = 'https://api.giphy.com/v1/gifs';
  private limit: number = 20;


  async get(query: string | undefined) {
    if (query) {
      const url: string = `${(this.baseUrl)}/search?q=${query}
      &api_key=${this.apiKey}&limit=${this.limit}`;
      const response = await fetch(url);
      const { data } = await response.json();
      return GifService.mapResponse(data);
    }
  }

  private static mapResponse(data: any) {
    let gif;

    if (data) {
      gif = data.map((img: any) => {
        return {
          id: img.id,
          title: img.title,
          slug: img.slug,
          url: img.images?.downsized_medium.url,
        };
      });
    }

    return gif;
  }

}
