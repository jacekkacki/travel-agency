export const formatTime = seconds => {
  
  if(typeof(seconds) === 'undefined') {
    return null;
  } else if(typeof(seconds) === 'string') {
    return null;
  } else if(typeof(seconds) === 'function') {
    return null;
  } else if(seconds < 0 ){
    return null;
  } else if(typeof(seconds) === 'number'){

    const sec = Math.floor(seconds % 60)
      .toString().padStart(2, '0');

    const min = Math.floor((seconds/60) % 60)
      .toString().padStart(2, '0');

    const hou = Math.floor(seconds/3600)
      .toString().padStart(2, '0');

    const formatedTime = `${hou}:${min}:${sec}`;
    return formatedTime;
  }
};
