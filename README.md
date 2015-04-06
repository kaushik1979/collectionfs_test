# CollectionFS test project using 

- iron router
- publish-subscribe model

## Issue under consideration - template is rendered with images before publisher publishes the images. This results in the following exception - 

```
Exception in queued task: Error: Can't call non-function: undefined
    at Spacebars.call (http://localhost:5000/packages/spacebars.js?7bafbe05ec09b6bbb6a3b276537e4995ab298a2f:175:13)
    at Spacebars.mustacheImpl (http://localhost:5000/packages/spacebars.js?7bafbe05ec09b6bbb6a3b276537e4995ab298a2f:109:25)
    at Object.Spacebars.mustache (http://localhost:5000/packages/spacebars.js?7bafbe05ec09b6bbb6a3b276537e4995ab298a2f:113:39)
    at Template.images.HTML.UL.Blaze.Each.HTML.LI.HTML.IMG.src (http://localhost:5000/client/views/template.collectionfs.js?c7a5416c84b877aa789670160f1dc9d3ae665129:10:26)
    at Object.Blaze._withCurrentView (http://localhost:5000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2197:12)
    at Blaze._HTMLJSExpander.def.visitAttribute (http://localhost:5000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2125:21)
    at HTML.TransformingVisitor.def.visitAttributes (http://localhost:5000/packages/htmljs.js?567eb96d5d22631c03d6aca6afa4c42f0d1295f2:228:44)
    at Blaze._HTMLJSExpander.def.visitAttributes (http://localhost:5000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2119:63)
    at Object.Blaze._expandAttributes (http://localhost:5000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:2148:32)
    at updateAttributes (http://localhost:5000/packages/blaze.js?a5c324925e5f6e800a4c618d71caf2848b53bf51:1520:33)
```