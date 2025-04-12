import { create } from 'zustand';
import { FormSet } from '@/app/constants';

interface FormModel {
  title: string;
  desc: string;
  ui: FormSet[];
}

interface FormState {
  title: string;
  desc: string;
  ui: FormSet[];
  setTitle: (by: string) => void;
  setDesc: (by: string) => void;
  setUi: (by: FormSet[]) => void;
  reset: () => void;
}

const initForm:FormModel = {
  title: 'The Title',
  desc: 'The form description text here.',
  ui: [],
}

export const useFromStore = create<FormState>((set) => ({
  title: initForm.title,
  desc: initForm.desc,
  ui: initForm.ui,
  setTitle: (by) => set(() => ({ title: by})),
  setDesc: (by) => set(() => ({ desc: by})),
  setUi: (by) => set(() => ({ ui: by})),
  reset: () => set(() => ({
    title: initForm.title,
    desc: initForm.desc,
    ui: initForm.ui,
  }))
}));


interface MyFormState {
  title: string;
  setTitle: (by: string) => void;
}

export const createformStore = (data?: any) => create<MyFormState>((set) => ({
  title: data ? data.title : 'The form title',
  setTitle: (by) => set(() => ({ title: by})),
}));