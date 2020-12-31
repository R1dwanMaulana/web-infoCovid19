import API_ENDPOINT from '../globals/api-endpoint';

class CNNSource {
  static async confirmedStatus() {
    const response = await fetch(API_ENDPOINT.Confirmed);
    const responseJson = await response.json();
    return responseJson.results;
  }
}

export default CNNSource;
