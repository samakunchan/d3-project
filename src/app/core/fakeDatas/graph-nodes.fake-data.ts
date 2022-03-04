export const exempleMarie = {
  links: [
    { source: 3, target: 0, value: 1, typeS: 'predicate', typeT: 'Agent', dashed: false },
    { source: 3, target: 14, value: 1, typeS: 'predicate', typeT: 'Instrument', dashed: false },
    { source: 3084, target: 14, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3084, target: -4027, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3545, target: 14, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3545, target: -2345, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
  ],
  nodes: [
    { id: 3, type: 'predicate', group: 1, frame: 'manger 3', text: ['eat-39.1-1'], dashed: false },
    { id: 3084, type: 'predicate', group: 2, frame: 'Marie 3084', text: ['type'], dashed: false },
    { id: 3545, type: 'predicate', group: 3, frame: 'Marie 3545', text: ['type'], dashed: false },
    { id: 0, idP: 'idP3', type: '[A1] Agent', group: 1, text: ['je 3'], dashed: false },
    { id: 14, idP: 'idP3 idP3084 idP3545', type: '[A1] Instrument, Experiencer', group: 1, text: ['Marie 3'], dashed: false },
    { id: -4027, idP: 'idP3084', type: '[A2] Attribute', group: 2, text: ['feminine 3084'], dashed: false },
    { id: -2345, idP: 'idP3545', type: '[A3] Attribute', group: 3, text: ['nerd:Person 3545'], dashed: false },
  ],
};

export const exempleLucNotGood = {
  links: [
    { source: 3522, target: 0, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3522, target: -2150, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3172, target: 0, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3172, target: -4710, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 6, target: 0, value: 1, typeS: 'predicate', typeT: 'TimeMax', dashed: false },
    { source: 6, target: 18, value: 1, typeS: 'predicate', typeT: 'Theme', dashed: false },
    { source: 6, target: 29, value: 1, typeS: 'predicate', typeT: 'Recipient', dashed: false },
    { source: 6, target: 0, value: 1, typeS: 'predicate', typeT: 'Agent', dashed: false },
    { source: 6, target: 0, value: 1, typeS: 'predicate', typeT: 'TimeMin', dashed: false },
    { source: 14, target: 18, value: 1, typeS: 'predicate', typeT: 'Theme', dashed: false },
    { source: 14, target: 0, value: 1, typeS: 'predicate', typeT: 'Measuremin', dashed: false },
    { source: 3088, target: 18, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3088, target: -5361, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3766, target: 18, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3766, target: -7545, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3729, target: 29, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3729, target: -6958, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3531, target: 29, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3531, target: -8638, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3921, target: 0, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3921, target: -680, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3827, target: 0, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3827, target: -675, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
  ],
  nodes: [
    { id: 3522, type: 'predicate', group: 1, frame: 'Luc 3522', text: ['type'], dashed: false },
    { id: 3172, type: 'predicate', group: 2, frame: 'Luc 3172', text: ['type'], dashed: false },
    { id: 6, type: 'predicate', group: 3, frame: 'demander 6', text: ['require-103', 'order-60.1'], dashed: false },
    { id: 14, type: 'predicate', group: 4, frame: 'le 14', text: ['cardinality'], dashed: false },
    { id: 3088, type: 'predicate', group: 5, frame: 'facture 3088', text: ['type'], dashed: false },
    { id: 3766, type: 'predicate', group: 6, frame: 'facture 3766', text: ['type'], dashed: false },
    { id: 3729, type: 'predicate', group: 7, frame: 'Marie 3729', text: ['type'], dashed: false },
    { id: 3531, type: 'predicate', group: 8, frame: 'Marie 3531', text: ['type'], dashed: false },
    { id: 3921, type: 'predicate', group: 9, frame: '2022-03-05T00:00:00.551705805 3921', text: ['type'], dashed: false },
    { id: 3827, type: 'predicate', group: 10, frame: '2022-03-05T23:59:22.551705805 3827', text: ['type'], dashed: false },
    {
      id: 0,
      idP: 'idP3522 idP3172 idP6 idP14 idP3921 idP3827',
      type: '[A1] Experiencer, TimeMax, Agent, TimeMin, Measuremin',
      group: 1,
      text: ['Luc 3522'],
      dashed: false,
    },
    { id: -2150, idP: 'idP3522', type: '[A1] Attribute', group: 1, text: ['masculine 3522'], dashed: false },
    { id: -4710, idP: 'idP3172', type: '[A2] Attribute', group: 2, text: ['nerd:Person 3172'], dashed: false },
    { id: 18, idP: 'idP6 idP14 idP3088 idP3766', type: '[A3] Theme, Experiencer', group: 3, text: ['facture 6'], dashed: false },
    { id: 29, idP: 'idP6 idP3729 idP3531', type: '[A3] Recipient, Experiencer', group: 3, text: ['Marie 6'], dashed: false },
    {
      id: -5361,
      idP: 'idP3088',
      type: '[A5] Attribute',
      group: 5,
      text: ['wsd:Thing>Concrete>Inanimate>Product>Archive 3088'],
      dashed: false,
    },
    { id: -7545, idP: 'idP3766', type: '[A6] Attribute', group: 6, text: ['feminine 3766'], dashed: false },
    { id: -6958, idP: 'idP3729', type: '[A7] Attribute', group: 7, text: ['feminine 3729'], dashed: false },
    { id: -8638, idP: 'idP3531', type: '[A8] Attribute', group: 8, text: ['nerd:Person 3531'], dashed: false },
    { id: -680, idP: 'idP3921', type: '[A9] Attribute', group: 9, text: ['nerd:TimeMin 3921'], dashed: false },
    { id: -675, idP: 'idP3827', type: '[A10] Attribute', group: 10, text: ['nerd:TimeMax 3827'], dashed: false },
  ],
};

export const exempleLucGood = {
  links: [
    { source: 3522, target: 0, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3522, target: -2150, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3172, target: 0, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3172, target: -4710, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 6, target: 1, value: 1, typeS: 'predicate', typeT: 'TimeMax', dashed: false },
    { source: 6, target: 18, value: 1, typeS: 'predicate', typeT: 'Theme', dashed: false },
    { source: 6, target: 29, value: 1, typeS: 'predicate', typeT: 'Recipient', dashed: false },
    { source: 6, target: 0, value: 1, typeS: 'predicate', typeT: 'Agent', dashed: false },
    { source: 6, target: 2, value: 1, typeS: 'predicate', typeT: 'TimeMin', dashed: false },
    { source: 14, target: 18, value: 1, typeS: 'predicate', typeT: 'Theme', dashed: false },
    { source: 14, target: 3, value: 1, typeS: 'predicate', typeT: 'Measuremin', dashed: false },
    { source: 3088, target: 18, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3088, target: -5361, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3766, target: 18, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3766, target: -7545, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3729, target: 29, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3729, target: -6958, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3531, target: 29, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3531, target: -8638, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3921, target: 1, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3921, target: -680, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
    { source: 3827, target: 2, value: 1, typeS: 'predicate', typeT: 'Experiencer', dashed: false },
    { source: 3827, target: -675, value: 1, typeS: 'predicate', typeT: 'Attribute', dashed: false },
  ],
  nodes: [
    { id: 3522, type: 'predicate', group: 1, frame: 'Luc 3522', text: ['type'], dashed: false },
    { id: 3172, type: 'predicate', group: 2, frame: 'Luc 3172', text: ['type'], dashed: false },
    { id: 6, type: 'predicate', group: 3, frame: 'demander 6', text: ['require-103', 'order-60.1'], dashed: false },
    { id: 14, type: 'predicate', group: 4, frame: 'le 14', text: ['cardinality'], dashed: false },
    { id: 3088, type: 'predicate', group: 5, frame: 'facture 3088', text: ['type'], dashed: false },
    { id: 3766, type: 'predicate', group: 6, frame: 'facture 3766', text: ['type'], dashed: false },
    { id: 3729, type: 'predicate', group: 7, frame: 'Marie 3729', text: ['type'], dashed: false },
    { id: 3531, type: 'predicate', group: 8, frame: 'Marie 3531', text: ['type'], dashed: false },
    { id: 3921, type: 'predicate', group: 9, frame: '2022-03-05T00:00:00.551705805 3921', text: ['type'], dashed: false },
    { id: 3827, type: 'predicate', group: 10, frame: '2022-03-05T23:59:22.551705805 3827', text: ['type'], dashed: false },
    {
      id: 0,
      idP: 'idP3522 idP3172 idP6 idP14 idP3921 idP3827',
      type: '[A1] Experiencer, TimeMax, Agent, TimeMin, Measuremin',
      group: 1,
      text: ['Luc 3522'],
      dashed: false,
    },
    { id: -2150, idP: 'idP3522', type: '[A1] Attribute', group: 1, text: ['masculine 3522'], dashed: false },
    { id: -4710, idP: 'idP3172', type: '[A2] Attribute', group: 2, text: ['nerd:Person 3172'], dashed: false },
    { id: 18, idP: 'idP6 idP14 idP3088 idP3766', type: '[A3] Theme, Experiencer', group: 3, text: ['facture 6'], dashed: false },
    { id: 29, idP: 'idP6 idP3729 idP3531', type: '[A3] Recipient, Experiencer', group: 3, text: ['Marie 6'], dashed: false },
    {
      id: -5361,
      idP: 'idP3088',
      type: '[A5] Attribute',
      group: 5,
      text: ['wsd:Thing>Concrete>Inanimate>Product>Archive 3088'],
      dashed: false,
    },
    { id: -7545, idP: 'idP3766', type: '[A6] Attribute', group: 6, text: ['feminine 3766'], dashed: false },
    { id: -6958, idP: 'idP3729', type: '[A7] Attribute', group: 7, text: ['feminine 3729'], dashed: false },
    { id: -8638, idP: 'idP3531', type: '[A8] Attribute', group: 8, text: ['nerd:Person 3531'], dashed: false },
    { id: -680, idP: 'idP3921', type: '[A9] Attribute', group: 9, text: ['nerd:TimeMin 3921'], dashed: false },
    { id: -675, idP: 'idP3827', type: '[A10] Attribute', group: 10, text: ['nerd:TimeMax 3827'], dashed: false },
    { id: 1, idP: 'idP3081 idP3491 idP6', type: '[A1] Experiencer, TimeMax', group: 1, text: ['23:59 04/03/2022'], dashed: false },
    { id: 2, idP: 'idP3081 idP3491 idP6', type: '[A1] Experiencer, TimeMin', group: 1, text: ['00:00 04/03/2022'], dashed: false },
    { id: 3, idP: 'idP3854 idP3896 idP6 idP14', type: '[A1] Theme', group: 1, text: ['2'], dashed: false },
  ],
};
