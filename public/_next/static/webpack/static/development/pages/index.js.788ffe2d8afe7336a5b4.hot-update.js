webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/article.md":
/*!**************************!*\
  !*** ./pages/article.md ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/esm.js");
/* harmony import */ var components_neuron__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/neuron */ "./components/neuron.js");
/* harmony import */ var components_h2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/h2 */ "./components/h2.js");
/* harmony import */ var components_h3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/h3 */ "./components/h3.js");
/* harmony import */ var pages_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! pages/sidebar */ "./pages/sidebar/index.js");
/* harmony import */ var components_prevNext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/prevNext */ "./components/prevNext/index.js");
/* harmony import */ var components_colab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/colab */ "./components/colab/index.js");
/* harmony import */ var _curvesFeatureVis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./curvesFeatureVis */ "./pages/curvesFeatureVis.js");
/* harmony import */ var _simplified_curve1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./simplified/curve1 */ "./pages/simplified/curve1/index.js");
/* harmony import */ var _data_simplified_activations_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/simplified-activations.json */ "./pages/data/simplified-activations.json");
var _data_simplified_activations_json__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/simplified-activations.json */ "./pages/data/simplified-activations.json", 1);
/* harmony import */ var _simplified_curve2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./simplified/curve2 */ "./pages/simplified/curve2/index.js");
/* harmony import */ var _simplified_dataset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./simplified/dataset */ "./pages/simplified/dataset/index.js");
/* harmony import */ var _dataset_exponential__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dataset/exponential */ "./pages/dataset/exponential/index.js");
/* harmony import */ var _dataset_quilt__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dataset/quilt */ "./pages/dataset/quilt/index.js");
/* harmony import */ var _dataset_attributionSample__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dataset/attributionSample */ "./pages/dataset/attributionSample/index.js");
/* harmony import */ var _dataset_humanLabels__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dataset/humanLabels */ "./pages/dataset/humanLabels/index.js");
/* harmony import */ var _dataset_falsePositives__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dataset/falsePositives */ "./pages/dataset/falsePositives/index.js");
/* harmony import */ var _tuning__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tuning */ "./pages/tuning/index.js");
/* harmony import */ var _synthetic_intro__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./synthetic/intro */ "./pages/synthetic/intro/index.js");
/* harmony import */ var _synthetic_main__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./synthetic/main */ "./pages/synthetic/main/index.js");
/* harmony import */ var _synthetic_cosmetic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./synthetic/cosmetic */ "./pages/synthetic/cosmetic/index.js");
/* harmony import */ var _synthetic_angle_angle1__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./synthetic/angle/angle1 */ "./pages/synthetic/angle/angle1.js");
/* harmony import */ var _synthetic_angle_angleZoomIn__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./synthetic/angle/angleZoomIn */ "./pages/synthetic/angle/angleZoomIn/index.js");
/* harmony import */ var _synthetic_angle_toCurves__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./synthetic/angle/toCurves */ "./pages/synthetic/angle/toCurves/index.js");
/* harmony import */ var _radial__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./radial */ "./pages/radial/index.js");
/* harmony import */ var _curveFamilies_model__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./curveFamilies/model */ "./pages/curveFamilies/model/index.js");
/* harmony import */ var _curveFamilies_radialLayer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./curveFamilies/radialLayer */ "./pages/curveFamilies/radialLayer/index.js");
/* harmony import */ var _curveFamilies_4a406__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./curveFamilies/4a406 */ "./pages/curveFamilies/4a406/index.js");
/* harmony import */ var _curveAnalysis_extraction__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./curveAnalysis/extraction */ "./pages/curveAnalysis/extraction/index.js");
/* harmony import */ var _curveAnalysis_diffParam__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./curveAnalysis/diffParam */ "./pages/curveAnalysis/diffParam/index.js");
/* harmony import */ var _curveAnalysis_tracing__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./curveAnalysis/tracing */ "./pages/curveAnalysis/tracing/index.js");
/* harmony import */ var _curveAnalysis_butterfly__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./curveAnalysis/butterfly */ "./pages/curveAnalysis/butterfly/index.js");
/* harmony import */ var _curveAnalysis_butterflyQuilt__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./curveAnalysis/butterflyQuilt */ "./pages/curveAnalysis/butterflyQuilt/index.js");
/* harmony import */ var _combing__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./combing */ "./pages/combing/index.js");
/* harmony import */ var _combing_dataset__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./combing/dataset */ "./pages/combing/dataset.js");


var _jsxFileName = "/Users/nick/code/circuits/curve-detector-production/pages/article.md";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


/* @jsx mdx */




































var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 10
      }
    }));
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(pages_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    mdxType: "Sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_prevNext__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mdxType: "PrevNext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, "Every vision model we've explored in detail contains neurons which detect curves. Curve detectors in vision models have been hinted at in the literature as far back as 2013 (see figures in Zeiler & Fergus ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "zeiler2014visualizing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 215
    }
  }), "), and similar neurons have been studied carefully in neuroscience ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "tang2018complex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 334
    }
  }), ". We  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://distill.pub/2020/circuits/early-vision/#group_mixed3b_curves",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 386
    }
  }, "briefly discussed"), " curve in our earlier overview of early vision, but wanted to examine them in more depth. This article is the first part of a three article deep dive into curve detectors: their behavior, how they\u2019re built from earlier neurons, and their prevalence across models."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "We\u2019re doing this because we believe that the interpretability community disagrees on several crucial questions. In particular, are neural network representations composed of meaningful features \u2014 that is, features tracking articulable properties of images? On the one hand, there are a number of papers reporting on seemingly meaningful features, such as eye detectors, head detectors, car detectors, and so forth ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "mikolov2013distributed,karpathy2015visualizing,radford2017learning,zhou2014object,olah2017feature,netdissect2017",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 424
    }
  }), ". At the same time, there\u2019s a significant amount of skepticism, only partially reflected in the literature. One concern is that features which seem superficially to be meaningful may in fact not be what they appear ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "donnelly2019interpretability",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 782
    }
  }), ". Several papers have suggested that neural networks primarily detect textures or imperceptible patterns", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "jo2017measuring,geirhos2018imagenet,brendel2019approximating,ilyas2019adversarial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 945
    }
  }), " rather than the kind of meaningful features described earlier. Finally, even if some meaningful features exist, it\u2019s possible they don\u2019t play an especially important role in the network", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "morcos2018importance",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 1243
    }
  }), ".  Some reconcile these results by concluding that if one observes, for example, what appears to be a dog head detector, it is actually a detector for special textures correlated with dog heads."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }, "This disagreement really matters. If every neuron was meaningful, and their connections formed meaningful circuits, we believe it would open a path to completely reverse engineering and interpreting neural networks. Of course, we know not every neuron is meaningful, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 277
    }
  }, "As discussed in Zoom In, the main issue we see is what we call polysemantic neurons which respond to multiple different features, seemingly as a way to compress many features into a smaller number of neurons. We're hopeful this can be worked around."), " but we think it's close enough for this path to be tractable. However, our position is definitely not the consensus view. Moreover, it seems too good to be true, and rings of the similar failed promises in other fields", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 770
    }
  }, "For example, genetics seems to have been optimistic in the past that genes had individual functions and that the human genome project would allow us to \u201Cmine miracles,\" a position which now seems to be regarded as having been naive."), " \u2014 skepticism is definitely warranted!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "We believe that curve detectors are a good vehicle for making progress on this disagreement. Curve detectors seem like a modest step from edge-detecting Gabor filters, which the community widely agrees often form in the first convolutional layer. Artificial curves are simple to generate, opening up lots of possibilities for rigorous investigation. And the fact that they're only a couple convolutional layers deep means we can follow every string of neurons back to the input. At the same time, the underlying algorithm the model has implemented for curve detection is quite sophisticated. If this paper persuades skeptics that at least curve detectors exist, that seems like a substantial step forward. Similarly, if it surfaces a more precise point of disagreement, that would also advance the dialogue.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 5
    }
  }, "A Simplified Story of Curve Neurons"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, "Let's look at a simplified story of the 10 curve detectors in 3b. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curvesFeatureVis__WEBPACK_IMPORTED_MODULE_10__["default"], {
    mdxType: "CurvesFeatureVis",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, "Each curve detector implements a variant of the same algorithm, detecting curves in different orientations. It responds to a wide variety of curves, preferring curves in a given orientation, and gradually firing less as the orientation changes. They are invariant to cosmetic properties such as brightness and color. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_simplified_curve1__WEBPACK_IMPORTED_MODULE_11__["default"], {
    data: _data_simplified_activations_json__WEBPACK_IMPORTED_MODULE_12__,
    mdxType: "Curve1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, "Curve detectors collectively span all orientations."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_simplified_curve2__WEBPACK_IMPORTED_MODULE_13__["default"], {
    data: _data_simplified_activations_json__WEBPACK_IMPORTED_MODULE_12__,
    mdxType: "Curve2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 8
    }
  }, "Curve"), " detectors have sparse activations, responding to only 10% of spatial positions  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 134
    }
  }, "Receptive-field sized crops of an image."), " across ImageNet. Even in the cases where they fire, the vast majority of stimuli cause them to fire only slightly. They are most excited by curves with a similar orientation and curvature to the neuron's feature visualization."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_simplified_dataset__WEBPACK_IMPORTED_MODULE_14__["default"], {
    mdxType: "CurveDataset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }
  }, "Since curves are useful for building sophisticated shapes like circles and 3d geometry, nearly all convolutional neural networks trained on natural images have families of curve neurons."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, "It's worth stepping back and reflecting on how surprising the existence of seemingly meaningful features like curve detectors is. There's no explicit incentive for the network to form meaningful neurons. It's not like we optimized those neurons to be curve detectors! Rather, InceptionV1 is trained to classify images into categories many levels of abstraction removed from curves and somehow curve detectors fell out of the gradient descent process."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, "Moreover, detecting curves across a wide variety of natural images is a difficult and arguably unsolved problem in classical computer vision", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 152
    }
  }, "This is our sense from trying to implement curve detection traditional techniques to compare them to curve neurons. We generally found that programmers looking to detect curves in practice had to choose between a variety of algorithms with significant trade-offs such as robustness to different kinds of visual noise, even in images much less noisy than those found in ImageNet. For instance, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://stackoverflow.com/questions/8260338/detecting-curves-in-opencv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 561
    }
  }, "an answer on StackOverflow"), " claims \u201CThe problem ", "[of curve detection]", ", in general, is a very challenging one and, except for toy examples, there are no good solutions.\" Additionally, many of these algorithms are too slow to run in real time, or have high memory costs."), ". Our network seems to have learned a quite flexible and general solution to this problem, implemented over five convolutional layers. We'll see in the next article that the algorithm used is straightforward and understandable, and we've since reimplemented it by hand."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, "What are we claiming exactly when we say these neurons detect curves? We think that part of the reason why there can be disagreement about whether features detect a given property is that there's a variety of claims one might be making. It's pretty easy to show that, empirically, when curve detectors fire strongly the stimuli are reliably curves. But there are several other claims which might be more contentious:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 28
    }
  }, "Causality"), " Curve detectors genuinely detect a curve feature, rather than another feature correlated with curves. We believe our feature visualization and visualizing attribution experiments establish a causal link, since \u201Crunning it in reverse\" produces a curve. ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 28
    }
  }, "Generality:"), " Curve detectors respond to a wide variety of curve stimuli. They tolerate a wide range of radii and are more sensitive to orientation. They're largely invariant to cosmetic attributes like color, brightness, and texture.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 28
    }
  }, "Purity:"), " Curve detectors are not polysemantic and they have no meaningful secondary function. Images that cause curve detectors to activate weakly, such as edges or angles, are natural continuous extensions of curve detection.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 28
    }
  }, "Family:"), " Curve neurons collectively span all orientations of curves."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, "Feature Visualization"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://distill.pub/2017/feature-visualization/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 8
    }
  }, "Feature visualization"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "erhan2009visualizing,olah2017feature,simonyan2013deep,nguyen2015deep,mordvintsev2015inceptionism,nguyen2016plug",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 91
    }
  }), " uses optimization to find the input to a neural network that maximizes an objective. The objective we use most often is making a neuron fire as strongly as possible, but we'll also use other objectives in this article. One reason feature visualization is powerful is that it's causal. Since the input starts with random noise and optimizes over pixels rather than a generative prior, we can be confident that any property in the resulting image caused contributed to the objective."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curvesFeatureVis__WEBPACK_IMPORTED_MODULE_10__["default"], {
    mdxType: "CurvesFeatureVis",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, "Reading feature visualizations is a bit of a skill, and these images might feel disorienting if you haven't spent much time with them before. The most important thing to take away is the curve shape. You may also notice that there are bright, opposite hue colors on each side of the curve: this reflects a preference to see a chance in color at the boundary of the curve. Finally, if you look carefully, you will notice small lines perpendicular to the boundary of the curve. We call this weak preference for small perpendicular lines \u201Ccombing\" and will discuss it later. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 5
    }
  }, "Using feature visualization to make curve detectors fire as strongly as possible reliably creates images of curves, even when run with different seeds or a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://distill.pub/2017/feature-visualization/#diversity",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 168
    }
  }, "diversity term"), " that is optimized to create multiple images that differ from each other. This is evidence that curve detectors aren't polysemantic in the sense of equally preferring very different types of inputs."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, "Feature visualization shows us stimuli that maximally cause a neuron to fire, but are they representative of the neuron's general behavior? When we see a feature visualization, we often imagine that the neuron fires strongly for stimuli qualitatively similar to it, and gradually stops firing as the stimuli exhibit that property less. But one could also imagine cases where the neuron's behavior is completely different in the non-extreme activations, or cases where it does fire weakly for messy versions of the extreme stimulus, but also has a secondary class of stimulus to which it responds weakly."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 5
    }
  }, "If we want to understand how a neuron behaves in practice, there's no substitute to simply looking at how it actually responds to a natural distribution of stimuli."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, "Dataset Examples"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 5
    }
  }, "Our studies of the dataset will focus on ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 53
    }
  }), " because we will do some experiments that required non-trivial manual labor, but the core ideas apply to all curve detectors in 3b."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }, "A natural first question is to ask what the distribution of activations is like. How often does ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 108
    }
  }), " fire? When it fires, how often does it fire strongly? And when it doesn't fire, is it often strongly inhibited, or just on the verge of firing?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 5
    }
  }, "When analyzing ReLU networks, we often look at the distribution of pre-activation values in answering these questions. Since ReLU just truncates the left hand side, it's easy to reason about the post activation values, but it also makes it easy for us to understand how close the neuron is to firing in other cases.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 327
    }
  }, "Looking at pre-activation values also avoids the distribution having a dirac delta peak at zero."), " We find that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 470
    }
  }), " pre-activation distribution with a mean near -200. We also find that it fires in just 11% of cases across the dataset, since activations below 0 will be set to zero by the activation function."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }, "To better understand the distribution of activations, we find it helpful to look at a log plot of the probability. This reveals that in the activating regime, activations are distributed as an exponential distribution corresponding to a straight line in the plot.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 275
    }
  }, "The observation that neural network activations generally follow an exponential distribution was first made to us by Brice M\xE9nard, who observed it to be the case over all but the first layer of several networks. This is mildly surprising both because of how perfectly they seem to follow an exponential distribution, and also because one often expects linear combinations of random variables to form a Gaussian. "), " One consequence of this is that, since probability density decays at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-math", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 790
    }
  }, "e^{-x}"), " rather than ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-math", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 834
    }
  }, "e^{-x^2}"), " of a Gaussian, we should expect the distribution to have long tails."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_exponential__WEBPACK_IMPORTED_MODULE_15__["default"], {
    mdxType: "Exponential",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, "We can also view a quilt of images by activations by randomly sampling from grouped values of activations to get a qualitative sense of what kinds of images cause ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 175
    }
  }), " to activate different amounts. They follow a pattern. Images that cause the strongest activations all have curves that are similar to the neuron's feature visualization. Weakly activating images are imperfect curves ", "\u2014", " too flat, off-orientation, or off in another way. Activations near zero tend to be straight lines or images with no arcs, although some contain curves about 45 degrees off orientation. Finally, the images that cause the strongest negative activations have curves with an orientation more than 45 degrees away from the neuron's ideal curve."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_quilt__WEBPACK_IMPORTED_MODULE_16__["default"], {
    mdxType: "DatasetQuilt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, "Quilts of images are useful for seeing patterns across a wide range of activations, but they have the potential to be misleading. A neuron's activation to a receptive-field size crop gives us just a single number, and we could be misled by spurious correlations in the images. For instance, since many of the images that cause ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 339
    }
  }), " to fire most strongly are clocks, we may think the neuron detects clocks, rather than curves. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, "To see ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 19
    }
  }, "why"), " an image excites a neuron, we must understand the image's attribution to the neuron."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, "Visualizing Attribution"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, "Almost all the tools we use for studying neuron families, including feature visualization, can be used in context of a particular image using attribution. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, "There is a significant amount of work on how to do attribution in neural networks (eg. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "sundararajan2017axiomatic,selvaraju2016grad,kindermans2017patternnet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 99
    }
  }), "). These methods attempt to describe which inputs or previous neurons are responsible for the firing of later neurons. In the general case of complex nonlinear functions, there is a lot of disagreement about which attribution methods are principled and whether they are reliable ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "kindermans2017reliability,adebayo2018sanity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 481
    }
  }), ". But attribution is generally agreed on for the linear case, with most methods collapsing to the same answer. If we are considering a single neuron, it's pre-activation value is a linear function of neurons in the previous layer. The result is that a neuron in the previous layer influences a given neuron by its value times the weight between them. We call the tensor describing how all neurons in the previous layer influenced a given neuron the attribution tensor of that neuron."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5
    }
  }, "We normally apply feature visualization to create a stimulus that activates a single neuron, but we can also use it to activate any combination of neurons. By applying feature visualization to the attribution tensor, we can visualize which features at the previous layer caused a neuron to fire. We can further apply feature visualization to the absolute value of the attribution tensor, to see both features that caused the neuron to fire and also features that inhibited it. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, "Combining this together gives us ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 45
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 74
    }
  }, "FeatureVisualization"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 131
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 32
    }
  }, "abs"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 72
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 32
    }
  }, "W"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 64
    }
  }, "\u2299"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("msub", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 96
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "msub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 120
    }
  }, "h"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "msub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 152
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 176
    }
  }, "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 208
    }
  }, "r"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 240
    }
  }, "e"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 272
    }
  }, "v"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 318
    }
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 32
    }
  }), ")")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 39
    }
  }), "\\text{FeatureVisualization}(\\text{abs}(W \\odot h_{prev}))")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 123
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1em",
      "verticalAlign": "-0.25em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 25
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 18
    }
  }), "FeatureVisualization")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 58
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 30
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 18
    }
  }), "abs")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 41
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.13889em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 30
    }
  }), "W"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 25
    }
  }), "\u2299"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 30
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1.036108em",
      "verticalAlign": "-0.286108em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 25
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 18
    }
  }), "h"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "msupsub"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 22
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.15139200000000003em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 24
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-2.5500000000000003em",
      "marginLeft": "0em",
      "marginRight": "0.05em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 26
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "2.7em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 28
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 37
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 30
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 32
    }
  }), "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight",
    "style": {
      "marginRight": "0.02778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 46
    }
  }), "r"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 46
    }
  }), "e"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 46
    }
  }), "v"))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 74
    }
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 45
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.286108em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 24
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 26
    }
  })))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 92
    }
  }), ")"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 30
    }
  }), ")"))))), ", where ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 70
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 74
    }
  }, "W")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 113
    }
  }), "W")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 64
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.68333em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.13889em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }), "W"))))), " is the weights for a given neuron, and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 102
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("msub", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 74
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "msub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 98
    }
  }, "h"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "msub",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 130
    }
  }, "p")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 169
    }
  }, "r"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 201
    }
  }, "e"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 233
    }
  }, "v")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 272
    }
  }), "h_prev")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 69
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.980548em",
      "verticalAlign": "-0.286108em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 25
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 18
    }
  }), "h"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "msupsub"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 20
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 22
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.15139200000000003em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300,
      columnNumber: 24
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-2.5500000000000003em",
      "marginLeft": "0em",
      "marginRight": "0.05em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 26
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "2.7em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 28
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 37
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 30
    }
  }), "p")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 65
    }
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 45
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.286108em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324,
      columnNumber: 24
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 26
    }
  })))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.02778em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329,
      columnNumber: 92
    }
  }), "r"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 30
    }
  }), "e"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault",
    "style": {
      "marginRight": "0.03588em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 30
    }
  }), "v"))))), " is the activations of the previous hidden layer. In practice, we find it helpful to parameterize these attribution visualizations to be grayscale and transparent, making the visualization easier to read for non-experts ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "mordvintsev2018differentiable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 282
    }
  }), ". Example code can be found in the notebook."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_attributionSample__WEBPACK_IMPORTED_MODULE_17__["default"], {
    mdxType: "AttributionSample",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 5
    }
  }, "We can also use attribution to revisit the dataset examples we saw before in more depth, seeing why each image caused ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 130
    }
  }), " to fire. You can click the figure to toggle between seeing raw images and attribution vector feature visualizations."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_quilt__WEBPACK_IMPORTED_MODULE_16__["default"], {
    isAttrs: true,
    mdxType: "DatasetQuilt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 5
    }
  }, "Attribution is a powerful technique for studying circuits in the context of an image or set of images. While the above experiment visualizes every neuron in the previous layer, we could study an image in more depth, visualizing its activation and activation vector as it flows through the families into ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 315
    }
  }), ". Each activation vector would show us what a family saw in the image, and each attribution vector would show us how that family contributed to activating ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 530
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 5
    }
  }, "In the next section we'll look at a less sophisticated technique for extracting information from dataset images: blindfolding yourself from seeing neuron activations and classifying images by hand."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 5
    }
  }, "Comparison to Humans"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 5
    }
  }, "Nick Cammarata, an author of this paper, manually labelled over 800 images into four groups: curve, imperfect curve, unrelated image, or opposing curve. To construct the dataset he would label, we randomly sampled a fixed number of images from ImageNet's training grouped by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 287
    }
  }), "  activations in bins of 100", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 375
    }
  }, "The data in this paper is from our first sampling of images."), ". During the labeling process Nick could only see each image's pixels, and was blinded to the neuron's activation or attribution visualizations. He used the following rubric in assigning labels:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
      columnNumber: 28
    }
  }, "Curves"), ": Images are curves with a similar orientation to the neuron's feature visualization. The curve goes across most of the width of the image.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
      columnNumber: 28
    }
  }, "Imperfect Curve"), ": The curve has similarities to the neuron's feature visualization, but it is not quite right. Perhaps it is too flat, has an angle interrupting the arc, or the orientation is slightly off. ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 28
    }
  }, "Unrelated"), ": The image doesn't have a curve.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 7
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 9
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361,
      columnNumber: 28
    }
  }, "Opposing Curve"), ": The image contains curves but they are in a very different orientation than the neuron's feature visualization."))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 5
    }
  }, "After constructing this dataset of hand-labelled images, we compared the labels to the image's neuron activations."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_humanLabels__WEBPACK_IMPORTED_MODULE_18__["default"], {
    active: "stackData",
    yAxisProps: {
      label: "Proportion of Labels"
    },
    caption: "Conditional probability of each group by 3b:379 activation across our hand-labelled dataset of around 850 images.",
    data: __webpack_require__(/*! ./data/human-firstplot.json */ "./pages/data/human-firstplot.json"),
    mdxType: "HumanLabels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 5
    }
  }, "One interesting aspect of this chart is how clearly separated the groups are. Throughout labelling, Nick felt it was often difficult to place samples cleanly into groups, as many seemed to fall between the boundaries, and he began to believe the task has inherent noise. We were surprised when we saw that activations fell naturally into different levels of activation."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 5
    }
  }, "Still, there are many images that cause the neuron to activate but aren't classified as curves or imperfect curves. When we visualize attribution to ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370,
      columnNumber: 161
    }
  }), " we see that many of the images contain subtle curves. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_falsePositives__WEBPACK_IMPORTED_MODULE_19__["default"], {
    mdxType: "FalsePositives",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 5
    }
  }, "Nick found it hard to detect subtle curves across hundreds of curve images because he was aware of the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    target: "_blank",
    href: "https://en.wikipedia.org/wiki/Afterimage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 115
    }
  }, "Afterimage effect"), ".  that occurs when looking at one type of stimulus for too long. Visualizing attribution vectors reveals the curves the neuron sees in the image, and can even make it easier for us to see the curves ourselves when we may have originally missed it. In these cases ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 475
    }
  }), " is a superhuman curve detector."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 5
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374,
      columnNumber: 8
    }
  }, "How important are different points on the activation spectrum?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 5
    }
  }, "These charts are helpful for comparing our hand-labelled groups but they give an incomplete picture. While ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 119
    }
  }), " seems to be highly selective for curve stimuli when it fires strongly, these are only tiny fraction of cases where it fires. Most of the time, it doesn't fire at all, and when it does the most common case is for it to fire only very weakly."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 5
    }
  }, "To see this, we can look at the probability density over activation magnitudes from all ImageNet examples, split into the same per-activation-magnitude (x-axis) ratio of classes as our hand labelled dataset."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_humanLabels__WEBPACK_IMPORTED_MODULE_18__["default"], {
    active: "probability",
    probChart: true,
    yAxisProps: {
      label: "Probability Density"
    },
    caption: "While our hand-labelled dataset uniformly samples from activations, images of curves are rare within the dataset and 3b:379 activations follow an exponential distribution. In this plot we show 3b:379 activations split into the conditional probabilities of different groups at a given activation level within our hand-labelled dataset.",
    data: __webpack_require__(/*! ./data/human-probabilities.json */ "./pages/data/human-probabilities.json"),
    mdxType: "HumanLabels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380,
      columnNumber: 5
    }
  }, "From this perspective, we can't even see the cases where our neuron fires strongly! Probability density exponentially decays as we move right, and so achieving these activations is rare. To some extent, this is what we should expect if these units really are curve detectors: clear cut curves are a rare occurrence in images."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 5
    }
  }, "Perhaps more concerning is that, although curves are a small fraction of the cases where ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 101
    }
  }), " only weakly fired or didn't fire, it appears from this graph that the majority of stimuli classified as curves also fall in these cases, as a result of neurons firing strongly being many orders of magnitude rarer. This seems to be at least partly due to labeling error and the rarity of curves (see discussion later). But it makes things a bit hard to reason about. This is why we haven't provided a precision-recall curve: recall would be dominated by the cases where the neuron didn't fire strongly and be dominated by potential labeling error as a result."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 5
    }
  }, "It's not clear that probability density is really the right way to think about the behavior of a neuron. The vast majority of cases are cases where the neuron didn't fire: are those actually important to think about? And if a neuron frequently barely fires, how important is that for understanding the role of a neuron in the network?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 5
    }
  }, "An alternative measure for thinking about the importance of different parts of the activation spectrum is  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 119
    }
  }, "contribution to expected value"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 183
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 10
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 16
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 45
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 74
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 106
    }
  }, "\u2217"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 138
    }
  }, "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 170
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 32
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 64
    }
  }), ")")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395,
      columnNumber: 39
    }
  }), "x*p(x)")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397,
      columnNumber: 69
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.46528em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 25
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415,
      columnNumber: 25
    }
  }), "\u2217"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 30
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1em",
      "verticalAlign": "-0.25em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 16
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
      columnNumber: 25
    }
  }), "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 30
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 30
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 30
    }
  }), ")"))))), ". This measure can be thought of as giving an approximation at how much that activation value influences the output of the neuron, and by extension network behavior. There's still reason to think that high activation cases may be disproportionately important beyond this (for example, in max pooling only the highest value matters), but contribution to expected value seems like a reasonable estimate.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 463
    }
  }, "If one wanted to push further on exploring the importance of different parts of the activation spectrum, they might take some notion of attribution (methods for estimating the influence of one neuron on later neurons in a particular case) and estimate the contribution to the expected value of the attribution to the logit. A simple version of this would be to look at ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "className": "math math-inline"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 848
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 12
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-mathml"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 14
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("math", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "xmlns": "http://www.w3.org/1998/Math/MathML"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 444,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("semantics", {
    parentName: "math",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 18
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "semantics",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 47
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 76
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 108
    }
  }, "\u2217"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mfrac", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 140
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "mfrac",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 165
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 190
    }
  }, "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mtext", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 222
    }
  }, "logit")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mrow", {
    parentName: "mfrac",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 271
    }
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 296
    }
  }, "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 328
    }
  }, "x"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 375
    }
  }, "\u2217"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 407
    }
  }, "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446,
      columnNumber: 439
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mi", {
    parentName: "mrow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 34
    }
  }, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("mo", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "mrow"
  }, {
    "stretchy": "false"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448,
      columnNumber: 66
    }
  }), ")")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("annotation", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "semantics"
  }, {
    "encoding": "application/x-tex"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 41
    }
  }), "x*\\frac{d\\text{logit}}{dx}*p(x)")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "katex-html",
    "aria-hidden": "true"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 98
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 16
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "0.46528em",
      "verticalAlign": "0em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 27
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 465,
      columnNumber: 32
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 27
    }
  }), "\u2217"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472,
      columnNumber: 32
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1.277216em",
      "verticalAlign": "-0.345em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 27
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen nulldelimiter"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 20
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mfrac"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 489,
      columnNumber: 29
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-t vlist-t2"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 491,
      columnNumber: 22
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 24
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.9322159999999999em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 26
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-2.6550000000000002em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 500,
      columnNumber: 28
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 509,
      columnNumber: 39
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513,
      columnNumber: 34
    }
  }), "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 48
    }
  }), "x")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3.23em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 69
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "frac-line",
    "style": {
      "borderBottomWidth": "0.04em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 526,
      columnNumber: 39
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "style": {
      "top": "-3.446108em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 46
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "pstrut",
    "style": {
      "height": "3em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535,
      columnNumber: 30
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "sizing reset-size6 size3 mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 39
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 32
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 34
    }
  }), "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord text mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 546,
      columnNumber: 48
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mtight"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 36
    }
  }), "logit")))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-s"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 89
    }
  }), "\u200B")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist-r"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 47
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "vlist",
    "style": {
      "height": "0.345em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554,
      columnNumber: 26
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", {
    parentName: "span",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 28
    }
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose nulldelimiter"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 87
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561,
      columnNumber: 36
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mbin"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566,
      columnNumber: 27
    }
  }), "\u2217"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mspace",
    "style": {
      "marginRight": "0.2222222222222222em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568,
      columnNumber: 32
    }
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "base"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 573,
      columnNumber: 34
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "strut",
    "style": {
      "height": "1em",
      "verticalAlign": "-0.25em"
    }
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 575,
      columnNumber: 18
    }
  })), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 27
    }
  }), "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mopen"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 583,
      columnNumber: 32
    }
  }), "("), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mord mathdefault"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 32
    }
  }), "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "span"
  }, {
    "className": "mclose"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 32
    }
  }), ")"))))), "."), " "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_dataset_humanLabels__WEBPACK_IMPORTED_MODULE_18__["default"], {
    active: "expectedValue",
    yAxisProps: {
      label: "Contribution to Expected Value"
    },
    stackProps: {
      domain: {
        y: [0, 0.1]
      }
    },
    caption: "Contribution to the expected value of different activations, which shows how much each activation value influences the output of a neuron. Since curves are rare within the dataset, weak neuron activations contribute most to expected value..",
    data: __webpack_require__(/*! ./data/human-ev.json */ "./pages/data/human-ev.json"),
    mdxType: "HumanLabels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 5
    }
  }, "When we looked at probability density earlier, one might have been skeptical that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 597,
      columnNumber: 94
    }
  }), " was really a curve detector in a meaningful sense. Even if it's highly selective when it fires strongly, how can that be what matters when it isn't even visible on a probability density plot? Contribution to expected value shows us that even by a conservative measure, curves and imperfect curves form 55%. This seems consistent with the hypothesis that it really is a curve detector, and the other stimuli causing it to fire are labeling errors or noise."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 5
    }
  }, "Our experiments studying the dataset so far has shown us that ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 598,
      columnNumber: 74
    }
  }), " activations seem to correspond roughly to a human labelled judgement of whether images contain curves. Additionally, visualizing the attribution vector of these images tells us that the reason these images fire is because of the curves in the images, and we're not being fooled by spurious correlations. But these experiments are not enough to defend the claim that curve neurons detect images of curves. Since images of curves appear infrequently in the dataset, using it to systematically study curve images is difficult. Our next few experiments will focus on this directly, studying how curve neurons respond to the space of reasonable curve images."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 5
    }
  }, "Joint Tuning Curves"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 5
    }
  }, "Our first two experiments suggest that each curve detector responds to curves at a different orientation. Our next experiment will help verify that they really do detect rotated versions of the same feature, and characterize how sensitive each unit is to changes in orientation."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 5
    }
  }, "We do this by creating a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 37
    }
  }, "joint tuning curve"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 91
    }
  }, "In neuroscience, tuning curves \u2014 graphs of neural response to a continuous stimulus parameter \u2014 came to prominence in the early days of vision research. Observation of receptive fields and orientation-specific responses in neurons gave rise to some of the earliest theories about how low-level visual features might combine to create higher-level representations. Since then they have been a mainstay technique in the field."), " of how all curve detectors respond if we rotate natural dataset examples that caused a particular curve detector to fire."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602,
      columnNumber: 5
    }
  }, "Each neuron has a gaussian-like bump surrounding it's preferred orientation, and as\neach one stops firing another starts fire, jointly spanning all orientations of curves."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_tuning__WEBPACK_IMPORTED_MODULE_20__["default"], {
    mdxType: "Tuning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 605,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 606,
      columnNumber: 5
    }
  }, "While tuning curves are useful for measuring neuron activations across perturbations in natural images, we're limited by the kinds of perturbations we can do on these images. In our next experiment we'll get access to a larger range of perturbations by synthesizing stimuli from scratch."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 607,
      columnNumber: 5
    }
  }, "Synthetic Curves"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 5
    }
  }, "While the dataset gives us almost every imaginable curve, they don't come labelled with data such as orientation or radius, making it hard to answer questions that require systematically measuring responses to visual properties. How sensitive are curve detectors to curvature? What orientations do they respond to? Does it matter what colors are involved? One way to get more insight into these questions is to draw our own curves. Using synthetic stimuli like this is a common method in visual neuroscience, and we've found it to also be very helpful in the study of artificial neural networks. The experiments in this section are specifically inspired by similar experiments probing for curve detecting biological neurons ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "pasupathy1999responses,Jiang808907",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608,
      columnNumber: 736
    }
  }), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 5
    }
  }, "Since dataset examples suggest curve detectors are most sensitive to orientation and curvature, we'll use them as parameters in our curve renderer. We then see how much each stimuli causes a given neuron, such as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed3b",
    neuron: 379,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 609,
      columnNumber: 225
    }
  }), ", to fire. We find it helpful to present this as a heatmap, in order to get a higher resolution perspective on what causes the neuron to fire."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_synthetic_intro__WEBPACK_IMPORTED_MODULE_21__["default"], {
    mdxType: "SyntheticIntro",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 611,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 5
    }
  }, "We find that simple drawings can be extraordinarily exciting. The curve images that cause the strongest excitations \u2014 up to 24 standard deviations above the average dataset activation! \u2014 have similar orientation and curvature to the neuron's feature visualization."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_synthetic_main__WEBPACK_IMPORTED_MODULE_22__["default"], {
    mdxType: "SyntheticMain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 5
    }
  }, "Why do we see wispy triangles?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 616,
      columnNumber: 5
    }
  }, "The triangular geometry shows that curve detectors respond to a wider range of orientations in curves with higher curvature. This is because curves with more curvature contain more orientations. Consider that a line contains no curve orientations while a circle contains every curve orientation. Since the synthetic images closer to the top are closer to lines, their activations are more narrow."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 5
    }
  }, "The wisps show that tiny changes in orientation or curvature can cause dramatic changes in activations, which means that curve detectors are fragile and non-robust. Sadly, this is a more general problem across neuron families, and we see it as early as the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://distill.pub/2020/circuits/early-vision/#group_conv2d1_complex_gabor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 269
    }
  }, "Complex Gabor family"), " in the second layer (", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://microscope.openai.com/models/inceptionv1/conv2d1_0",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617,
      columnNumber: 409
    }
  }, "conv2d1"), ")."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 618,
      columnNumber: 5
    }
  }, "Varying curves along just two variables reveals barely-perceptible perturbations that sway activations several standard deviations. This suggests that the higher dimensional pixel-space contains more pernicious exploits. We're excited about the research direction of carefully studying neuron-specific adversarial attacks. It's tractible to follow the whole circuit leading from the input of a neural network to any neuron in early vision, and this could be made simpler by extracting the important parts of a circuit and studying it in isolation. Perhaps this simplified environment could give us clues into how to defend neurons and one day whole models against adversarial attacks."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 5
    }
  }, "In addition to testing orientation and curvature, we can also test other properties like fill and color. Dataset analyses hints that curve detectors are invariant to cosmetic properties like lighting and color, and we can confirm this with synthetic stimuli. We can also look at pre-ReLU activations, which shows that curve detectors are generally inhibited by curves that don't excite them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_synthetic_cosmetic__WEBPACK_IMPORTED_MODULE_23__["default"], {
    mdxType: "SyntheticCosmetic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622,
      columnNumber: 5
    }
  }, "Synthetic Angles"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 5
    }
  }, "Both our synthetic curve experiments and dataset analysis show that although curves are sensitive to orientation, they have a wide tolerance for the radius of curves. At the extreme, curve neurons partially respond to edges in a narrow band of orientations, which can be seen as a curve with infinite radius. This may cause us to think curve neurons actually respond to shape orientation, rather than curves specifically. While we cannot systematically render all possible shapes to understand this fully, we think angles are a good test case for studying this hypothesis."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624,
      columnNumber: 5
    }
  }, "In the following experiment we vary synthetic angles similarly to our synthetic curves, with radius on the y axis and orientation across the x axis."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_synthetic_angle_angle1__WEBPACK_IMPORTED_MODULE_24__["default"], {
    mdxType: "Angle1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 626,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 627,
      columnNumber: 5
    }
  }, "The activations form two distinct lines with the strongest activations where they touch. The place where the two lines touch is where the angle is most similar to a curve with an orientation that matches the neuron's feature visualization. Each of the lines in the activations are places where one of the two lines in the angle align with the tangent of the curve. The weaker activations on the right side of the activations have the same cause, but with the inhibitory half of the angle stimulus facing outwards instead of inwards. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_synthetic_angle_angleZoomIn__WEBPACK_IMPORTED_MODULE_25__["default"], {
    mdxType: "AngleZoomIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 629,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630,
      columnNumber: 5
    }
  }, "The first stimulus we tested was curves and the second was angles. In the next example we visualize the intermediary states connecting these stimuli, starting with angles, then angles with beveled corners, and ending with the first curve stimulus we tested. Each column's strongest activation is stronger than the column before it, reflecting that rounder stimuli cause stronger activations. Additionally, each \u201Ctriangle\" becomes more filled as the two lines forming the original angle transitions into a single arc."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_synthetic_angle_toCurves__WEBPACK_IMPORTED_MODULE_26__["default"], {
    mdxType: "ToCurves",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 5
    }
  }, "Seeing how curve detectors respond to synthetic stimuli is useful but the interface we've been using is bulky. For our experiments later comparing curve families across models, and in the third part of the curve series, across models, we'll need a more compact view of activations. For this, we will use a ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 318
    }
  }, "radial tuning curve"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 5
    }
  }, "Radial Tuning Curve"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_radial__WEBPACK_IMPORTED_MODULE_27__["default"], {
    data: __webpack_require__(/*! ./data/curves-mixed3b.json */ "./pages/data/curves-mixed3b.json"),
    mdxType: "Radial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 637,
      columnNumber: 5
    }
  }, "The Curve Families of InceptionV1"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 638,
      columnNumber: 5
    }
  }, "So far we've been looking at a set of curve neurons in 3b. But InceptionV1 actually contains curve neurons in four contiguous layers, with 3b being the third of these layers."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveFamilies_model__WEBPACK_IMPORTED_MODULE_28__["default"], {
    mdxType: "FamiliesModel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mdxType: "H3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 5
    }
  }, "conv2d2"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 5
    }
  }, "\u201Cconv2d2\", which we sometimes shorten to \"2\", is the third convolutional layer in InceptionV1. It contains two types of curve detectors: concentric curves and combed edges."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 643,
      columnNumber: 5
    }
  }, "Concentric curves are small curve detectors that have a preference for seeing multiple curves at the same orientation but of increasing radii. This feature may have an important role in the development of curve detectors in 3a and 3b that are tolerant of a wide range of radii."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", {
    width: 703,
    style: {
      transform: "translateX(-7px)",
      marginTop: 5,
      marginBottom: 20
    },
    src: "https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fnick-personal%2F1XjsJAYh6F.png?alt=media&token=5b85d1d5-2692-49c9-8976-31dd4f3b1d6b",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 644,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 5
    }
  }, "Combed edges detect several lines protruding perpendicularly from a larger line. These protruding lines also detect curves, making them a type of curve detector. These neurons are used to construct later curve detectors and play a part in the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#combing-effect"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649,
      columnNumber: 255
    }
  }), "combing effect"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 5
    }
  }, "Looking at conv2d2 activations we see that curves respond to one contiguous range like the ones we've been studying, but they also respond to another range 180 degrees away more weakly. We call this secondary firing ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 652,
      columnNumber: 228
    }
  }, "echoes"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveFamilies_radialLayer__WEBPACK_IMPORTED_MODULE_29__["default"], {
    data: __webpack_require__(/*! ./data/curves-conv2d2.json */ "./pages/data/curves-conv2d2.json"),
    mdxType: "RadialLayer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mdxType: "H3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655,
      columnNumber: 5
    }
  }, "3a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656,
      columnNumber: 5
    }
  }, "By 3a non-concentric curve detectors have formed. In many ways they resemble the curve detectors in 3b, and in the next article we'll see how they're used to build them. One difference is that the 3a curves have echoes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveFamilies_radialLayer__WEBPACK_IMPORTED_MODULE_29__["default"], {
    data: __webpack_require__(/*! ./data/curves-mixed3a.json */ "./pages/data/curves-mixed3a.json"),
    mdxType: "RadialLayer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 657,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mdxType: "H3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658,
      columnNumber: 5
    }
  }, "3b"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 659,
      columnNumber: 5
    }
  }, "These are the curve detectors we've been focusing on in this article. They have clean activations with no echoes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 5
    }
  }, "You may notice that there are two large angular gaps at the top of the radial tuning curve for 3b, and smaller ones at the bottom. Why is that? One factor is that the model also has what we call ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://distill.pub/2020/circuits/early-vision/#group_mixed3b_double_curves",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660,
      columnNumber: 207
    }
  }, "double curve detectors"), " which respond to curves in two different orientations and help fill in the gaps."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveFamilies_radialLayer__WEBPACK_IMPORTED_MODULE_29__["default"], {
    data: __webpack_require__(/*! ./data/curves-mixed3b.json */ "./pages/data/curves-mixed3b.json"),
    mdxType: "RadialLayer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mdxType: "H3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662,
      columnNumber: 5
    }
  }, "4a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 5
    }
  }, "Layer 4a is where the network constructs many complex shapes such as spirals and boundary detectors, and it is also the first layer to construct 3d geometry. It has several curve detectors, but we believe they are better thought of as corresponding to specific worldly objects rather than abstract shapes. Many of these curves are found in 4a's ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://microscope.openai.com/models/inceptionv1/mixed4a_5x5_0"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 663,
      columnNumber: 357
    }
  }), "5x5 branch"), ", which seems to specialize in 3d geometry."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 5
    }
  }, "For instance, ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed4a",
    neuron: 406,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666,
      columnNumber: 26
    }
  }), " appears to be a upwards facing curve detector with confusing secondary behavior at two other angles. But dataset examples reveal its secret: it's detecting the tops of cups and pans viewed from an angle. In this sense, it is better viewed as a tilted 3d circle detector."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveFamilies_4a406__WEBPACK_IMPORTED_MODULE_30__["default"], {
    mdxType: "Highlight4a406",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 668,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 5
    }
  }, "We think ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_neuron__WEBPACK_IMPORTED_MODULE_4__["default"], {
    layer: "mixed4a",
    neuron: 406,
    mdxType: "Neuron",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 21
    }
  }), " is a good example of the subjective nature of neural network interpretability. We usually think of abstract concepts like curves and worldly objects like coffee cups as belonging as different categories of things \u2014 and for most of the network they are. But there's a transition period where we have to make a judgement call, and 4a is that transition."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveFamilies_radialLayer__WEBPACK_IMPORTED_MODULE_29__["default"], {
    data: __webpack_require__(/*! ./data/curves-mixed4a.json */ "./pages/data/curves-mixed4a.json"),
    mdxType: "RadialLayer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 670,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671,
      columnNumber: 5
    }
  }, "Repurposing Curve Detectors"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672,
      columnNumber: 5
    }
  }, "We started studying curve neurons to better understand neural networks, not because we were intrinsically interested in curves. But during our investigation we became aware that curve detection is important for fields like aerial imaging, self-driving cars, and medical research, and there's a breadth of literature from classical computer vision on curve detection in each domain. We've prototyped a technique that leverages the curve neuron family to do a couple different curve related computer vision tasks."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 5
    }
  }, "One task is curve extraction ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "raghupathy2004curve",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 673,
      columnNumber: 41
    }
  }), " , the task of  highlighting the pixels of the image that are part of curves. Visualizing attribution to curve neurons, as we've been doing in this article, can be seen as a form of curve extraction. Here we compare it to the commonly used Canny edge detection algorithm on an x-ray of blood vessels known as an angiogram. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveAnalysis_extraction__WEBPACK_IMPORTED_MODULE_31__["default"], {
    mdxType: "Extraction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 5
    }
  }, "The attribution visualization clearly separates and illuminates the lines and curves, and displays less visual artifacts. However, it displays a strong ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "#combing-effect"
  }, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 676,
      columnNumber: 164
    }
  }), "combing effect"), " ", "\u2014", " unwanted perpendicular lines emanating from the edge being traced. We're unsure how harmful these lines are in practice, but we think it's possible to remove them by editing the circuits of curve neurons."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 679,
      columnNumber: 5
    }
  }, "We don't think we've created the new leading curve tracing technique. Indeed, our goal is not to do  a detailed comparison between attribution visualization and state of the art curve extraction techniques ", "\u2014", " we believe it's likely that classical algorithms tuned for precisely this goal outperform this approach. Instead, our goal here is to explore how leveraging internal neural network representations opens up a vast space of visual operations, of which curve extraction is just one point."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mdxType: "H3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 680,
      columnNumber: 5
    }
  }, "Spline Parameterization"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 5
    }
  }, "We can access more parts of this space by changing what we optimize. So far we've been optimizing pixels, but we can also create a differentiable parameterization ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "mordvintsev2018differentiable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 175
    }
  }), " that renders curves, similar to explorations by ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "synthetic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 288
    }
  }), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "nakano2019neural",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 681,
      columnNumber: 337
    }
  }), ". By backpropagating from the attribution through the input into spline knots, we can now trace curves ", "\u2014", " obtaining the equations of the best fitting spline equations that describe the curves in the image. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveAnalysis_diffParam__WEBPACK_IMPORTED_MODULE_32__["default"], {
    mdxType: "DiffParams",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 683,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 5
    }
  }, "We created an early prototype of this approach. Since curve neurons work in a variety of settings", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 684,
      columnNumber: 109
    }
  }, "As we explored in the article, curve neurons are robust to cosmetic properties like brightness and texture."), ", our spline parameterization does too."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveAnalysis_tracing__WEBPACK_IMPORTED_MODULE_33__["default"], {
    mdxType: "Tracing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    mdxType: "H3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 687,
      columnNumber: 5
    }
  }, "Algorithmic Composition"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 5
    }
  }, "One seemingly unrelated visual operation is image segmentation. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "synthetic",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 76
    }
  }), " and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "Olah2018building",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 688,
      columnNumber: 125
    }
  }), " demonstrates how this can be done in an unsupervised way with non-negative matrix factorization (NMF). We can compose this factorization with the spline parameterization to trace the curves of different objects in the image."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveAnalysis_butterfly__WEBPACK_IMPORTED_MODULE_34__["default"], {
    mdxType: "Butterfly",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 690,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 691,
      columnNumber: 5
    }
  }, "Instead of factoring the activations of a single image, we can jointly factorize lots of butterflies to find the neurons in the network that respond to butterflies in general. One big difference between factoring activations and normal image segmentation is that we get groups of neurons rather than pixels. By composing these neurons with a differentiable spline parameterization we get a single optimization we can apply to any image that automatically finds butterflies and gives us equations to splines that fit them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_curveAnalysis_butterflyQuilt__WEBPACK_IMPORTED_MODULE_35__["default"], {
    mdxType: "ButterflyQuilt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 694,
      columnNumber: 5
    }
  }, "In this above example we manipulated butterflies and curves without having to worry about the details of either. We delegated the intricacies of recognizing butterflies of many species and orientations to the neurons, letting us work with the abstract concept of butterflies. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 695,
      columnNumber: 5
    }
  }, "We think this is one exciting way to fuse classical computer vision with deep learning. There is plenty of low hanging fruit in extending the technique shown above, as our spline parameterization is just an early prototype and using a neural network that's half a decade old. However, we're more excited by investigations of how users can explore the space between tasks than improvements in any particular task. Once a task is set in stone, training a neural network for exactly that job will likely give the best results. But real world tasks are rarely specified with precision, and the harder challenge is to explore the space of tasks to find which to commit to."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 5
    }
  }, "For instance, a more developed version of our algorithm that automatically finds the splines of butterflies in an image could be used as a basis for turning video footage of butterflies into an animation", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-footnote", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 696,
      columnNumber: 215
    }
  }, "Using a shared parameterization to maintain consistency between frames"), ". But the animator may wish to add texture neurons and change to a soft brush parameterization to add a rotoscoping style to their animation. Since they have full access to every neuron, they may be able to manipulate attribution to fur neuron families and specific dog breeds, changing how fur is rendered on specific species of dogs across the entire movie. Since none of these algorithms require retraining a neural network or any training data, the animator could explore this space of algorithms in nearly real time, which is important because tight feedback loops can be crucial in unlocking creative potential."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 697,
      columnNumber: 5
    }
  }, "The Combing Phenomenon"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 698,
      columnNumber: 5
    }
  }, "One curious aspect of curve detectors is that they seem to be excited by small lines perpendicular to the curve, both inwards and outwards. You can see this most easily by inspecting feature visualizations. We call this phenomenon \"combing.\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 5
    }
  }, "Combing seems to occur across curve detectors from many models, including models trained on Places365 instead of ImageNet. In fact, there's some weak evidence it occurs in biological neural networks as well: a team that ran a process similar to feature visualization on a biological neuron in a Macaque monkey's V4 region of the visual cortex found a circular shape with outwardly protruding lines to be one of the highest activating stimuli", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "tang2018complex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 699,
      columnNumber: 453
    }
  }), " , Supplementary Figure A & F."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_combing__WEBPACK_IMPORTED_MODULE_36__["default"], {
    mdxType: "CombingEffect",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 701,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 702,
      columnNumber: 5
    }
  }, "A number of potential explanations for combing have been proposed, with no clear forerunner."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 703,
      columnNumber: 5
    }
  }, "One hypothesis is that many important curves in the modern world have perpendicular lines, such as the spokes of a wheel or the markings on the rim of a clock."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_combing_dataset__WEBPACK_IMPORTED_MODULE_37__["default"], {
    data: __webpack_require__(/*! ./data/angle-attribution.json */ "./pages/data/angle-attribution.json"),
    mdxType: "CombingDataset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 705,
      columnNumber: 5
    }
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 706,
      columnNumber: 5
    }
  }, "A related hypothesis that combing might allow curve detectors to be used for fur detection in some contexts.\nAnother hypothesis is that a curve has higher \"contrast\" it exists despite perpendicular lines running towards it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 5
    }
  }, "Finally, it's been suggested that combing is really a result of a convenient way to implement curve detectors ", "\u2014", " a side effect of a convenient shortcut in creating a circuit rather than being a useful feature intrinsically. We know that in the second conv layer, edge detectors are inhibited by perpendicular lines. We also think that an important part of creating true line or curve detectors is making features that prefer a single strong line to a repeating texture, and that seems to be done by weakly inhibiting in response to parallel lines beside the primary edge. Being excited by a perpendicular line may be an easy way to implement a \"inhibit an excitatory neuron\" pattern which allows for capped inhibition, without creating dedicated neurons at the previous layer. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 5
    }
  }, "Combing is not unique to curves. We also observe it in edges, and basically any shape feature like curves that is derivative of edges. A lot more work could be done exploring the combing phenomenon. Why does combing form? Does it persist in adversarially robust models? Is it an example of what Ilyas et al ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("d-cite", {
    "bibtex-key": "ilyas2019adversarial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 709,
      columnNumber: 319
    }
  }), " call a \"non-robust feature\"? "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_h2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mdxType: "H2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 5
    }
  }, "Conclusion"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 711,
      columnNumber: 5
    }
  }, "Compared to fields like neuroscience, artificial neural networks make careful investigation easy. We can read and write to every weight in the neural network, use gradients to optimize stimuli, and analyze billions of realistic activations across a dataset. Composing these tools lets us run a wide range of experiments that show us different perspectives on a neuron. If every perspective shows the same story, it's unlikely we're missing something big. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 712,
      columnNumber: 5
    }
  }, "Given this, it may seem odd to invest so much energy into just a handful of neurons. We agree. We first estimated it would take a week to understand the curve family. Instead, we spent months exploring the fractal of beauty and structure we found."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 713,
      columnNumber: 5
    }
  }, "Many paths led to new techniques for studying neurons in general, like synthetic stimuli or using circuit editing to ablate neurons behavior. Others are only relevant for some families, such as the equivariance motif or our hand-trained \u201Cartificial artificial neural network\" that reimplements curve detectors. A couple were curve-specific, like exploring curve detectors as a type of finding a new class of curve analysis algorithms."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 714,
      columnNumber: 5
    }
  }, "It may seem concerning that it took so much effort to understand\nIf our broader goal is fully reverse-engineer neural networks it may seem concerning that studying just one family took so much effort. However, from our experience studying neuron families at a variety of depths, we've found that it's easy to understand the basics of a neuron family. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "https://microscope.openai.com/models",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 715,
      columnNumber: 289
    }
  }, "OpenAI Microscope"), " can show you feature visualization, dataset examples, and soon weights in just a few seconds, and as we'll discuss in this article, these are collectively strong evidence of what a neuron does. In fact, we understood the basics of curves at our first glance at them. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 716,
      columnNumber: 5
    }
  }, "At the same time, researchers engaging in closer inquiry of neuron families will be rewarded with deeper beauty. We never found an end to the fractal of studying the curve family. We didn't fuse classical curve analysis with deep learning or extract the curve circuit as a microcosm for understanding adversarial attacks, for example. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 717,
      columnNumber: 5
    }
  }, "When we started, we were nervous that 10 neurons was too narrow a topic for a paper, but now we realize a complete investigation would take a book."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(components_prevNext__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mdxType: "PrevNext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 718,
      columnNumber: 5
    }
  }));
}
;
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=index.js.788ffe2d8afe7336a5b4.hot-update.js.map