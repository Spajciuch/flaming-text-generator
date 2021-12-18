import * as request from 'request';
import { flamingParameters } from './interfaces';

export function generate(options: flamingParameters) {
  return new Promise(function (resolve, reject) {
    const parameters = {
      script: options.script || 'flaming-logo',
      text: options.text,
      symbol_tagname: 'popular',
      fontsize: options.fontSize || 48,
      fontname: options.font || 'Agate',
      fontname_tagname: 'cool',
      textBorder: options.textBorder || 20,
      growSize: options.growSize || 0,
      antialias: options.antialias || true,
      hinting: options.hinting || true,
      justify: options.justify || 2,
      letterSpacing: options.letterSpacing || 0,
      lineSpacing: options.lineSpacing || 0,
      textSlant: options.textSlant || 0,
      textVerticalSlant: options.textVerticalSlant || 0,
      textAngle: options.textAngle || 0,
      textOutline: options.textOutline || false,
      textOutlineSize: options.textOutlineSize || 2,
      textColor: options.textColor || '#ff0000',
      angle: options.angle || 0,
      blueFlame: options.blueFlame || false,
      framerate: options.framerate || 75,
      frames: options.frames || 5,
      pframes: options.pframes || 5,
      oframes: options.oframes || 4,
      distance: options.distance || 2,
      transparent: options.transparent || false,
      extAnim: 'gif',
      animLoop: options.animLoop || true,
      defaultFrameRate: options.defaultFrameRate || 75,
    };

    request(
      {
        url: 'http://www.flamingtext.com/net-fu/image_output.cgi?',
        method: 'GET',
        qs: parameters,
      },
      function (err, res, body) {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(body));
        }
      },
    );
  });
}
