'use server';

import { getFormData } from "./data";

export async function submitForm(formData: FormData) {
  // TODO your action.
  // ex. send email.
  // ex. insert database.
  const data = await getFormData(formData.get('id') as string);
  
  console.log(formData);
}