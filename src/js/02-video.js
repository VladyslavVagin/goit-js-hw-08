import vimeoPlayer from "@vimeo/player";
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

player.on('timeupdate', throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}, 1000));

const timingOfVideo = localStorage.getItem("videoplayer-current-time");

const timingSeconds = function (timer) {
    if (timingOfVideo !== null) {
        return timer = JSON.parse(timingOfVideo).seconds;
    } else {
        return timer = '0';
    }
};

player.setCurrentTime(timingSeconds());

