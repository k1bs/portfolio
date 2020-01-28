/* eslint-disable no-console */
import figlet from 'figlet';
import standard from 'figlet/importable-fonts/Standard';

export default () => {
  figlet.parseFont('Standard', standard);
  figlet.text('k1bs.dev', { font: 'Standard' }, (err, data) => {
    if (err) {
      console.log('whoops');
      console.dir(err);
      return;
    }
    console.log(data);
    console.log('Web Developer extraordinaire');
    console.log('Like what you see? Hit me up: alex@alex-kibler.com');
  });
};
