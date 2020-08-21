// const title = 'Top 10 benefits of React Framework';
// const normalizedTitle = title.toLowerCase();
// const words = normalizedTitle.split(' ');
// const slug = words.join('-');
// console.log(normalizedTitle);
// console.log(words);
// console.log(slug);
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

const slugify = function (string) {
  return string.toLowerCase().split(' ').join('-');
};
console.log(slugify('Top 10 benefits of React Framework'));
