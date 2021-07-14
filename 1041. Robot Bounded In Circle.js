/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    /*
        最多执行几遍系列指令能判断是否转圈？
        实际上只需要执行一遍系列指令，其导致转圈的充分必要条件是：
        
        1. 执行完一遍指令后回到原点
           或者
        2. 执行完一遍指令后发生转向（因为只有向左向右的转向，所以转向最终只可能是90，180，270）
        
        通过变量x, y表示距离原点的位移，通过direction表示朝向，同时也是单位位移数组的index：
        direction的值 0, 1, 2, 3 分别表示 北，西，南，东
        对应的单位位移数组move为：{0, 1}, {-1, 0}, {0, -1}, {1, 0}
        遍历instructions，对于每一个指令，改变对应的x，y和direction
        最终只需要判断是否x，y均为0，或者direction不为0即可
    */
    
    let directionMap = [
        [0, 1],
        [-1, 0],
        [0, -1],
        [1, 0]
    ];
    
    let direction = 0, x = 0, y = 0;
    
    for(let i = 0; i < instructions.length; i++) {
        if(instructions[i] == "G") {
            x += directionMap[direction][0];
            y += directionMap[direction][1];
        } else if(instructions[i] == "L") {
            direction = (direction + 1) % 4;
        } else if(instructions[i] == "R") {
            direction = (direction + 3) % 4;
        }
    }
    
    return (x == y && x == 0) || (direction != 0);
    
};
