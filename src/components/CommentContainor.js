import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toogleMenu } from "../utils/appSlice";

const CommentsData = [
    {
        name: "Shadab Khan",
        text: " hii, you have reached comment section",
        replies: [
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [

                ]
            },
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [
                    {
                        name: "Shadab Khan",
                        text: " hii, you have reached comment section",
                        replies: [

                        ]
                    },
                    {
                        name: "Shadab Khan",
                        text: " hii, you have reached comment section",
                        replies: [

                        ]
                    },
                ]
            },
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [

                ]
            },
        ]
    },
    {
        name: "Shadab Khan",
        text: " hii, you have reached comment section",
        replies: [

        ]
    },
    {
        name: "Shadab Khan",
        text: " hii, you have reached comment section",
        replies: [

        ]
    },
    {
        name: "Shadab Khan",
        text: " hii, you have reached comment section",
        replies: [
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [

                ]
            },
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [

                ]
            },
        ]
    },
    {
        name: "Shadab Khan",
        text: " hii, you have reached comment section",
        replies: [
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [

                ]
            },
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [

                ]
            },
        ]
    },
    {
        name: "Shadab Khan",
        text: " hii, you have reached comment section",
        replies: [
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [

                ]
            },
            {
                name: "Shadab Khan",
                text: " hii, you have reached comment section",
                replies: [
                    {
                        name: "Shadab Khan",
                        text: " hii, you have reached comment section",
                        replies: [
                            {
                                name: "Shadab Khan",
                                text: " hii, you have reached comment section",
                                replies: [

                                ]
                            },
                        ]
                    },

                ]
            },
        ]
    }
];

const Comment = ({ data }) => {
    return (
        <div className="flex mt-4 items-center">
            <div>
                <img className="rounded-full h-8 w-8 mr-4" src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" alt="user" />
            </div>
            <div>
                <p className="font-bold">{data.name}</p>
                <p>{data.text}</p>
            </div>

        </div>
    )
}

const CommentList = ({ comments }) => {

 

    return comments.map((comment,index) => (
        <div key={index}>
            <Comment data={comment} key={index}/>
            <div className="pl-5 border border-l-black ml-5" >
                <CommentList comments={comment.replies} key={comment} />
            </div>

        </div>
        

    ))


}



const CommentContainor = () => {
// const toggle = useSelector((store)=>store.app.isMenuOpen)
//     const dispatch = useDispatch()
//     const toogle =()=>{
//         dispatch(toogleMenu())
//     }
const [commentOpen , setCommentOPen] = useState(true)
    return (
        <>
         <div   className="bg-white p-5">
               <div onClick={()=>{setCommentOPen(!commentOpen)}} className="mt-0 border border-b-2 cursor-pointer"> <h1 className="font-bold ">Comments</h1></div>
                {/* <Comment data={CommentsData[0]}/> */}
                { commentOpen &&    <CommentList comments={CommentsData} />}
            </div>
        </>
    )
}

export default CommentContainor