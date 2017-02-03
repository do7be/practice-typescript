window.onload = () => {
  class hoge {
    constructor () {
      console.log('contructor!!!!')
    }

    nyaan (voice :string) {
      console.log(voice)
    }
  }

  const fuga = new hoge
  fuga.nyaan('wan')
  fuga.nyaan('kokekokko-')

  let aaa = <HTMLInputElement>document.getElementById('piyo-button')
  aaa.addEventListener('click', (e) => {
    let bbb = <HTMLInputElement>document.getElementById('piyo-area')
    bbb.textContent = 'PIYO!PIYO!たまにはのんびり!'

  })
}
