export const formParts: Selection[] = [
  { id: 1, label: 'Textbox' },
  { id: 2, label: 'Selectbox' },
  { id: 3, label: 'Checkbox' },
  { id: 4, label: 'Radiobutton' },
  { id: 5, label: 'Number' },
];

const countories: Selection[] = [
  { id: 1, label: 'Ireland' },
  { id: 2, label: 'Canada' },
  { id: 3, label: 'Germany' },
  { id: 4, label: 'Japan' },
];

const languages: Selection[] = [
  { id: 1, label: 'TypeScript' },
  { id: 2, label: 'Go' },
  { id: 3, label: 'C++' },
  { id: 4, label: 'Rust' },
  { id: 5, label: 'Java' },
  { id: 6, label: 'Python' },
];

const jobs: Selection[] = [
  { id: 1, label: 'Software Engineer' },
  { id: 2, label: 'Manager' },
  { id: 3, label: 'Sales' },
  { id: 4, label: 'Accounting' },
];

export const sampleForms: FormSet[] = [
  { label: 'Name', type: 1, require: true, value: '', items: undefined, placeholder:'Enter your name.' },
  { label: 'age', type: 5, require: true, value: 14, items: undefined, placeholder: undefined},
  { label: 'Country', type: 2, require: false, value: 2, items: countories, placeholder: undefined},
  { label: 'job', type: 4, require: true, value: 1, items: jobs, placeholder: undefined},
  { label: 'Language', type: 3, require: false, value: 1, items: languages, placeholder: undefined},
  
]

export interface Selection {
  id: number;
  label: string;
}

export interface FormSet {
  label: string;
  type: number;
  require: boolean;
  value: string | number | Date | number[];
  placeholder?: string;
  items?: Selection[];
}