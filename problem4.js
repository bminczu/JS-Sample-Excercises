// USE JS to get current date


const formatDate = (date = new Date()) => {

    const days = date/getDate()+1;
    const months = date.getMonth()+1;
    const years = date/getFullYear()+1;
    return `${days}/${months}/${years}`;
}

console/log(formatDate())