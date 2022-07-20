export const exempleMarie = {
  links: [
    { source: 3, target: 0, value: 1, typeT: 'Agent', dashed: false },
    { source: 3, target: 14, value: 1, typeT: 'Instrument', dashed: false },
    { source: 3084, target: 14, value: 1, typeT: 'Experiencer', dashed: false },
    { source: 3084, target: -4027, value: 1, typeT: 'Attribute', dashed: false },
    { source: 3545, target: 14, value: 1, typeT: 'Experiencer', dashed: false },
    { source: 3545, target: -2345, value: 1, typeT: 'Attribute', dashed: false },
  ],
  nodes: [
    { id: 3, type: 'predicate', frame: 'manger 3', text: ['eat-39.1-1'], dashed: false },
    { id: 3084, type: 'predicate', frame: 'Marie 3084', text: ['type'], dashed: false },
    { id: 3545, type: 'predicate', frame: 'Marie 3545', text: ['type'], dashed: false },
    { id: 0, idP: 'idP3', type: '[A1] Agent', text: ['je 3'], dashed: false },
    { id: 14, idP: 'idP3 idP3084 idP3545', type: '[A1] Instrument, Experiencer', text: ['Marie 3'], dashed: false },
    { id: -4027, idP: 'idP3084', type: '[A2] Attribute', text: ['feminine 3084'], dashed: false },
    { id: -2345, idP: 'idP3545', type: '[A3] Attribute', text: ['nerd:Person 3545'], dashed: false },
  ],
};
