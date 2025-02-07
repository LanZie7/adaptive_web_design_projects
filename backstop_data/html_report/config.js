report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "..\\..\\test-example\\reference\\header-desktop.png",
        "test": "..\\bitmaps_test\\20240320-160024\\header-desktop.png",
        "selector": "[data-test=\"header\"]",
        "fileName": "header-desktop.png",
        "label": "header",
        "requireSameDimensions": true,
        "misMatchThreshold": 5,
        "url": "file://C:\\dev-projects\\project\\task-example\\index.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 1.319246597024375,
          "misMatchPercentage": "1.32",
          "analysisTime": 34
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\..\\test-example\\reference\\main-desktop.png",
        "test": "..\\bitmaps_test\\20240320-160024\\main-desktop.png",
        "selector": "[data-test=\"main\"]",
        "fileName": "main-desktop.png",
        "label": "main",
        "requireSameDimensions": true,
        "misMatchThreshold": 5,
        "url": "file://C:\\dev-projects\\project\\task-example\\index.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.16424856282507527,
          "misMatchPercentage": "0.16",
          "analysisTime": 45
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "..\\..\\test-example\\reference\\footer-desktop.png",
        "test": "..\\bitmaps_test\\20240320-160024\\footer-desktop.png",
        "selector": "[data-test=\"footer\"]",
        "fileName": "footer-desktop.png",
        "label": "footer",
        "requireSameDimensions": true,
        "misMatchThreshold": 5,
        "url": "file://C:\\dev-projects\\project\\task-example\\index.html",
        "expect": 0,
        "viewportLabel": "desktop",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.9039750957854407,
          "misMatchPercentage": "0.90",
          "analysisTime": 34
        }
      },
      "status": "pass"
    }
  ]
});