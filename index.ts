import { Bot } from './src/bot/Bot.d.ts';
import { SimpleBot } from './src/bot/SimpleBot.ts';
import { IrudaApp } from './src/IrudaApp.ts';

const app = new IrudaApp('wss://mycast.xyz:8002');

const bots: Bot[] = [new SimpleBot()];

app.run(bots);
