const game = document.querySelector("canvas");
let controls = {
  up: [1, 2, 32],
  right: [1, 39]
}
let island = 1;
let keyspressed = {
  up: false,
  down: false,
  left: false,
  right: false,
};