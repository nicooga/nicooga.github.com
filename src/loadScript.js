const loadScript = src => {
  const script = document.createElement('script')

  script.async = true
  script.defer = true
  script.src = src
  script.onreadystatechange = function() {
    this.readyState === 'complete' && this.onload()
  }

  const promise = new Promise(resolve => {
    script.onload = _ => resolve()
  })

  document.body.append(script)

  return promise
}

export default loadScript
