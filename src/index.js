/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */

function getTimeForEducation(focus, knowsProgramming, speedConfig) {
    if (knowsProgramming == true) {
        return 800 / speedConfig[focus];
    } else {
        return 500 / speedConfig[focus];
    }
}