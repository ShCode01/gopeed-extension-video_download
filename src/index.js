gopeed.events.onResolve((ctx) => {
  const url = ctx.res.files[0].req.url;
  exec(`yt-dlp "${url}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`执行错误: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`标准错误: ${stderr}`);
      return;
    }
    console.log(`标准输出: ${stdout}`);

  })
  
});
