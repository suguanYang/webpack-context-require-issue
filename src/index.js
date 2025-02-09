const req = require.context('./mods', true, /\.js$/); // both 1.js and 2.js are modules
import mod1Relative from './mods/1.js'; // not a module
import mod1Alias from 'mods/2.js'; // module

export default {
    mod1Relative,
    mod1Alias,
    req,
};
