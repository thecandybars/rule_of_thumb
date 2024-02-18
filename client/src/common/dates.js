export function timeAgo(inputDate) {
  const currentDate = new Date();
  const agoDate = new Date(inputDate);
  const timeDifference = currentDate - agoDate;

  const minutes = Math.floor(timeDifference / (1000 * 60));
  const hours = Math.floor(timeDifference / (1000 * 60 * 60));
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
  const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
  const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));

  if (minutes < 1) {
    return "Just now";
  } else if (minutes < 60) {
    return `A few minutes ago`;
  } else if (hours < 6) {
    return `A few hours ago`;
  } else if (days === 0) {
    return "Today";
  } else if (days === 1) {
    return `Yesterday`;
  } else if (days >= 2 && days <= 31) {
    return `${days} days ago`;
  } else if (months >= 1 && months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
}
