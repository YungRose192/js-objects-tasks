import _ from 'lodash';

// BEGIN
const fill = (target, keys, source) => {
    if (keys.length === 0) {
        Object.assign(target, source);
    } else {
        keys.forEach(key => {
            if (key in source) {
                target[key] = source[key];
            }
        });
    }
    return target;
};

export default fill;
// END