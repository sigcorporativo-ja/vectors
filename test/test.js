import Vectors from 'facade/vectors';

const map = M.map({
  container: 'mapjs',
  center: {
    x: 360020,
    y: 4149045,
  },
  zoom: 5,
});

const mp = new Vectors({
  collapsed: true,
  collapsible: true,
  position: 'TR',
});


map.addPlugin(mp);
window.map = map;
