var through = require('through2');

var properties = [
  'align-content',
  'align-items',
  'align-self',
  'animation',
  'animation-delay',
  'animation-direction',
  'animation-duration',
  'animation-fill-mode',
  'animation-iteration-count',
  'animation-name',
  '@keyframes',
  'animation-play-state',
  'animation-timing-function',
  'backface-visibility',
  'background',
  'background-attachment',
  'background-clip',
  'background-color',
  'background-image',
  'background-origin',
  'background-position',
  'background-repeat',
  'background-size',
  'border',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-left-radius',
  'border-bottom-right-radius',
  'border-bottom-style',
  'border-bottom-width',
  'border-collapse',
  'border-color',
  'border-image',
  'border-image-outset',
  'border-image-repeat',
  'border-image-slice',
  'border-image-source',
  'border-image-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-spacing',
  'border-style',
  'border-top',
  'border-top-color',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-top-style',
  'border-top-width',
  'border-width',
  'bottom',
  'box-shadow',
  'box-sizing',
  'caption-side',
  'clear',
  'clip',
  'color',
  'column-count',
  'column-fill',
  'column-gap',
  'column-rule',
  'column-rule-color',
  'column-rule-style',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'column-width',
  'column-count',
  'content',
  'counter-increment',
  'counter-reset',
  'cursor',
  'direction',
  'display',
  'empty-cells',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-direction',
  'flex-wrap',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'font',
  'font-family',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'height',
  'justify-content',
  'left',
  'letter-spacing',
  'line-height',
  'list-style',
  'list-style-image',
  'list-style-position',
  'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  'opacity',
  'order',
  'outline',
  'outline-color',
  'outline-offset',
  'outline-style',
  'outline-width',
  'overflow',
  'overflow-x',
  'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  'page-break-after',
  'page-break-before',
  'page-break-inside',
  'perspective',
  'perspective-origin',
  'position',
  'quotes',
  'resize',
  'right',
  'tab-size',
  'table-layout',
  'text-align',
  'text-align-last',
  'text-align',
  'justify',
  'text-decoration',
  'text-decoration-color',
  '2text-decoration-line',
  'text-decoration-style',
  'text-decoration-line',
  'text-indent',
  'text-justify',
  'text-align',
  'justify',
  'text-overflow',
  'text-shadow',
  'text-transform',
  'top',
  'transform',
  'transform-origin',
  'transform-style',
  'transition',
  'transition-delay',
  'transition-duration',
  'transition-property',
  'transition-timing-function',
  'vertical-align',
  'visibility',
  'white-space',
  'width',
  'word-break',
  'word-spacing',
  'word-wrap',
  'z-index',
];




var layoutProperties = [
  'align-content',
  'align-items',
  'align-self',
  // 'border',
  // 'border-bottom',
  // 'border-bottom-width',
  // 'border-collapse',
  // 'border-image-width',
  // 'border-left',
  // 'border-left-width',
  // 'border-right',
  // 'border-right-width',
  // 'border-spacing',
  // 'border-style',
  // 'border-top',
  // 'border-top-width',
  // 'border-width',
  'bottom',
  'box-sizing',
  'clear',
  'column-count',
  'column-rule-width',
  'column-span',
  'column-width',
  'columns',
  'column-width',
  'column-count',
  'display',
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-direction',
  'flex-wrap',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'float',
  'font',
  // 'font-family',
  'font-size',
  // 'font-size-adjust',
  // 'font-stretch',
  // 'font-style',
  // 'font-variant',
  // 'font-weight',
  'height',
  'justify-content',
  'left',
  // 'letter-spacing',
  'line-height',
  // 'list-style',
  // 'list-style-image',
  'list-style-position',
  // 'list-style-type',
  'margin',
  'margin-bottom',
  'margin-left',
  'margin-right',
  'margin-top',
  'max-height',
  'max-width',
  'min-height',
  'min-width',
  // 'opacity',
  'order',
  // 'outline',
  // 'outline-color',
  // 'outline-offset',
  // 'outline-style',
  // 'outline-width',
  // 'overflow',
  // 'overflow-x',
  // 'overflow-y',
  'padding',
  'padding-bottom',
  'padding-left',
  'padding-right',
  'padding-top',
  // 'page-break-after',
  // 'page-break-before',
  // 'page-break-inside',
  // 'perspective',
  // 'perspective-origin',
  'position',
  // 'quotes',
  // 'resize',
  'right',
  // 'tab-size',
  // 'table-layout',
  // 'text-align',
  // 'text-align-last',
  // 'text-align',
  // 'justify',
  // 'text-decoration',
  // 'text-decoration-color',
  // '2text-decoration-line',
  // 'text-decoration-style',
  // 'text-decoration-line',
  // 'text-indent',
  // 'text-justify',
  // 'text-align',
  // 'justify',
  // 'text-overflow',
  // 'text-shadow',
  // 'text-transform',
  'top',
  // 'transform',
  // 'transform-origin',
  // 'transform-style',
  // 'transition',
  // 'transition-delay',
  // 'transition-duration',
  // 'transition-property',
  // 'transition-timing-function',
  // 'vertical-align',
  'visibility',
  // 'white-space',
  'width',
  // 'word-break',
  // 'word-spacing',
  // 'word-wrap',
  'z-index',



  'content',
];



'use strict';

var css = require('css');

function customStyleExtract(data, options, c) {
  options = Object.assign({
    properties: ['color', 'background-color', 'border-color'],
    layout: false,
  }, options);

  var code = css.parse(data);

  /* Get only declarations with the specied properties */
  function filterDeclaration(declaration) {
    return options.layout  
      ? options.properties.indexOf(declaration.property) !== -1
      : options.properties.indexOf(declaration.property) === -1
  }

  /* Get only rules with the properties provided in the options */
  function filterRules(rules) {
    return rules.map(function (rule) {
      if (rule.type !== 'rule' && rule.type !== 'media') {
        return options.layout ? null : rule;
      }
      
      if (rule.type === 'rule') {
        var declarations = rule.declarations.filter(filterDeclaration);

        if (declarations.length) {
          rule.declarations = declarations;

          return rule;
        }
      } else {
        rule.rules = rule.rules
          .map(function (rule) {
            if (rule.type !== 'rule') {
              return rule;
            }

            var declarations = rule.declarations.filter(filterDeclaration);

            if (declarations.length) {
              rule.declarations = declarations;

              return rule;
            }
          }).filter(function (rule) {
            return rule !== undefined;
          });

        // rule.rules = rule.rules.filter(function (rule) {
        //   return rule.type === 'rule';
        // }).map(function (rule) {
        //   var declarations = rule.declarations.filter(filterDeclaration);

        //   if (declarations.length) {
        //     rule.declarations = declarations;

        //     return rule;
        //   }
        // }).filter(function (rule) {
        //   return rule !== undefined;
        // });

        if (rule.rules.length) {
          return rule;
        }
      }

      return null;
    }).filter(function (rule) {
      return rule !== null;
    });
  }

  var rules = filterRules(code.stylesheet.rules);

  code.stylesheet.rules = rules;

  return css.stringify(code);
};

module.exports = function (config) {
  var options = {
    properties: layoutProperties,
    layout: Boolean(config) && config.layout,
  };

  return through.obj(function (file, encoding, callback) {

    try {
      const result = customStyleExtract(file.contents.toString(), options, console)
    } catch(e) {
      console.log('error sasha')
    }

    file.contents = Buffer.from(customStyleExtract(file.contents.toString(), options, console));
    callback(null, file);
  });
};