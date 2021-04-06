(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),l=(a(0),a(91)),b={id:"chart-interface",title:"Chart interface",sidebar_label:"Chart interface",slug:"/chart-interface"},i={unversionedId:"chart-interface",id:"chart-interface",isDocsHomePage:!1,title:"Chart interface",description:"To display a chart with rawgraphs we need to provide an implementation of the rawgraphs chart-interface.",source:"@site/docs/chart-interface.md",slug:"/chart-interface",permalink:"/docs/chart-interface",editUrl:"https://github.com/rawgraphs/rawgraphs-core/edit/master/website/docs/chart-interface.md",version:"current",sidebar_label:"Chart interface",sidebar:"docs",previous:{title:"Rendering charts",permalink:"/docs/rendering"},next:{title:"Chart utilities",permalink:"/docs/chart-utilities"}},c=[{value:"<code>type</code>",id:"type",children:[]},{value:"<code>metadata</code>",id:"metadata",children:[]},{value:"<code>dimensions</code>",id:"dimensions",children:[]},{value:"<code>skipMapping</code>",id:"skipmapping",children:[]},{value:"<code>mapData</code>",id:"mapdata",children:[]},{value:"<code>visualOptions</code>",id:"visualoptions",children:[]},{value:"<code>render</code>",id:"render",children:[]},{value:"<code>styles</code>",id:"styles",children:[]}],o={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To display a chart with rawgraphs we need to provide an implementation of the rawgraphs ",Object(l.b)("strong",{parentName:"p"},"chart-interface"),".\nIn this page we'll describe this interface and provide an example of implementing a simple chart."),Object(l.b)("p",null,"Each chart implementation is defined by a javascript object, with some properties that are used to:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"describe the chart with some metadata (title, description, an unique id, thumbnail and icon)"),Object(l.b)("li",{parentName:"ul"},"define the semantics of the visual model (dimensions)"),Object(l.b)("li",{parentName:"ul"},'define how to transform a tabular dataset based on a "mapping" between the dimensions and data columns in the dataset'),Object(l.b)("li",{parentName:"ul"},"expose a set of visual options"),Object(l.b)("li",{parentName:"ul"},"define how to render the processed data to an HTML DOM node.")),Object(l.b)("p",null,"A ",Object(l.b)("strong",{parentName:"p"},"chart implementation")," object must have the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[type]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"'svg'")," ","|"," ",Object(l.b)("code",null,"'canvas'")," ","|"," ",Object(l.b)("code",null,"'div'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"svg")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the chart type (defaults to svg)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"metadata"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#chartmetadata--object"}),Object(l.b)("code",null,"ChartMetadata"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the chart metadata")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dimensions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#dimensionsdefinition--codearraydimensioncode"}),Object(l.b)("code",null,"DimensionsDefinition"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the dimensions configuration (mapping definition)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[skipMapping]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if set to true will skip the mapping phase (current mapping is still passed to the render function)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mapData"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#mappingfunction--function"}),Object(l.b)("code",null,"MappingFunction"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the mapping function")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visualOptions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#visualoptionsdefinition--codeobjectvisualoptiondefinitioncode"}),Object(l.b)("code",null,"VisualOptionsDefinition"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the visual options exposed by the model")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"render"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#renderfunction--function"}),Object(l.b)("code",null,"RenderFunction"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the render function")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[styles]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"{}")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"css in js styles definitions")))),Object(l.b)("p",null,'As an example, we\'ll build a simple chart that will plot "bubbles" on an xy plane, a simplified version of the bubble chart you can find in the RAWGraphs app.\nWe\'ll call it "XYPlot":'),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const XYPlot = {\n    type: 'svg',\n    metadata: {...},\n    dimensions: [...],\n    mapData: function(...){},\n    render: function(...){},\n    visualOptions: {...},\n    styles: {...},\n}\n")),Object(l.b)("p",null,"The meaning and shape of each property are detailed in the following sections."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Take a look at the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rawgraphs/rawgraphs-charts"}),"rawgraphs-charts")," for real example of charts implementations"))),Object(l.b)("h2",{id:"type"},Object(l.b)("inlineCode",{parentName:"h2"},"type")),Object(l.b)("p",null,'A string, that describes the type of DOM node the charts needs as "parent" in the html document. This container node will be provided by the rawgrahps code.\nCan be one of ',Object(l.b)("inlineCode",{parentName:"p"},"svg")," (the default), ",Object(l.b)("inlineCode",{parentName:"p"},"canvas")," or ",Object(l.b)("inlineCode",{parentName:"p"},"div"),"."),Object(l.b)("h2",{id:"metadata"},Object(l.b)("inlineCode",{parentName:"h2"},"metadata")),Object(l.b)("p",null,"An object with some additional properties describing the chart. Metadata is used to populate the graphic interface of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rawgraphs/rawgraphs-app"}),"rawgraphs-app"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An unique id for the chart")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The chart name")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The chart description")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"categories"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Array.\\<string",">")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The list of chart categories")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"icon"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url or base64 representation of chart icon (will be used as ",Object(l.b)("inlineCode",{parentName:"td"},"src")," attribute of an ",Object(l.b)("inlineCode",{parentName:"td"},"<img>")," tag)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"thumbnail"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"url or base64 representation of chart thumbnail (will be used as ",Object(l.b)("inlineCode",{parentName:"td"},"src")," attribute of an ",Object(l.b)("inlineCode",{parentName:"td"},"<img>")," tag)")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const XYPlot = {\n\n  metadata: {\n    id: "example.xyplot",\n    title: "XYPlot",\n    description: "An example plot"\n  },\n  ...\n}\n\n')),Object(l.b)("h2",{id:"dimensions"},Object(l.b)("inlineCode",{parentName:"h2"},"dimensions")),Object(l.b)("p",null,"The dimension property must be an array of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"api#dimension--object"}),"Dimension definitions"),' and is used to create the "slots" to whom can be mapped the columns of the user dataset.\nEach dimension is an object with the following properties:'),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"unique id")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[multiple]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"false")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"controls if a dimension accept a value with more than one item")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[minValues]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"min number of items required for the value of the dimension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[maxValues]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"max number of items required for the value of the dimension")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"validTypes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Array")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"valid data types for the dimension (one or more of 'number', 'string', 'date', 'boolean')")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[aggregation]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true if a dimension will be aggregated")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[aggregationDefault]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")," ","|"," ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#aggregationddefaultobject--object"}),Object(l.b)("code",null,"AggregationdDefaultObject"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default for aggregation")))),Object(l.b)("p",null,'In our "XYPlot" example we will be able to encode 4 dimensions: the x and y on the cartesian plane, the size (radius) of each bubble, and the label shown.\nIn our example the user will have to map each of these dimension to single a data column (all dimensions are required).\nLet\'s add the dimensions property to our chart definition:'),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const XYPlot = {\n  ...\n  dimensions: [\n    {\n      id: "x",\n      name: "X Axis",\n      validTypes: ["number"],\n      required: true\n    },\n    {\n      id: "y",\n      name: "Y Axis",\n      validTypes: ["number"],\n      required: true\n    },\n    {\n      id: "size",\n      name: "Size",\n      validTypes: ["number"],\n      required: false\n    },\n    {\n      id: "label",\n      name: "Label",\n      required: true\n    }\n  ],\n  ...\n}\n')),Object(l.b)("h2",{id:"skipmapping"},Object(l.b)("inlineCode",{parentName:"h2"},"skipMapping")),Object(l.b)("p",null,"A boolean proerty (default is ",Object(l.b)("inlineCode",{parentName:"p"},"false"),"). If set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," will skip involking the ",Object(l.b)("inlineCode",{parentName:"p"},"mapData")," function and pass the dataset directly to the ",Object(l.b)("inlineCode",{parentName:"p"},"render")," function.\nIn our example we'll define a ",Object(l.b)("inlineCode",{parentName:"p"},"mapData")," function, so this property will not be defined."),Object(l.b)("h2",{id:"mapdata"},Object(l.b)("inlineCode",{parentName:"h2"},"mapData")),Object(l.b)("p",null,"This property must contain a function that will be used to transform data from the user dataset, which is always a tabular format, into a new object, suitable for rendering data. The result of this function, the ",Object(l.b)("strong",{parentName:"p"},"mapped")," dataset, will be passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"render")," function, described later in this document."),Object(l.b)("p",null,"The transformation has different purposes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Simplyfing data before rendering: for example the unused columns of the dataset can be removed before passing data to render"),Object(l.b)("li",{parentName:"ul"},'Translating the names of the properties of each data point from column names to the chart semantics (dimensions). This operation is based on the "mapping" provided by the user and simplifies the rendering step, as variable names are always known (while name of columns change each time the user changes dataset).'),Object(l.b)("li",{parentName:"ul"},"Preparing the data in a shape that easier to use to perform the chart rendering. ")),Object(l.b)("p",null,'The separation of data mapping from the actual rendering also reflects the workflow of the rawgraphs app and helps to optimize the process: once a dataset is mapped, we can "tweak" the visual options of the chart without performing all data transformations each time we try a new option.\nThe render function will still be able to apply more transformations to the dataset and also access the initial data provided by the user.'),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"mapData")," function is expected to have the following signature:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"mapData(dataset, mapping, dataTypes, dimensions)")),Object(l.b)("p",null,"Where the parameters are the following:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataset"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"array")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the input dataset")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mapping"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#mapping--codeobjectmappeddimensioncode"}),Object(l.b)("code",null,"Mapping"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the mapping object")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dataTypes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#datatypes--objectnumberstringdatedatatypeobject"}),Object(l.b)("code",null,"DataTypes"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dimensions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"api#dimensionsdefinition--codearraydimensioncode"}),Object(l.b)("code",null,"DimensionsDefinition"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the chart dimensions")))),Object(l.b)("p",null,"In our case, since we need just to pull out the needed columns and rename them according to dimensions, the mapData function can be implemented as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const XYPlot = {\n  ...\n  mapData: function (data, mapping, dataTypes, dimensions) {\n    return data.map((item) => ({\n      x: item[mapping.x.value],\n      y: item[mapping.y.value],\n      size: mapping.size.value ? item[mapping.size.value] : null,\n      label: item[mapping.label.value]\n    }));\n  },\n  ...\n}\n")),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},'Rawgraphs also has a concept of "declarative mapping" that allows to specify a ',Object(l.b)("inlineCode",{parentName:"p"},"mapData")," in a declarative way, without writing a function. This feature is still under development, but it's already used, in its simplest form, for some charts in the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rawgraphs/rawgraphs-charts"}),"rawgraphs-charts")," repository, for example the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rawgraphs/rawgraphs-charts/tree/master/src/bubblechart"}),"bubble chart"),".\nSee the section about ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/declarative-mapping"}),"declarative mapping")," for more info."))),Object(l.b)("h2",{id:"visualoptions"},Object(l.b)("inlineCode",{parentName:"h2"},"visualOptions")),Object(l.b)("p",null,"This property exposes the options that are available to change the visual appeareance of the chart once the dataset has been mapped.\nIt must be an object, with keys representing the variables that will be available into the render function and values representing the configuration: type of option and a default value, and a label to be used to show the option in the rawgraphs-app."),Object(l.b)("p",null,"The configuration also accepts more options, for handling deactivation of visual options in certain cases.\nThe optional ",Object(l.b)("inlineCode",{parentName:"p"},"disabled")," property of each visual option is an object that may be used to specify a condition to disable the option, given the values of other options.\nThe optional ",Object(l.b)("inlineCode",{parentName:"p"},"requiredDimensions")," property of each visual option, gives the possibility to enable a certain option only if the specified dimensions ids have been provided by the current mapping specified by the user. "),Object(l.b)("p",null,"This is the complete list of property supported by visual options configuration:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"'number'")," ","|"," ",Object(l.b)("code",null,"'boolean'")," ","|"," ",Object(l.b)("code",null,"'text'")," ","|"," ",Object(l.b)("code",null,"'colorScale'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"type of option")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"label"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the option label")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"any")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the default value for the option. should match the option type")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[group]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the name of the options panel")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[disabled]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"cross-conditions disabling the option")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[requiredDimensions]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Array.","<","string",">")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dimensions that must have a value in mapping for enabling the option")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[container]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"container node property reference")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[containerCondition]"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"conditions for applying container node property reference")))),Object(l.b)("p",null,"In our example, we'll add a set of visual options to control:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"the max radius of the bubbles"),Object(l.b)("li",{parentName:"ul"},"wether to show the stroke of the bubbles"),Object(l.b)("li",{parentName:"ul"},"the color of the stroke"),Object(l.b)("li",{parentName:"ul"},"the color for the fill"),Object(l.b)("li",{parentName:"ul"},"the color for the labels")),Object(l.b)("p",null,"Here is our visualOptions definition:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const XYPlot = {\n  ...\n  visualOptions: {\n    maxRadius: {\n      label: "Max radius",\n      type: "number",\n      default: 10,\n      min: 2\n    },\n    showStroke: {\n      label: "Show stroke",\n      type: "boolean",\n      default: true\n    },\n    stroke: {\n      label: "Stroke color",\n      type: "color",\n      default: "red"\n    },\n    fill: {\n      label: "Fill color",\n      type: "color",\n      default: "red"\n    },\n    labelsColor: {\n      label: "Labels color",\n      type: "color",\n      default: "hotpink"\n    }\n  },\n  ...\n}\n')),Object(l.b)("h2",{id:"render"},Object(l.b)("inlineCode",{parentName:"h2"},"render")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"render")," property is a function that takes care of performing the final rendering of the chart into a DOM node. This is where the visual model is finally implemented.\nThe function has the following signature:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"render(node, data, visualOptions, mapping, originalData, styles)")),Object(l.b)("p",null,"and has no return value. The parameters have the following roles:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Param"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"node"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"Node")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"an empty DOMNode that conforms to the ",Object(l.b)("inlineCode",{parentName:"td"},"type")," exposed by the chart implementation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"any")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the data output from the mapData function defined in the cart")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visualOptions"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the current values of the chart visual options")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mapping"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the mapping from column names to chart dimensions")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"originalData"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"array")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"the original tabular dataset")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"styles")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"css in js styles definitions, defined by the chart itself and possibly overridden when the chart instance is created.")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const XYPlot = {\n  ...\n  render: function (\n    svgNode,\n    data,\n    visualOptions,\n    mapping,\n    originalData,\n    styles\n  ) {\n    const {\n      width,\n      height,\n      background,\n      maxRadius,\n      showStroke,\n      stroke,\n      fill,\n      labelsColor\n    } = visualOptions;\n    const margin = {\n      top: 40,\n      right: 40,\n      bottom: 40,\n      left: 40\n    };\n\n    const chartHeight = height - margin.top - margin.bottom;\n    const chartWidth = width - margin.left - margin.right;\n    const xExtent = d3.extent(data, (item) => item.x);\n    const xScale = d3\n      .scaleLinear()\n      .domain(xExtent)\n      .range([0, chartWidth])\n      .nice();\n\n    const yExtent = d3.extent(data, (item) => item.y);\n    const yScale = d3\n      .scaleLinear()\n      .domain(yExtent)\n      .range([chartHeight, 0])\n      .nice();\n\n    let sizeScale;\n    if (mapping.size.value) {\n      sizeScale = d3\n        .scaleLinear()\n        .range([2, maxRadius])\n        .domain(d3.extent(data, (item) => item.size));\n    }\n\n    const artboardBackground = d3\n      .select(svgNode)\n      .append("rect")\n      .attr("width", width)\n      .attr("height", height)\n      .attr("x", 0)\n      .attr("y", 0)\n      .attr("fill", background)\n      .attr("id", "background");\n\n    const svg = d3\n      .select(svgNode)\n      .append("g")\n      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")\n      .attr("id", "visualization");\n\n    const vizLayer = svg.append("g").attr("id", "viz");\n\n    const bubbles = vizLayer.selectAll("g").data(data).join("g");\n\n    bubbles\n      .append("circle")\n      .attr("cx", (d) => xScale(d.x))\n      .attr("cy", (d) => yScale(d.y))\n      .attr("r", (d) => {\n        return mapping.size.value ? sizeScale(d.size) : maxRadius;\n      })\n      .attr("fill", fill)\n      .attr("stroke", showStroke ? stroke : "none");\n\n    const labelsLayer = svg.append("g").attr("id", "labels");\n\n    labelsLayer\n      .selectAll("g")\n      .data(mapping.label.value ? data : [])\n      .join("g")\n      .attr("transform", (d) => `translate(${xScale(d.x)},${yScale(d.y)})`)\n      .append("text")\n      .text((d) => d.label)\n      .attr("x", 0)\n      .attr("y", maxRadius + 6)\n      .attr("text-anchor", "middle")\n      .attr("dominant-baseline", "hanging")\n      .style("fill", labelsColor);\n\n    labelsLayer.selectAll("text").call((sel) => {\n      return sel.attr("transform", function (d) {\n        const height = sel.node().getBBox().height;\n        return `translate(0,${-height / 2})`;\n      });\n    });\n  }\n  ...\n}\n')),Object(l.b)("h2",{id:"styles"},Object(l.b)("inlineCode",{parentName:"h2"},"styles")),Object(l.b)("p",null,"An object specyfing css-in-js styles that can be used in render.\nThis is an advanced api that can be used if you want to reuse common styles between various charts or\nyou want to override some css class defined by the chart when you use it."),Object(l.b)("p",null,"We won't use this property in our example."),Object(l.b)("h1",{id:"using-the-chart---live-demo"},"Using the chart - live demo"),Object(l.b)("p",null,'Here\'s a live demo of our custom chart running in codesandbox. Click on the "Open Sandbox" link to view the full code of our example.'),Object(l.b)("iframe",{src:"https://codesandbox.io/embed/rawgraphs-custom-chart-1g8oj?fontsize=14&hidenavigation=1&theme=light&view=preview",style:{width:"100%",height:700,border:0},title:"rawgraphs at a glance",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}p.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,b=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,j=d["".concat(b,".").concat(m)]||d[m]||s[m]||l;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,b=new Array(l);b[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var o=2;o<l;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);