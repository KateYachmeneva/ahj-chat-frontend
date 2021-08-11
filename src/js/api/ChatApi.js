/* eslint-disable class-methods-use-this */
import Entity from './Entity';
import createRequest from './createRequest';

export default class ChatAPI extends Entity {
  create(data, callback) {
    const options = {
      method: 'POST',
      query: '/newUser',
      data,
      callback,
    };
    return createRequest(options);
  }
}
