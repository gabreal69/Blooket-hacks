(()=>{
    let base = {}; // easier if contents are defined externally
    
    // cache require so it doesn't push a new module each time
    base.require = (()=>{x=Math.floor(Math.random()*100000+1);r=webpackJsonp.push([[],{[x]:(_,e,t)=>{e.exports=t}},[[x]]]).exports;return r})();

    // format cache for easy use
    base.cache =  Object.values(base.require.c);

    // makes it easy to find modules
    base.findModule = (filter, first = false) => {
        if (!first) {
            return base.cache.find((module) => module.exports && module.exports.a && module.exports.a[filter]).exports.a;
        } else {
            return base.cache.filter((module) => module.exports?.a && module.exports?.a[filter]).map((module) => module.exports.a);
        }
    };
    
    window.base = base //remove in prod
})()
