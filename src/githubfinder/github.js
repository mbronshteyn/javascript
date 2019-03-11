
class Github {

  constructor(){

    this.client_id = '8449e639e246ebe13393';
    this.client_secret = '002318b62c2de69b376270888cb57de556041823';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';

  }

  async getUser( user ){
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}
