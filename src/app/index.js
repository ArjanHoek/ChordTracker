import { Controller } from './controller';
import { unchainMyHeart } from './data/songs/unchain-my-heart';
import { View } from './view';

const view = new View();
const controller = new Controller(view);

controller.loadSong(unchainMyHeart);
