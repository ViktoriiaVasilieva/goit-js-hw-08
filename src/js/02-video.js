import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE = 'videoplayer-current-time';
const player = new Player('vimeo-player', {
  id: 'vimeo-player',
  width: 640,
});

const currentTime = localStorage.getItem(LOCAL_STORAGE);

const onPlay = function (data) {
  const timeupdate = data.seconds;
  console.log(timeupdate);
  localStorage.setItem(LOCAL_STORAGE, timeupdate);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(currentTime).then(function (seconds) {});
