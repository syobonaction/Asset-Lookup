var assets = [];

function Asset(service,type,id,notes,serviceLine,makesBMP){
  this.service = service;
  this.type = type;
  this.id = id;
  this.notes = notes;
  this.serviceLine = serviceLine;
  this.makesBMP = makesBMP;
}

/* GBC */
assets.push(new Asset("GBC","hostname","A0468400530","","FLEX",""));
assets.push(new Asset("GBC","hostname","A3381234268","","",""));
assets.push(new Asset("GBC","hostname","A6293849997","","",""));
assets.push(new Asset("GBC","hostname","A7682330116","","",""));
assets.push(new Asset("GBC","hostname","A1812258528","","",""));
assets.push(new Asset("GBC","ip","10.10.10.1","","VOICE",""));
assets.push(new Asset("GBC","ip","10.10.10.2","","VOICE",""));
assets.push(new Asset("GBC","siteid","102","","VOICE",""));
assets.push(new Asset("GBC","hostname","A5560865128","","NET2",""));
assets.push(new Asset("GBC","tn","555-5555","remote worker","NET2",""));
assets.push(new Asset("GBC","hostname","A5828209223","","NET2",""));
assets.push(new Asset("GBC","tn","555-4444","","NET2",""));
assets.push(new Asset("GBC","tn","555-3333","","DSL",""));
assets.push(new Asset("GBC","circuitid","DC424","","VPN",""));
assets.push(new Asset("GBC","hostname","B9689189697","","VPN",""));
assets.push(new Asset("GBC","siteid","145","","VPN",""));
assets.push(new Asset("GBC","hostname","B0001139033","","NET10",""));
assets.push(new Asset("GBC","hostname","B2184231615","","NET10",""));
assets.push(new Asset("GBC","hostname","B6635627789","","NET10",""));
assets.push(new Asset("GBC","tn","555-2222","High Priority","NET10",""));
assets.push(new Asset("GBC","hostname","B8418181236","Government","NET10",""));
assets.push(new Asset("GBC","hostname","B1970647573","High Priority",""));
assets.push(new Asset("GBC","hostname","C6591369700","High Capacity",""));
assets.push(new Asset("GBC","tn","555-1111","","CONNECT",""));
assets.push(new Asset("GBC","tn","555-9999","","CONNECT",""));
assets.push(new Asset("GBC","tn","555-0000","","CONNECT",""));
assets.push(new Asset("GBC","tn","555-7777","","CONNECT",""));

/* UPWARK */
assets.push(new Asset("UPWARK","ip","192.168.1.101","","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.102","","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.103","","","Yes"));
assets.push(new Asset("UPWARK","ip","192.168.1.104","","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.105","","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.106","","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.107","","UWVOICE",""));
assets.push(new Asset("UPWARK","ip","192.168.1.108","High Capacity","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.109","High Capacity","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.110","High Capacity","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.111","Government","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.112","High Capacity","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.113","High Priority","",""));
assets.push(new Asset("UPWARK","ip","192.168.1.114","High Priority","",""));

/* NDCD */
assets.push(new Asset("NDCD","hostname","W37543956810","McDougal's","",""));
assets.push(new Asset("NDCD","hostname","W32056252350","Shelston","",""));
assets.push(new Asset("NDCD","hostname","W38068719238","Nitendo","",""));
assets.push(new Asset("NDCD","hostname","W32943726238","Americcan","",""));
assets.push(new Asset("NDCD","hostname","W37582897576","Control Central","",""));
assets.push(new Asset("NDCD","hostname","W30066836235","Webby's","",""));
assets.push(new Asset("NDCD","hostname","W39607920836","Turkinteller","",""));

/* SDCD */
assets.push(new Asset("SDCD","hostname","S54869514043","","",""));
assets.push(new Asset("SDCD","hostname","S53477842308","","",""));
assets.push(new Asset("SDCD","hostname","S59586218860","","EVPN",""));
assets.push(new Asset("SDCD","hostname","S53607955010","Government","VPN",""));
assets.push(new Asset("SDCD","hostname","S59709416252","NC3","",""));
assets.push(new Asset("SDCD","hostname","S57967715643","NC3","",""));
assets.push(new Asset("SDCD","hostname","S54334564944","GPS","",""));
assets.push(new Asset("SDCD","hostname","S56547872741","GPS","",""));

/* DTPHX */
assets.push(new Asset("DTPHX","hostname","A6058378700","","",""));
assets.push(new Asset("DTPHX","hostname","A0301010909","","",""));
assets.push(new Asset("DTPHX","hostname","A9807305485","","",""));
assets.push(new Asset("DTPHX","hostname","A9056501981","","",""));
assets.push(new Asset("DTPHX","tn","555-1234","","",""));
assets.push(new Asset("DTPHX","circuitid","E456","","VPN",""));
assets.push(new Asset("DTPHX","circuitid","E223","Private Line","",""));
assets.push(new Asset("DTPHX","circuitid","F657","Fiber","",""));
assets.push(new Asset("DTPHX","circuitid","E332","Multi","",""));
assets.push(new Asset("DTPHX","tn","555-7655","","",""));
assets.push(new Asset("DTPHX","tn","555-4532","","",""));
assets.push(new Asset("DTPHX","circuitid","E678","","",""));
assets.push(new Asset("DTPHX","tn","555-0083","","",""));
