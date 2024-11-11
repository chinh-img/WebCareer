    //   *
    //  ***
    // ***** => height = 3, có 3 rows (bắt đầu đếm là 0) => khoảng trống = height - (stt row + 1)
    
let height = 5;
for (let row = 0; row < height; row++) {
    let spaces = height - (row + 1);
    let stars = row * 2 + 1
    let output = '';

    // ouput phải gồm khoảng spaces và * để in được đúng hình tam giác
    // Còn không thì chạy thử đoạn này:
    for(let col = 0; col < spaces; col++){ 
        output += ` `
    }    
    for(let col = 0; col < stars; col++){
        output += "*"
    }
    console.log(output)

    // Cách khác (vì JS có lệnh method .repeat()): 
    // let ouput = ' '.repeat(spaces) + '*'.repeat(stars)
}