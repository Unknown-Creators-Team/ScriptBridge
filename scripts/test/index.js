import*as t from"../wrapper/server/index";const{world:o,system:a}=t;o.afterEvents.blockBreak.subscribe(e=>{const{block:s,player:r}=e;r.sendMessage(s.typeId)});
//# sourceMappingURL=index.js.map
