export default function toExtract(arg) {
  const specials = arg.special;
  const arr = [];
  specials.forEach((e) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = e;
    arr.push({
      id, name, icon, description,
    });
  });
  return arr;
}
