export default function () {

  const soundForest = new Audio("https://drive.google.com/u/0/uc?id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA&export=download")
  const soundRain = new Audio("https://drive.google.com/u/0/uc?id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2&export=download")
  const soundCoffeeshop = new Audio("https://drive.google.com/u/0/uc?id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA&export=download")
  const soundFireplace = new Audio("https://drive.google.com/u/0/uc?id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB&export=download")


  soundForest.loop = true
  soundRain.loop = true
  soundCoffeeshop.loop = true
  soundFireplace.loop = true


  function defaultSound () {
    soundForest.play()
    soundRain.pause()
    soundCoffeeshop.pause()
    soundFireplace.pause()
  }

  function Forest () {
    localStorage.setItem('som', 'forest')
    soundForest.play()
    soundRain.pause()
    soundCoffeeshop.pause()
    soundFireplace.pause()
  }

  function Rain () {
    localStorage.setItem('som', 'rain')
    soundForest.pause()
    soundRain.play()
    soundCoffeeshop.pause()
    soundFireplace.pause()
  }

  function Coffeeshop () {
    localStorage.setItem('som', 'coffeeshop')
    soundForest.pause()
    soundRain.pause()
    soundCoffeeshop.play()
    soundFireplace.pause()
  }

  function Fireplace () {
    localStorage.setItem('som', 'fireplace')
    soundForest.pause()
    soundRain.pause()
    soundCoffeeshop.pause()
    soundFireplace.play()
  }

  function StopSound () {
    soundForest.pause()
    soundRain.pause()
    soundCoffeeshop.pause()
    soundFireplace.pause()
  }

  return {
    Forest,
    Rain,
    Coffeeshop,
    Fireplace,
    StopSound,
    defaultSound
  }
}