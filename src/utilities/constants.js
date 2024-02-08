export function timeAgo(publishedAt) {
    const currentDate = new Date();
    const publishedDate = new Date(publishedAt);

    const timeDifference = currentDate - publishedDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} ${days === 1 ? 'day' : 'days'} ago`;
    } else if (hours > 0) {
        return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutes > 0) {
        return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    } else {
        return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
    }
}

export const formatViewsCount = (views) => {
    if (views < 1000) {
      return views.toString();
    } else if (views < 1000000) {
      return (views / 1000).toFixed(1) + "K";
    } else {
      return (views / 1000000).toFixed(1) + "M";
    }
  };