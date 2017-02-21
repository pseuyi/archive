import React, {Component} from 'react'

// import * from 'pdfjs-dist'
// import fs from 'fs'
// var data = new Uint8Array(fs.readFileSync('helloworld.pdf'));
// PDFJS.getDocument(data).then(function (pdfDocument) {
//   console.log('Number of pages: ' + pdfDocument.numPages);
// });

export default class extends Component {
  render () {
    return (
      <div>
        <iframe src="https://drive.google.com/file/d/0B68CVIS6IOsdejFGS0h1MlduMmc/preview" width="100%" height="800" frameBorder="0"></iframe>
      </div>
    )
  }
}
