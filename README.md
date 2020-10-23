# How to update

1. Make any changes locally (test with npm run start) and then push those changes to the 'dev' branch
2. npm run deploy - builds website within the 'master' branch

## Home

./src/Components/AboutMe/...

AMPhoto.js
- update imageSource link
- add new image to ./public/img/

AMText.js
- update text and text2 variables

## Papers

./src/Components/Publications/Papers.json
- To add a new paper, make sure all required dictionary keys are present

## Research

./src/Components/Research/
- Modify text in ResBehaviour.js or ResBrain.js
- For a new image, update the imageSource link in the same file

## CV

- replace pdf in ./public/files/, making sure the name stays the same
