var mongoose = require('mongoose');
module.exports=mongoose.model('question12',{
    question:{
        type:String
    },
    op1:{
        type:String
    },
    op2:{
        type:String
    },
    op3:{
        type:String
    },
    op4:{
        type:String
    },
    correctop:{
        type:String
    },
    topicname:{
        type:String
    }
})