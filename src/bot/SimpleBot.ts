import { SocketReceivedMessage } from '../network/SocketClient.d.ts';
import { Bot } from './Bot.d.ts';

export class SimpleBot implements Bot {
  readonly hash: string = 'simple-bot';
  readonly icon: string = 'https://i.imgur.com/cLoYeFb.png';
  readonly nickname: string = 'simple bot';
  readonly defaultMute: boolean = false;

  onMessage(msg: SocketReceivedMessage): void {
    console.log(msg);
  }

  activate(): void {}
}
