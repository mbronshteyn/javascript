/**
 * EasyHttp class
 */
class EasyHttp{

  // Make HTTP Get
  async get( url ){

    const response = await fetch( 'https://jsonplaceholder.typicode.com/users' );
    return await response.json();
  }

  // Make HTTP Post
  async post(url, data) {

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    let resData =  await response.json();

    return resData;
  }

  // Make HTTP Put
  async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });

    let resData = await response.json();

    return resData;
  }

  // Make HTTP DELETE
  async delete( url ) {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      let resData = await response.status;

      return resData;
  }
}
