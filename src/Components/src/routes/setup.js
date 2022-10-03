import { Clock } from 'three';
import { camera } from '../lib/three/camera';
import { renderer } from '../lib/three/renderer';
import { scene } from '../lib/three/scene';
import { createMoon, createMoonEdges } from '../lib/three/moon';
import { earth } from '../lib/three/celestialbodys/earth';
import { sun } from '../lib/three/celestialbodys/sun';
import { cameraControls, ControlManager, initControls } from '../lib/three/controls';
import { addLights, toNormalMode, toSimulationMode } from '../lib/three/light';
import { QuakesManager } from '../lib/three/quakes/quakesManager';
import { TimeLine } from '../lib/three/timeline';
import { RaycasterManager } from '../lib/three/labels/raycaster';
import { getNormalizedData } from '../lib/utils/normalizeQuakeSample';
import realSample from "../lib/real-sample.json";
let moon;
const moonEdges = createMoonEdges();
scene.add(moonEdges);
scene.add(earth);
scene.add(sun);
export let quakesManager;
export let clock;
export let timeline;
export let controlManager;
export let raycasterManager;
export function animate() {
    requestAnimationFrame(animate);
    quakesManager.update();
    controlManager.update();
    const delta = clock.getDelta();
    cameraControls.update(delta);
    // timeline.update(delta);
    raycasterManager.update(camera);
    renderer.render(scene, camera);
}
export function onWindowResize() {
    // camera adaptation
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // renderer adaptation
    renderer.setSize(window.innerWidth, window.innerHeight);
}
export function init(container, onComplete) {
    moon = createMoon(renderer, scene, camera, onComplete);
    container.appendChild(renderer.domElement);
    initControls(camera, renderer.domElement);
    addLights(scene);
    clock = new Clock();
    raycasterManager = new RaycasterManager(scene, renderer.domElement);
    quakesManager = new QuakesManager(scene, raycasterManager, getNormalizedData(realSample));
    timeline = new TimeLine(2, Infinity);
    timeline.subscribe(quakesManager.showNextQuake.bind(quakesManager));
    controlManager = new ControlManager(cameraControls);
}
export function toggleExternalBodys(enable) {
    if (enable) {
        toSimulationMode();
        earth.visible = true;
        sun.visible = true;
    }
    else {
        toNormalMode();
        earth.visible = false;
        sun.visible = false;
    }
}
export function toggleAllQuakes() {
    quakesManager.toggleQuakesVisualization();
}
//# sourceMappingURL=setup.js.map