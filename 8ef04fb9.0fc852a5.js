(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(91)),s={id:"data-parsing",title:"Data parsing",sidebar_label:"Data parsing",slug:"/data-parsing"},o={unversionedId:"data-parsing",id:"data-parsing",isDocsHomePage:!1,title:"Data parsing",description:"User data is the entry point of the RAWGraphs workflow, and the rawgraphs-core library introduces some concepts and utilities",source:"@site/docs/data-parsing.md",slug:"/data-parsing",permalink:"/docs/data-parsing",editUrl:"https://github.com/rawgraphs/rawgraphs-core/edit/master/website/docs/data-parsing.md",version:"current",sidebar_label:"Data parsing",sidebar:"docs",previous:{title:"Declarative mapping",permalink:"/docs/declarative-mapping"},next:{title:"API",permalink:"/docs/api"}},c=[{value:"Data Types in RAWGraphs",id:"data-types-in-rawgraphs",children:[]},{value:"&quot;Real-world&quot; data and data types inference",id:"real-world-data-and-data-types-inference",children:[]},{value:"<code>inferTypes</code>",id:"infertypes",children:[{value:"inferTypes(data, parsingOptions) \u21d2 <code>DataTypes</code>",id:"infertypesdata-parsingoptions-\u21d2-codedatatypescode",children:[]}]},{value:"<code>parseDataset</code>",id:"parsedataset",children:[{value:"parseDataset(data, types, parsingOptions) \u21d2 <code>ParserResult</code>",id:"parsedatasetdata-types-parsingoptions-\u21d2-codeparserresultcode",children:[]}]}],b={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"User data is the entry point of the RAWGraphs workflow, and the rawgraphs-core library introduces some concepts and utilities\nto deal with user provided datasets."),Object(i.b)("p",null,"RAWGraphs works on a tabular dataset, that will be transformed internally according to the chart type we want to draw."),Object(i.b)("p",null,"The task of importing such kind of dataset from common formats like csv into javascript is already solved by other libraries\n(we use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/d3/d3-dsv"}),"d3-dsv")," in the RAWGraphs app), but as we normally work with text-based data formats,\nwe also must define the data types of the different columns."),Object(i.b)("p",null,"For example in this csv dataset:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csv"}),"year, orders, total, client\n2000, 100, 1000, A and Co.\n2001, 10, 2000, M and Co.\n2002, 30, 300, C and Co.\n")),Object(i.b)("p",null,"all data points and values are formally strings, but the column ",Object(i.b)("inlineCode",{parentName:"p"},"year")," could be paresed as a date, and the columns ",Object(i.b)("inlineCode",{parentName:"p"},"orders")," and ",Object(i.b)("inlineCode",{parentName:"p"},"total"),"\nare numbers."),Object(i.b)("h2",{id:"data-types-in-rawgraphs"},"Data Types in RAWGraphs"),Object(i.b)("p",null,"RAWGraphs has the concept of ",Object(i.b)("strong",{parentName:"p"},"data type")," and can handle ",Object(i.b)("strong",{parentName:"p"},"strings"),", ",Object(i.b)("strong",{parentName:"p"},"number")," and ",Object(i.b)("strong",{parentName:"p"},"dates"),"."),Object(i.b)("p",null,"When handling a user dataset, it is required that each data column in the tabular dataset has the same data type for all\nthe data points."),Object(i.b)("p",null,'When we create an instance of a rawgraphs chart you have the ability to declare the datatypes of the columns in the dataset,\notherwise raw will infer them from the dataset.\nGiven a set of column, its datatypes are expressed as an object where keys are the names of columns and values a- one of "number", "date", or "string".'),Object(i.b)("p",null,"For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const dataTypes = {\n  age: "number",\n  height: "number",\n  born: "date",\n  name: "string",\n}\n')),Object(i.b)("p",null,"Let's go back to the basic example of rendering a chart:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// 1. imports: chart factory function and chart implementation\nimport { chart } from '@rawgraphs/rawgraphs-core'\nimport { bubblechart } from '@rawgraphs/rawgraphs-charts'\n\n// 2. defining data\nconst data = [{age:10, height:130}, {age:18, height:170}]\n\n// 3. defining mapping\nconst mapping = { x: { value: 'age' }, y: { value: 'height' } }\n\n// 4. creating a chart instance\nconst viz = new chart(bubblechart { data,  mapping})\n\n// 5. rendering to the DOM\nconst targetNode = document.getElementById('some-div')\nviz.renderToDOM(targetNode)\n")),Object(i.b)("p",null,'As you can see there\'s no mentioning of datatypes, but under the hood rawgraphs has been able to\nidentify the "age" and "height" columns in the dataset. In this case this is important as the bubblechart\nonly accepts numbers or dates on the ',Object(i.b)("inlineCode",{parentName:"p"},"x")," dimension and numbers on the ",Object(i.b)("inlineCode",{parentName:"p"},"y")," dimensions."),Object(i.b)("p",null,"We could have been more verbose, by specifying the datatypes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// 1. imports: chart factory function and chart implementation\nimport { chart } from '@rawgraphs/rawgraphs-core'\nimport { bubblechart } from '@rawgraphs/rawgraphs-charts'\n\n// 2. defining data and data types\nconst data = [{age:10, height:130}, {age:18, height:170}]\nconst dataTypes = {\n    age: \"number\",\n    height: \"number\",\n}\n\n// 3. defining mapping\nconst mapping = { x: { value: 'age' }, y: { value: 'height' } }\n\n// 4. creating a chart instance\nconst viz = new chart(bubblechart { data,  dataTypes, mapping})\n\n// 5. rendering to the DOM\nconst targetNode = document.getElementById('some-div')\nviz.renderToDOM(targetNode)\n")),Object(i.b)("p",null,'In this way you can "force" the visualization to use your explicit data types.'),Object(i.b)("h2",{id:"real-world-data-and-data-types-inference"},'"Real-world" data and data types inference'),Object(i.b)("p",null,'When dealing with real-world datasets, we often start from spreadsheets, text files, database exports, copy and paste,\nthat come with no information about data types, and are often "formatted" with conventions based on language\nand culture of who produced the data.'),Object(i.b)("p",null,"An obvious case is related to dates formats, which standard change from nation to nation, or that can be\nexpressed with a mixture of words and numbers (ex: Jan 2021), specify date and time (ex: 2021-01-01 18:00:00), date only (ex: 2021-01-01) or just a part of it (ex: 2021)."),Object(i.b)("p",null,"Another case is number formatting, where the dot ",Object(i.b)("inlineCode",{parentName:"p"},".")," or the comma ",Object(i.b)("inlineCode",{parentName:"p"},",")," sign are used as decimal separators in different languages."),Object(i.b)("p",null,"RAWGraphs includes some functions used in the RAWGraphs app to solve this problem for the, with the ",Object(i.b)("inlineCode",{parentName:"p"},"inferTypes")," and ",Object(i.b)("inlineCode",{parentName:"p"},"parseDataset"),' functions.\nThese utilities are used in the "Data loading" section of the app.'),Object(i.b)("h2",{id:"infertypes"},Object(i.b)("inlineCode",{parentName:"h2"},"inferTypes")),Object(i.b)("p",null,"This function can be used to detect the data types of a dataset. The signature is the following"),Object(i.b)("h3",{id:"infertypesdata-parsingoptions-\u21d2-codedatatypescode"},"inferTypes(data, parsingOptions) \u21d2 ",Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"#DataTypes"}),Object(i.b)("code",null,"DataTypes"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"data")," parameter is the array of objects that must be parsed"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"parsingOptions")," is an optional objects with the following properties:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"strict"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("code",null,"boolean")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'if strict is false, a JSON parsing of the values is tried. (if strict=false: "true" -> true)')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"locale"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("code",null,"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"decimal"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("code",null,"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"group"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("code",null,"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"numerals"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("code",null,"Array.","<","string",">")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"dateLocale"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("code",null,"string")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,"The return value of the function is an object representing the guessed ",Object(i.b)("strong",{parentName:"p"},"data types"),".\nIts shape is described in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"api#datatypes--objectnumberstringdatedatatypeobject"}),"api docs")),Object(i.b)("p",null,"and extends the datatypes definition of RAWGraphs by allowing to specify custom properties for the different data types.\nFor example, the ",Object(i.b)("inlineCode",{parentName:"p"},"date")," format allows to specify a ",Object(i.b)("inlineCode",{parentName:"p"},"dateFormat")," property."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example of datatypes")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{ x: 'number', y: { type: 'date', dateFormat: 'DD-MM-YYYY } }\n")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"dateFormat")," property in each data type definition plays a role similar to the options available in the ",Object(i.b)("inlineCode",{parentName:"p"},"parsingOptions"),"\nparameter, the only difference is that the date format may be specified for each column, while the numeric formatting is\nglobal. This reflects the actual user interface of the RAWGraphs app."))),Object(i.b)("p",null,"Let's see how the function is used:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"inferTypes example")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { inferTypes } from "@rawgraphs/rawgraphs-core"\nconst data = [\n  { a: 1, b: "2021" },\n  { a: 2000, b: "2011" },\n  { a: 1, b: "2000" },\n]\nconst detectedTypes = inferTypes(data)\n\n// the value of detectedTypes is\n// {a: "number", b: "number"}\n')),Object(i.b)("p",null,"As you can see, even if the ",Object(i.b)("inlineCode",{parentName:"p"},"b")," column of our dataset is formally a string, the library was able to cast it to numbers."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"For each column, Rawgraphs tries to cast each datum to each data type. If the majority of data points can be casted to a type,\nthat type is chosen for the column."))),Object(i.b)("p",null,"Let's see a couple more of examples. The function is able to detect ISO dates formats:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { inferTypes } from "@rawgraphs/rawgraphs-core"\nconst data = [\n  { a: 1, b: "2021-01-01" },\n  { a: 2000, b: "2011-01-01" },\n  { a: 1, b: "2000-02-02" },\n]\nconst detectedTypes = inferTypes(data)\n\n// the value of detectedTypes is\n// {a: "number", b: {type: "date", dateFormat: "YYYY-MM-DD"}}\n')),Object(i.b)("p",null,"And we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"parsingOption")," parameter for specifying that the comma is the decimal separator:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { inferTypes } from "@rawgraphs/rawgraphs-core"\nconst data = [\n  { a: 1, b: "1,2" },\n  { a: 2000, b: "3,1" },\n  { a: 1, b: "2,2" },\n]\nconst detectedTypes = inferTypes(data, { decimal: "," })\n\n// the value of detectedTypes is\n// {\n//    a: {\n//      type: "number"\n//      locale: undefined\n//      decimal: ","\n//      group: ""\n//      numerals: Array(10) ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]\n//    },\n//   b: {\n//     type: "number"\n//     locale: undefined\n//     decimal: ","\n//     group: ""\n//     numerals: Array(10) ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]\n//   }\n// }\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The function ",Object(i.b)("inlineCode",{parentName:"p"},"inferTypes")," limits its search for data types to numbers with ",Object(i.b)("inlineCode",{parentName:"p"},".")," as decimal separator, dates and datetimes in ISO format,\nbut doesn't explore all the possible date formats and formatting options."))),Object(i.b)("h2",{id:"parsedataset"},Object(i.b)("inlineCode",{parentName:"h2"},"parseDataset")),Object(i.b)("p",null,'This function can be used to parse a "formatted" dataset, already split in row and columns, and has the following syntax:'),Object(i.b)("h3",{id:"parsedatasetdata-types-parsingoptions-\u21d2-codeparserresultcode"},"parseDataset(data, ","[types]",", ","[parsingOptions]",") \u21d2 ",Object(i.b)("a",Object(n.a)({parentName:"h3"},{href:"api#parserresult--object"}),Object(i.b)("code",null,"ParserResult"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"data")," parameter is the array of objects that must be parsed"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"types")," is an optional object specifying the types we want to enforce, with the same syntax of the dataTypes output described for the ",Object(i.b)("inlineCode",{parentName:"li"},"inferTypes")," function"),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"parsingOptions")," (optional) is the same object described for the ",Object(i.b)("inlineCode",{parentName:"li"},"inferTypes")," function.")),Object(i.b)("p",null,"Note that in case we don't pass the ",Object(i.b)("inlineCode",{parentName:"p"},"types")," parameter, the library will try and detect types automatically using the ",Object(i.b)("inlineCode",{parentName:"p"},"inferTypes")," function described above,\nand if no datatype can be detected for a column, the library will recognize it as a simple string."),Object(i.b)("p",null,"The function returns an object with three properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dataset"),": the set of rows that could be parsed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dataTypes"),": the datatypes used for parsing"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"errors"),": errors that prevented from parsing rows according to dataTypes")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Examples")),Object(i.b)("p",null,"Let's try and parse a dataset with some values changing type in the different rows.\nWe won't specify any \"hint\" for data types and no parsing options."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { parseDataset } from "@rawgraphs/rawgraphs-core"\n\nconst data = [\n  { a: 1, b: "3" },\n  { a: 2, b: 2 },\n  { a: 1, b: "3" },\n]\nconst { dataset, dataTypes, errors } = parseDataset(data)\n\n// will return\n//\n// dataset -> [{a: 1, b: "hello"}, {a: 2, b: "2"}, {a: 1, b: "3"}]\n// dataTypes: {a: "number", b: "number" }\n// errors -> []\n')),Object(i.b)("p",null,"Here's an example of parsing dates with some parsing errors:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { parseDataset } from \'@rawgraphs/rawgraphs-core\'\nconst data = [{a: 1, b: "2001-01-01"}, {a: 2000, b: "2001-02-02"}, {a: 1, b: "no data"}]\nconst {\xa0dataset, dataTypes, errors } = parseDataset(data)\n\n// result = Object {\n//  dataset: Array(3) [\n//   0: Object {a: 1, b: 2001-01-01T00:00}\n//   1: Object {a: 2000, b: 2001-02-02T00:00}\n//   2: Object {a: 1, b: undefined}\n//  ],\n//  dataTypes: Object {\n//   a: "number"\n//   b: Object {type: "date", dateFormat: "YYYY-MM-DD"}\n//  }\n//  errors: Array(1) [\n//   0: Object {row: 2, error: Object}\n//  ]\n\n\n')),Object(i.b)("p",null,"In this case the library has been able to detect the ",Object(i.b)("inlineCode",{parentName:"p"},"b")," column as ISO date, but could just parse correctly 2 of 3 records in the dataset, and the array\nof errors contains information about the row and column that could not be parsed."),Object(i.b)("p",null,"Values that cannot be parsed with the specified type become ",Object(i.b)("inlineCode",{parentName:"p"},"undefined")," in the parsed dataset."))}p.isMDXComponent=!0},91:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),l=p(a),m=n,u=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return a?r.a.createElement(u,o(o({ref:t},b),{},{components:a})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var b=2;b<i;b++)s[b]=a[b];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);