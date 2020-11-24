import nj from 'numjs'

class npyjs {
  constructor(opts) {
    if (opts) {
      console.error(
        [
          'No arguments accepted to npyjs constructor.',
          'For usage, go to https://github.com/jhuapl-boss/npyjs.',
        ].join(' ')
      )
    }

    this.dtypes = {
      '<u1': {
        name: 'uint8',
        size: 8,
        arrayConstructor: Uint8Array,
      },
      '|u1': {
        name: 'uint8',
        size: 8,
        arrayConstructor: Uint8Array,
      },
      '|i1': {
        name: 'int8',
        size: 8,
        arrayConstructor: Int8Array,
      },
      '<u4': {
        name: 'uint32',
        size: 32,
        arrayConstructor: Int32Array,
      },
      '<i4': {
        name: 'int32',
        size: 32,
        arrayConstructor: Int32Array,
      },
      '<u8': {
        name: 'uint64',
        size: 64,
        arrayConstructor: BigUint64Array,
      },
      '<i8': {
        name: 'int64',
        size: 64,
        arrayConstructor: BigInt64Array,
      },
      '<f4': {
        name: 'float32',
        size: 32,
        arrayConstructor: Float32Array,
      },
      '<f8': {
        name: 'float64',
        size: 64,
        arrayConstructor: Float64Array,
      },
    }
  }

  parse(arrayBufferContents) {
    // const version = arrayBufferContents.slice(6, 8); // Uint8-encoded
    const headerLength = new DataView(
      arrayBufferContents.slice(8, 10)
    ).getUint8(0)
    const offsetBytes = 10 + headerLength

    let hcontents = new TextDecoder('utf-8').decode(
      new Uint8Array(arrayBufferContents.slice(10, 10 + headerLength))
    )
    var header = JSON.parse(
      hcontents
        .replace(/'/g, '"')
        .replace('False', 'false')
        .replace('(', '[')
        .replace(/,*\),*/g, ']')
    )
    var shape = header.shape

    let dtype = this.dtypes[header.descr]

    let nums = new dtype['arrayConstructor'](arrayBufferContents, offsetBytes)

    return {
      dtype: dtype.name,
      data: nums,
      shape,
    }
  }

  async load(filename, callback) {
    /*
      Loads an array from a stream of bytes.
      */
    let self = this
    return fetch(filename)
      .then((fh) => {
        if (fh.ok) {
          return fh
            .blob()
            .then((i) => {
              var content = i
              var reader = new FileReader()
              reader.addEventListener('loadend', function () {
                var text = reader.result
                var res = self.parse(text)
                if (callback) {
                  return callback(res)
                }
                return res
              })
              reader.readAsArrayBuffer(content)
            })
            .catch((err) => console.error(err))
        }
      })
      .catch((err) => console.error(err))
  }
}

const npy = new npyjs()

if (typeof window !== 'undefined') {
  window.gradientsCache = {}
}

export default async (modelName, layer1, layer2) => {
  const key = `${modelName}_${layer1}_${layer2}`

  if (
    typeof window !== 'undefined' &&
    window['gradientsCache'] &&
    gradientsCache[key]
  ) {
    return await gradientsCache[key]
  }

  const file = `https://storage.googleapis.com/fls/nickc/circuit_gradients/${key}.npy`

  const promise = new Promise((resolve) => {
    npy.load(file, ({ data, shape }) => {
      const reshaped = nj
        .array(data, 'int8')
        .reshape(shape)
        .transpose(2, 3, 0, 1)
      resolve(reshaped.tolist())
    })
  })

  if (typeof window !== 'undefined') {
    gradientsCache[key] = promise
  }

  return promise
}
