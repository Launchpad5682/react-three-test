### Dependencies: 
- @react-three/drei
- @react-three/fibre
- react-loader--spinner

### Build process for GLTF2JSX: 
- Download any GLTF in modelling directory which will be kept on the backend servers.
- Convert the gltf to glb with some draco compressions using ```npx gltf-pipeline -i model.gltf -o model.glb --draco.compressionLevel=7```
- Create JSX file from GLB file as it is easy to process and handle in the front-end. ```npx gltfjsx model.glb```
- Copy the glb file to the public folder or attach some reference for the model.
- Send the JSX file to the front-end and then react-three-fibre will handle everything.

### Notes on rendering the model in the front-end
- Use 0,0,0 as the position of the model and scale to the fit the model in the device view.

### How to use ? 
- Drag the model and it'll around the axis.
- Zoom in and out of the model using scroll on mouse or double finger gesture on track pad.

### Deployment in Netlify
* Build step ```CI==false npm run build```