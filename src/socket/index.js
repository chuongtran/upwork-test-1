import socketIOClient from 'socket.io-client';
import { API_URL } from 'configs';
import { getToken } from 'utils/tokenHelper';

export default class SocketClass {
  socket = {};

  static instance;

  constructor() {
    this.socket = socketIOClient(API_URL, {
      query: {
        token: getToken(),
      },
    });
  }

  static getInstance() {
    if (!SocketClass.instance) {
      SocketClass.instance = new SocketClass();
    }

    return SocketClass.instance;
  }

  static earseSocket() {
    SocketClass.instance = null;
  }

  disconnectSocket() {
    this.socket.disconnect();
  }

  triggerEvent(eventName, callback) {
    this.socket.on(eventName, (data) => {
      callback(data);
    });
  }

  emitEvent(eventName, data) {
    this.socket.emit(eventName, data);
  }
}
