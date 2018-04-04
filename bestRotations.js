/*
class Solution {
    public int bestRotation(int[] A) {
        int N = A.length;
        int[] bad = new int[N];
        for (int i = 0; i < N; ++i) {
            int left = (i - A[i] + 1 + N) % N;
            int right = (i + 1) % N;
            bad[left]--;
            bad[right]++;
            if (left > right)
                bad[0]--;
        }

        int best = -N;
        int ans = 0, cur = 0;
        for (int i = 0; i < N; ++i) {
            cur += bad[i];
            if (cur > best) {
                best = cur;
                ans = i;
            }
        }
        return ans;
    }
}*/

const bestRotation = (A) => {
  const N = A.length;
  const bad = A.map(() => 0);
  for (let i = 0; i < N; ++i) {
    left = (i - A[i] + 1 + N) % N;
    right = (i + 1) % N;
    bad[left] = bad[left] ? bad[left] + 1 : 1;
    bad[right] = bad[right] + 1;
    if (left > right) bad[0]--;
    console.log(bad, left, right);
  }

  let best = -N;
  let ans = 0;
  let cur = 0;
  for (let i = 0; i < N; ++i) {
    cur = cur + bad[i];
    if (cur > best) {
      best = cur;
      ans = i;
    }
    console.log(best, ans, cur);
  }
  return ans;
}
/*
        int best = -N;
        int ans = 0, cur = 0;
        for (int i = 0; i < N; ++i) {
            cur += bad[i];
            if (cur > best) {
                best = cur;
                ans = i;
            }
        }
        return ans;
    }
}

// const bestRotation = (A) => {
//     const arrLength = A.length;
//     const shiftIndices = {};
//     const diffArr = A.map((v, i) => v - i);
//     const shiftArr = diffArr.map(v => (arrLength - v) % arrLength);
//     shiftArr.map(shift => {
//       if (shift < arrLength) {
//           shiftIndices[shift] = shiftIndices[shift] ? shiftIndices[shift] + 1 : 1;
//       }
//     });
//     const shiftIndicesKeys = Object.keys(shiftIndices);
//     const bestShift = {
//       i: 0,
//       count: 1,
//     }
//     shiftIndicesKeys.map(index => {
//       console.log(shiftIndices[index], " > ", bestShift.count, "? ", shiftArr[index] > bestShift.count)
//       if (shiftIndices[index] > bestShift.count) {
//         bestShift.i = index;
//         bestShift.count = shiftIndices[index];
//       }
//     });
//     console.log(A);
//     console.log(diffArr);
//     console.log(shiftArr);
//     console.log(shiftIndices);
//     console.log(shiftIndicesKeys);

//     return parseInt(bestShift.i);
// };
*/

/*
const bestRotation = (A) => {
  const N = A.length;
  const bad = A.map(() => 0);
  for (let i = 0; i < N; ++i) {
    left = (i - A[i] + 1 + N) % N;
    right = (i + 1) % N;
    bad[left] = bad[left] ? bad[left] + 1 : 1;
    bad[right] = bad[right] + 1;
    if (left > right) bad[0]--;
    console.log(bad, left, right);
  }

  let best = -N;
  let ans = 0;
  let cur = 0;
  for (let i = 0; i < N; ++i) {
    cur = cur + bad[i];
    if (cur > best) {
      best = cur;
      ans = i;
    }
    console.log(best, ans, cur);
  }
  return ans;
}
*/
