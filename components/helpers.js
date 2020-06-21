import { includes } from 'lodash'

// TODO: replace with encyclopedia feature visualizations
const earlyLayers = ['conv2d0', 'conv2d1', 'conv2d2']
const earlyMid = ['mixed3a', 'mixed3b', 'mixed4a', 'mixed4b', 'mixed4c']

export const featureVis = (modelName, layer, neuron) => {
  let fileType = 'jpg'
  if (includes(['conv2d0', 'conv2d1', 'conv2d2'], layer)) {
    fileType = 'png'
  }
  return `https://distill.pub/2020/circuits/early-vision/images/neuron/${layer}_${neuron}.${fileType}`
  if (modelName === 'inceptionv1') {
    if (includes(earlyLayers, layer)) {
      return (
        'https://storage.googleapis.com/clarity-public/colah/experiments/aprox_weights_1/' +
        layer +
        '_' +
        neuron +
        '.png'
      )
    }

    if (includes(earlyMid, layer)) {
      return (
        'https://openai-clarity.storage.googleapis.com/model-visualizer%2F1556758232%2FInceptionV1%2Ffeature_visualization%2Falpha%3DFalse%26layer_name%3D' +
        layer +
        '%26negative%3DFalse%26objective_name%3Dneuron%2Fchannel_index=' +
        neuron +
        '.png'
      )
    }

    return neuronFeatureVisBase(modelName, layer, neuron)
  }

  if (false && modelName === 'inceptionv3') {
    const realLayer = layer.split('Mixed_')[1].slice(0, 2)
    const orig =
      'https://openai-clarity.storage.googleapis.com/encyclopedia/modelzoo/2019-12-13/inceptionv3_slim/lucid.feature_vis/feature_vis/alpha%3DFalse%26negative%3DFalse%26objective%3Dneuron%26op%3DInceptionV3%252FInceptionV3%252FMixed_6a%252Fconcat%253A0%26steps%3D1024/channel-' +
      neuron +
      '.png'

    const [before, after] = orig.split('Mixed_')
    return before + 'Mixed_' + realLayer + after.slice(2)
  }

  return `https://storage.googleapis.com/clarity-public/nick/feature_visualizations/${modelName}/${layer.replace(
    /\//g,
    '_'
  )}/${neuron}.jpg`
}
