//

// // const rockPaperScissors = function() {
// //   // TODO: Your code here!
// //   /**
// //    * 경우의수
// //    * 세판의 가위바위보
//   //  * 1 -주먹, 2-주먹 3-주먹
//   //  * 1 -주먹, 2-주먹 3-보자기
//   //  * 1 -주먹, 2-주먹 3-가위
//   //  * 1 -주먹, 2-가위 3-보자기  
//   //  * 1 -주먹, 2-가위 3-가위
//   //  * 1 -주먹, 2-보자기 3-가위
//   //  * 1 -주먹, 2-보자기 3-보자기       
//   //  * 
//   //  * 
//   //  * 각 배열은 중복허용
//   //  * 
//   //  * 이차원배열 리턴
//   //  *  1. [[1],[],[]]
//   //  * 
//   //  * 
//   //  * 
//   //  */


// //   let res = ['rock', 'scissors', 'paper'];
// //   let arr = [];


// //   for(let i = 0; i < res.length; i++) {
// //     for(let j = 0; j < res.length; j++) {
// //       for (let l = 0; l < res.length; l++) {
// //         let node = [];
// //         node.push(res[i],res[j],res[l]);
// //         arr.push(node)
// //       }
// //     }
// //   }
// //   return arr;



// // };

// // 트리구조로 
// /*
//              r   o   u   n   d

//           /          |           \
//          /           |            \
//       rock        scissor        paper
//     /  |  \       /  |  \       /  |  \
//    /   |   \     /   |   \     /   |   \
//   r    s    p   r    s    p   r    s    p   

// */
const rockPaperScissors = function (round) {
  round = round || 3

  let plays = ['rock', 'paper', 'scissors']
  let res = [];

  const recursion = (treeLeft = 0, nodeArr = []) => {  // for의 늪 대신 재귀 사용
    // //console.log(typeof nodeArr)
    //   treeLeft = 0;
    //   nodeArr = [];
    if (treeLeft === round) {  // 종료조건  ---> 1번째 판 ~~~5번째판 까지만 계산하면 된, 5판 땐, res에 담고 리턴, 재귀 종료

      return res.push(nodeArr); // round의 숫자가 아닐때 nodeArr에 담겨진 요소들을 이제 round와 같아졌으니 내부배열 []을 외부배열에 담아야 하므로.

    }

    plays.forEach(item => {
      let newNodeArr = [...nodeArr, item]
      recursion(treeLeft + 1, newNodeArr)
    });


    //console.log(nodeArr)

    //  for(let i = 0; i < plays.length; i++) {// 반복조건 && play의 요소들이 1차원배열에 들어간다. 
    // console.log(typeof nodeArr)
    // console.log(nodeArr)
    // console.log(round)
    // console.log(typeof plays[i])
    // console.log(plays[i])

    //     recursion(treeLeft + 1, nodeArr.push(plays[i])) //트리의 왼쪽만 돌면서 왼쪽이 0이 될때까지 play의 요소들을 plays 랭스만큼 nodeArr에 집어넣는다.--> left가 0이 되면 요소들이 담긴 nodeArr가 res에 담기고, 제일 왼쪽에 있는 left는 이제 가위가 될 것, 이렇게 순차적으로 보자기도 left가 될 것.
    //  }
  };
  recursion();  // 제일 왼쪽 rock이 끝나면 리턴이 되니 다시 제일 왼쪽이 된 가위를 돌게하는 재귀함수
  return res;

};