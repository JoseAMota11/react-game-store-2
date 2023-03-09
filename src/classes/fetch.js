class Fetch {
  constructor() {
    if (Fetch.instance === null) {
      Fetch.instance = this;
    }
    return Fetch.instance;
  }

  async get(url, request, options = {}, id = '') {
    const newURL = new URL(url);
    const params = new URLSearchParams(newURL);

    for (const [key, value] of Object.entries(request)) {
      params.set(key, value);
    }

    url = `${url}?${params.toString()}`;

    const data = await fetch(url, options);
    const response = await data.json();
    console.log(response);
  }

  async post() {}

  async put() {}

  async delete() {}
}

const fetchSomething = new Fetch();
Object.freeze(fetchSomething);
export { fetchSomething };
