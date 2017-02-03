window.onload = () => {
  class hoge {
    constructor () {
      console.log('contructor!!!!')
    }

    nyaan (voice :string) {
      console.log(voice)
      return voice
    }
  }

  const fuga = new hoge
  fuga.nyaan('wan')
  fuga.nyaan('kokekokko-')

  let aaa = <HTMLInputElement>document.getElementById('piyo-button')
  aaa.addEventListener('click', (e :Event) => {
    let bbb = <HTMLInputElement>document.getElementById('piyo-area')
    bbb.textContent = 'PIYO!PIYO!たまにはのんびり!'
  })

  const ccc = <HTMLInputElement>document.getElementById('nyaan-voice')
  ccc.addEventListener('change', (e :Event) => {
    const voice = fuga.nyaan(ccc.value)
    let ddd = <HTMLInputElement>document.getElementById('voice-preview')
    ddd.textContent = voice
  })
}
