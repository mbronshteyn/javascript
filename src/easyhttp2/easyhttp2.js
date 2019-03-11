/**
 * EasyHttp class
 */
class EasyHttp{

  // Make HTTP Get
  get( url ){
    return new Promise( ( resolve, reject ) => {
      fetch( url )
        .then( res => res.json() )
        .then( data => resolve( data ))
        .catch ( err => reject( err ));
    });
  }

  // Make HTTP Post
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make HTTP Put
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  // Make HTTP DELETE
  delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
      })
        .then(res => {
          resolve( res.status );
        })
        .catch(err => reject(err));
    });
  }
}
