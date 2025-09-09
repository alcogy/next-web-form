export const formParts: Selection[] = [
  { id: 1, label: 'Textbox' },
  { id: 2, label: 'Selectbox' },
  { id: 3, label: 'Checkbox' },
  { id: 4, label: 'Radiobutton' },
  { id: 5, label: 'Number' },
  { id: 6, label: 'Textarea' },
];

export interface Selection {
  id: number;
  label: string;
}

export interface FormSet {
  label: string;
  name: string;
  type: number;
  require: boolean;
  value: string | number | Date | number[];
  placeholder?: string;
  items?: Selection[];
}

export interface FormData {
  id: string;
  title: string;
  desc: string;
  forms: FormSet[];
}