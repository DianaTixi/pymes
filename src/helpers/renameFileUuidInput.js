import { v4 as uuidv4 } from 'uuid';

export const renameFileUuidInput = (file) => {
  const nameFile = uuidv4();
  const extension = file.name.split('.')[file.name.split('.').length - 1];
  const blob = file.slice(0, file.size, { type: file.type });
  return new File([blob], `${nameFile}.${extension}`, { type: file.type });
};
