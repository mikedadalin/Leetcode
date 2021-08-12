/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    intervals.sort(function(a, b) {
        return a[0] - b[0];
    })
    let roomQ = [];
    
    for(let i = 0; i < intervals.length; i++) {
        if(roomQ.length == 0) {
            roomQ.push(intervals[i][1]);
            continue;
        }
        
        let hasRoom = false;
        for(let j = 0; j < roomQ.length; j++) {
            if(intervals[i][0] >= roomQ[j]) {
                roomQ[j] = intervals[i][1];
                hasRoom = true;
                break;
            }
        }
        
        if(!hasRoom) {
            roomQ.push(intervals[i][1]);
        }
    }
    
    return roomQ.length;
};
