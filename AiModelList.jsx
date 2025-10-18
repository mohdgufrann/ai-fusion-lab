export default [
    {
        model:"GPT",
        icon:"/gpt.png",
        premium:false,
        enable:true,
        subModel: [
            {name:"GPT 3.5",premium:false,id:""},
            {name:"GPT 3.5 Turbo",premium:false,id:""},
            {name:"GPT 4.1",premium:true,id:""},
            {name:"GPT 5 Nano",premium:false,id:""},
            {name:"GPT 5 Mini",premium:false,id:""},
            {name:"GPT 5",premium:true,id:""},
        ],
    },
    {
        model: 'Gemini',
        icon: '/gemini.png',
        premium: false,
        enable: true,
        subModel: [
            {name:"Gemini 2.5 Lite",premium:false},
            {name:"Gemini 2.5 Flash",premium:false},
            {name:"Gemini 2.5 Pro",premium:true},

        ],
    },
    {
        model: "DeepSeek",
        icon: "/deepseek.png",
        premium: false,
        enable: true,
        subModel:[
            {name:"DeepSeek R1",premium:false,id:""},
            {name:"DeepSeek R1 0528",premium:true,id:""},
        ],
    },
    {
       model:"Mistral",
       icon:"/mistral.png",
       premium:true,
       enable:true,
       subModel:[
        {name:"Mistral Medium 2505",premium: true,id:""},
        {name:"Mistral 3B",premium: false,id:""},


],
    },

    {
        model:"Grok",
        icon:"/grok.png",
        premium:true,
        enable:true,
        subModel:[
            {name:"Grok 3 Mini", premium : false, id:""},
            {name:"Grok 3", premium : true, id:""},
        ],

    },

    {
        model:"Cab",
        icon:"/cab.jpg",
        premium:true,
        enable:true,
        subModel:[
            {name:"Cohera Command A",premium:false,id:""},
            {name:"Cohera Command R 08-2024",premium:false,id:""},
        ],
    },
    {
         model:"Llama",
         icon:"/llama.png",
            premium:true,
            enable:true,
            subModel:[
                {name:"Llama 3.3 70B Instruct",premium:false,id:""},
                {nmae:"Llama 4 Scout 17B 16E Instruct",premium:true,id:""},

            ],
        },
];