/*
 * 取得當前時間字串
 * 格式參考: "2022-01-01 12:00:00"
 *
 */
const getTime = () => {
    let time = new Date();
    date = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    let hour = time.getHours().toString().padStart(2, '0');
    let minute = time.getMinutes().toString().padStart(2, '0');
    let second = time.getSeconds().toString().padStart(2, '0');

    return (date + " " + hour + ":" + minute + ":" + second);
};