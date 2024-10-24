const useCreateDate = () => {
    const dateobj = new Date();

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[dateobj.getMonth()]; // Use the array to get month name

    const date = `${month} ${dateobj.getDate()}, ${dateobj.getFullYear()} [${String(dateobj.getHours()).padStart(2, '0')}:${String(dateobj.getMinutes()).padStart(2, '0')}]`; // Call getFullYear(), pad hours and minutes
    return date;
};

export default useCreateDate;
