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

  document.getElementById('piyo-button')!.addEventListener('click', (e) => {
    let bbb = document.getElementById('piyo-area')! as HTMLInputElement
    bbb.textContent = 'PIYO!PIYO!たまにはのんびり!'

    let ccc = document.getElementById('piyo-area')
    if (ccc) {
      ccc.textContent = 'PIYO!PIYO!たまにはのんびりしない!'
    }
  })

  document.getElementById('nyaan-voice')!.addEventListener('change', function (this: HTMLInputElement, e) {
    const voice = fuga.nyaan(this.value)
    document.getElementById('voice-preview')!.textContent = voice
  })
}
