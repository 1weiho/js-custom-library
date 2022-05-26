/*
 * 取得當前時間字串
 * 格式參考: "2022-01-01 12:00:00"
 *
 */
const getTime = () => {
    let time = new Date();
    date = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    let hour = time.getHours().toString().padStart(2, "0");
    let minute = time.getMinutes().toString().padStart(2, "0");
    let second = time.getSeconds().toString().padStart(2, "0");

    return date + " " + hour + ":" + minute + ":" + second;
};

/*
 * 將一個字串裁切為指定長度，若超過指定長度則在字串後加入"..."
 *
 * str: 傳入字串
 * n: 指定長度
 */
const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
};

