console.clear();

const cal = [];

CalendarFactory = function (n = 0) {
  const cal = [];

  for (let index = 0; index < n; index++) {
    cal.push([
      {
        doc: null,
        label: '',
        cor: '',
        bkgcor: ''
      },
      {
        doc: null,
        label: '',
        cor: '',
        bkgcor: ''
      },
      {
        doc: null,
        label: '',
        cor: '',
        bkgcor: ''
      },
      {
        doc: null,
        label: '',
        cor: '',
        bkgcor: ''
      },
      {
        doc: null,
        label: '',
        cor: '',
        bkgcor: ''
      },
      {
        doc: null,
        label: '',
        cor: '',
        bkgcor: ''
      },
      {
        doc: null,
        label: '',
        cor: '',
        bkgcor: ''
      }
    ]);
  }
  return cal;
};

const calendario = CalendarFactory(5);

console.log(calendario);
