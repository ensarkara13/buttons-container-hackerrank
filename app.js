const btn5 = document.querySelector("#btn5");

const nums = [1, 2, 3, 6, 9, 8, 7, 4];
const btns = [...nums];

const rotateClockwise = () => {
  nums.unshift(nums.pop());
  btns.forEach((btn, index) => {
    document.querySelector("#btn" + btn).innerHTML = nums[index];
  });
};

btn5.addEventListener("click", () => rotateClockwise());
