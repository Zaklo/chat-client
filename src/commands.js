const audio = new Audio('/public/wizz.mp3')

export default function parse (msg) {
  switch (msg.command) {
    case 'wizz':
      wizz()
      break
  }
}

function wizz () {
  audio.play().then(() => {
    console.log('playing sound')
  }).catch((err) => {
    console.error('playing error', err)
  })
}
