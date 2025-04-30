(() => {
   let isSuperman:boolean = true;
   let isBatman:boolean = false;
   
   isSuperman = (isBatman) ? true : false;

   isSuperman = true && true;
   console.log({ isSuperman });
   
})()