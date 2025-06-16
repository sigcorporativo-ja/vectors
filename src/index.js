import M$plugin$Vectors from './/facade/js/vectors';
import M$control$VectorsControl from './/facade/js/vectorscontrol';
import M$impl$control$VectorsControl from './/impl/ol/js/vectorscontrol';

if (!window.M.plugin) window.M.plugin = {};
if (!window.M.control) window.M.control = {};
if (!window.M.impl) window.M.impl = {};
if (!window.M.impl.control) window.M.impl.control = {};
window.M.plugin.Vectors = M$plugin$Vectors;
window.M.control.VectorsControl = M$control$VectorsControl;
window.M.impl.control.VectorsControl = M$impl$control$VectorsControl;
