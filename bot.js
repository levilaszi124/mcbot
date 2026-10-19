const mineflayer = require('mineflayer')

function startBot() {
  const bot = mineflayer.createBot({
    host: 'levismp12.play.hosting',
    port: 25565,
    username: 'AFKBot'
  })

  bot.on('spawn', () => {
    console.log('Bot belépett!')
  })

  bot.on('end', () => {
    console.log('Kapcsolat megszakadt, újracsatlakozás...')
    setTimeout(startBot, 10000)
  })

  bot.on('error', (err) => {
    console.log(err)
  })
}

startBot()
