const chokidar = require('chokidar')
const exec = require('await-exec')
const fs = require('fs')

const copyStatic = async () => {
  await exec('cp -r static/* public')
  return true
}

const example = async () => {
  // "build": "./node_modules/.bin/esbuild ./pages/index.js --bundle --loader:.js=jsx --loader:.png=file --loader:.jpg=file --define: --outdir=public"
  await copyStatic()
  let result = await require('esbuild').build({
    entryPoints: ['./pages/index.js'],
    loader: { '.js': 'jsx', '.png': 'file', '.jpg': 'file' },
    bundle: true,
    define: { 'process.env.NODE_ENV': '"development"' },
    outdir: 'public',
    incremental: true,
  })

  const rerun = async () => {
    const start = +Date.now()
    await copyStatic()
    await result.rebuild()
    console.log('rebuild took', +Date.now() - start)
  }

  console.log('watching')
  chokidar
    .watch(['./static', './pages', './components'], { ignoreInitial: true })
    .on('all', (event, path) => {
      rerun()
    })

  // Call "dispose" when you're done to free up resources.
  // result.rebuild.dispose()
}

example()
