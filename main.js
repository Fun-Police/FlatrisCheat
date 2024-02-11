let flatrisCheat = {
    MID : (function () {
        return {
            some : function () {
                return true
            },
            [Symbol.toStringTag] : 'require-hook'
        };
    })(),

    rawRequire : webpackJsonp.push([[this.MID],{
        [this.MID]:(module, exports, require) => {
            Object.prototype.__defineGetter__(this.MID, function () {
                require.c = this
                delete Object.prototype[this.MID]
                return { exports : {} }
            });
            require(this.MID)
            delete Object.prototype[this.MID]
            module.exports = require
            return module.exports
        }
    },[[this.MID]]]),

    require (moduleId) {
        // Check if module is in cache
        var cachedModule = this.require.c[moduleId];
        if (cachedModule !== undefined) {
            return cachedModule.exports;
        }
              
        // Create a new module (and put it into the cache)
        var module = this.require.c[moduleId] = {
            i : moduleId,
            l : true,
            exports: {}
        };
              
        // Execute the module function
        this.require.m[moduleId](module, module.exports, this.require);
              
        // Return the exports of the module
        return module.exports;
    },

    findModule(filter) {
        let retVal = []
        Object.values(this.require.c).forEach((module)=>{
            if (module.exports.hasOwnProperty(filter)) {
                retVal.push(module.exports[filter])
            }
        })
        if (retVal.length = 1) {
            return retVal[0]
        } else {
            return retVal
        }
    }
}

// prevent potential detection
webpackJsonp.pop()
delete flatrisCheat.rawRequire.m['[object require-hook]']
delete flatrisCheat.rawRequire.c['[object require-hook]']

// add properties to safe require
flatrisCheat.require.m = flatrisCheat.rawRequire.m
flatrisCheat.require.c = flatrisCheat.rawRequire.c

flatrisCheat.context = flatrisCheat.findModule('router').components["/join"].props.pageProps.initialState
flatrisCheat.currentGame = Object.values(flatrisCheat.context.games).at(-1);
