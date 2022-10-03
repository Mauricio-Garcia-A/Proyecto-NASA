import { Clock } from 'three';
import { camera } from '$three/camera';
import { renderer } from '$three/renderer';
import { scene } from '$three/scene';
import { cameraControls, ControlManager, initControls } from '$three/controls';
import { addLights } from '$three/light';
import { createBody } from '$three/mainbody';
import { MOON_UNIT_RADIUS } from '$three/moon';
let sun;
function createSun(onComplete) {
    return createBody(renderer, scene, camera, MOON_UNIT_RADIUS, 1, 1, 'sun_8k.jpg', onComplete);
}
let clock;
let controlManager;
export function init(container, onComplete) {
    sun = createSun(onComplete);
    container.appendChild(renderer.domElement);
    initControls(camera, renderer.domElement);
    addLights(scene);
    clock = new Clock();
    controlManager = new ControlManager(cameraControls);
}
export function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    cameraControls.update(delta);
    renderer.render(scene, camera);
}
export function onWindowResize() {
    // camera adaptation
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // renderer adaptation
    renderer.setSize(window.innerWidth, window.innerHeight);
}
//# sourceMappingURL=setup.js.map