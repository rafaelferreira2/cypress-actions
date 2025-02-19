const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI0YjMxZWQzLWNhZjYtNGJiMC05YTFkLWI2ODc2ZDY2MzYwNC0xNzM5OTk4NDE3NzQzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZTVjYmU1MTAtNjMwMS00M2VmLWIxMzItZWRkYzdhMTdiOTc5IiwidHlwZSI6InQifQ.DCNr4lnsVAvYIngSvQf-5qi2x4gWp_nR9ivaZh2NXZE'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
