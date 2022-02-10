import * as setupFuns from './setup';

export default function startup(app) {
  Object.keys(setupFuns).forEach((key) => {
    setupFuns[key](app)
  }) 
}