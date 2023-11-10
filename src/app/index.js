import { Controller } from './controller';
import { songs } from './data/songs';
import { Model } from './model/model';
import { View } from './view/view';

const init = () => {
  const model = new Model();
  const view = new View(model);
  const controller = new Controller(view, model);

  controller.loadSongs(songs);
};

init();
