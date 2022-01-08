//tutorial: https://codingthesmartway.com/tensorflow-js-crash-course-machine-learning-for-the-web-getting-started/
//tutorial: https://www.youtube.com/watch?v=M4YsClyTMzg



        
        
//tensors
const t1 = tf.tensor([1,2,3,4,5,6,7,8], [2, 4]);

//result of t1:
/* 
[[1,2,3,4],
[2,4,6,8]]
*/




//tensor without defining the shape
const t2 = tf.tensor([1,2,3,4], [2,4,6,8]);

//result of t2 is the same as t1




const t_zeros = tf.zeros([2,3]);

//result of t_zeros:
/*
[[0,0,0],
[0,0,0]]
 */



const t3 = tf.tensor2d([1,2], [3, 4]);
const t3_squared = t3.square();

//result fo t3_squared:
/*
[[1, 4 ],
[9, 16]]
 */