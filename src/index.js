module.exports = function toReadable (number) {

    let nums = ['' ,'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    let exceptions = ['ten', 'eleven', 'twelve', 'thirteen', '', 'fifteen', '', '', 'eighteen'];
    
    let decimacls = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 // let readable_num;
  let temp = number.toString().split('');

    if (number === 0) {
        return 'zero';
    }
console.log(temp.length)
    if (temp.length === 1) {
        return nums[number];
        
    } else if (temp.length === 2 && temp[0] == 1) {
      
        if (temp[1] == 0) return exceptions[0];
        else if (temp[1] == 1) return exceptions[1];
        else if (temp[1] == 2)  return exceptions[2]; 
        else if (temp[1] == 3)  return exceptions[3]; 
        else if (temp[1] == 5)  return exceptions[5];
        else if (temp[1] == 8)  return exceptions[8];
        return nums[temp[1]] + 'teen';
    } else if (temp.length == 2 && temp[1] == 0) {
        return decimacls[temp[0] - 2];
    }
    
    else if (temp.length == 2) {
        return decimacls[temp[0] - 2] + ' ' + nums[temp[1]];
    }
    else if (temp.length === 3) {
        if (temp[1] == 1 && temp[2] == 0) return nums[temp[0]] + ' hundred ' + exceptions[temp[2]];
        else if (temp[1] == 1 && temp[2] == 1) return nums[temp[0]] + ' hundred ' + exceptions[temp[2]];
        else if (temp[1] == 1 && temp[2] == 2) return nums[temp[0]] + ' hundred ' + exceptions[temp[2]];
        else if (temp[1] == 1 && temp[2] == 3) return nums[temp[0]] + ' hundred ' + exceptions[temp[2]];
        else if (temp[1] == 1 && temp[2] == 5) return nums[temp[0]] + ' hundred ' + exceptions[temp[2]];
        else if (temp[1] == 1 && temp[2] == 8) return nums[temp[0]] + ' hundred ' + exceptions[temp[2]];
        else if (temp[1] == 1) return nums[temp[0]] + ' hundred ' + nums[temp[2]] + 'teen';
        else if (temp[1] == 0 && temp[2] == 0) return nums[temp[0]] + ' hundred';
        else if (temp[1] == 0) return nums[temp[0]] + ' hundred ' + nums[temp[2]];
        else if (temp[2] == 0) return nums[temp[0]] + ' hundred ' + decimacls[temp[1] - 2];
        else return nums[temp[0]] + ' hundred ' + decimacls[temp[1] - 2] + ' ' + nums[temp[2]];
    }
}
