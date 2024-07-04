'use strict';
console.log('STAR Quiz~~~★');
window.onload = function () {
  /*
   - '*'      document.write('*');
   - 개행      document.write('<br>');
   - space    document.write('&nbsp;'); 
   - 가로선     document.write('<hr>');
   */
  //
  /*

    1] 정사각형
    *****
    *****
    *****
    *****
    *****
  */

  // 가정: document.write('*****'); 은 불가능 '*' 하나로 풀이할 것!
  document.write('★1. 정사각형★<br>');
  for (let i = 0; i < 5; i++) {
    // [i = 0, 1, 2, 3, 4, 5]
    for (let j = 0; j < 5; j++) {
      // [i = 0] [j = 0, 1, 2, 3, 4, 5]
      // [i = 1] [j = 0, 1, 2, 3, 4, 5]
      // [i = 2] [j = 0, 1, 2, 3, 4, 5]
      // [i = 3] [j = 0, 1, 2, 3, 4, 5]
      // [i = 4] [j = 0, 1, 2, 3, 4, 5]
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  /*
    2] 삼각형1
    *
    **
    ***
    ****
    *****
  */

  document.write('★2. 삼각형1-(1)★<br>');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
      // for (let j = 0; j < i + 1; j++) 도 가능!
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    3] 삼각형1-reverse
    *****
    ****
    ***
    **
    *
  */

  document.write('★3. 삼각형1-(2)★<br>');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    4] 삼각형2
        *(4,1)
       **(3,2)
      ***(2,3)
     ****(1,4)
    *****(0,5)
  */

  document.write('★4. 삼각형2-(1)★<br>');
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4 - i; j++) {
      document.write('&nbsp;');
    }
    for (let k = 0; k <= i; k++) {
      // for (let k = 0; k < i + 1; k++) 도 가능!
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  /*
    5] 삼각형2-reverse
    *****
     ****
      ***
       **
        *
  */

  document.write('★5. 삼각형2-(2)★<br>');
  for (let i = 0; i < 5; i++) {
    for (let k = 0; k <= i; k++) {
      document.write('&nbsp;');
    }
    for (let j = 0; j < 5 - i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');
  /*
    6] 정삼각형
        *
       ***
      *****
     ******* 
    ********* 
  */

  document.write('★6. 정삼각형(1)★<br>');
  for (let i = 0; i < 5; i++) {
    for (let j = 1; j < 5 - i; j++) {
      document.write('&nbsp;');
    }
    for (let j = 0; j < i + 1; j++) {
      document.write('*');
    }
    for (let j = 0; j < i; j++) {
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  /*
    6] 정삼각형-reverse
    ********* 
     ******* 
      *****
       ***
        *
  */

  document.write('★6. 정삼각형(2)★<br>');
  for (let i = 0; i < 5; i++) {
    // i = 0 1 2 3 4
    for (let j = 0; j < i; j++) {
      // j = 0 1 2 3 4
      document.write('&nbsp;');
    }
    for (let j = 0; j < 5 - i; j++) {
      // 5 4 3 2 1
      document.write('*');
    }
    for (let j = 0; j < 4 - i; j++) {
      // 4 3 2 1 0
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  /*
    7] 다이아몬드
        *
       ***
      *****
     ******* 
    ********* 
     ******* 
      *****
       ***
        *
  */
  document.write('★7. 다이아몬드(2)★<br>');
  for (let i = 0; i < 5; i++) {
    // i = 0 1 2 3 4
    for (let j = 4; j > i; j--) {
      // j = 4 3 2 1 0
      document.write('&nbsp;');
    }
    for (let j = 0; j <= i; j++) {
      // j = 1 2 3 4 5
      document.write('*');
    }
    for (let j = 0; j < i; j++) {
      // j = 0 1 2 3 4
      document.write('*');
    }
    document.write('<br>');
  }
  for (let i = 0; i < 4; i++) {
    // i = 0 1 2 3
    for (let j = 0; j <= i; j++) {
      // j = 1 2 3 4
      document.write('&nbsp;');
    }
    for (let j = 4; j > i; j--) {
      // j = 4 3 2 1
      document.write('*');
    }
    for (let j = 3; j > i; j--) {
      // j = 3 2 1 0
      document.write('*');
    }
    document.write('<br>');
  }
  document.write('<hr>');

  // document.write('★7. 다이아몬드(2)★<br>');
  // for (let i = 0; i < 5; i++) {
  //   for (let j = 0; j < 4 - i; j++) {
  //     document.write('&nbsp;');
  //   }
  //   for (let j = 0; j <= i; j++) {
  //     document.write('*');
  //   }
  //   for (let j = 0; j < i; j++) {
  //     document.write('*');
  //   }
  //   document.write('<br>');
  // }
  // for (let i = 0; i < 4; i++) {
  //   for (let j = 0; j <= i; j++) {
  //     document.write('&nbsp;');
  //   }
  //   for (let j = 0; j < 4 - i; j++) {
  //     document.write('*');
  //   }
  //   for (let j = 0; j < 3 - i; j++) {
  //     document.write('*');
  //   }
  //   document.write('<br>');
  // }
};
