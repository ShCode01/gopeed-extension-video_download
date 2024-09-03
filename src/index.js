gopeed.events.onResolve((ctx) => {
  const url = ctx.res.files[0].req.url;
  gopeed.logger.debug(url);
  
});
